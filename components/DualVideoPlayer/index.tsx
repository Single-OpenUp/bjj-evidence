"use client";

import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Video } from "../Video";
import { useHLSPlayer } from "@/hooks/use-hls-player";
import { useVideoSync } from "@/hooks/use-video-sync";
import { useControlsVisibility } from "@/hooks/use-controls-visibility";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { buildHlsMasterSrc, slugFromFilename } from "@/utils/video-sources";
import type { Camera } from "@/types/camera";

interface DualVideoPlayerProps {
  videoUrls: string[];
  videoLabels?: string[];
}

export const DualVideoPlayer = ({
  videoUrls,
  videoLabels = ["Video 1", "Video 2"],
}: DualVideoPlayerProps) => {
  const cameras: Camera[] = useMemo(
    () =>
      videoUrls.map((url, index) => ({
        name: videoLabels[index] || `Video ${index + 1}`,
        file: {
          label: videoLabels[index] || `Video ${index + 1}`,
          filename: url.split("/").pop() || `video-${index}`,
          slug: slugFromFilename(url.split("/").pop() || `video-${index}`),
        },
      })),
    [videoUrls, videoLabels]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [volume, setVolume] = useState(100);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { showControls, handleMouseMove, handleMouseLeave } =
    useControlsVisibility();
  const { isFullscreen, toggleFullscreen } = useFullscreen(videoContainerRef);
  const { attachStream, isLiveStream } = useHLSPlayer({
    cameras,
    videoRefs,
    activeIndex,
  });

  useVideoSync({
    cameras,
    videoRefs,
    activeIndex,
    isLiveStream,
  });

  const videoSources = useMemo(
    () =>
      videoUrls.map((url) => {
        // Check if it's already an HLS URL
        if (url.includes(".m3u8")) {
          return url;
        }
        // Otherwise treat it as a filename and build HLS URL
        return buildHlsMasterSrc(url.split("/").pop() || url);
      }),
    [videoUrls]
  );

  // Attach streams
  useEffect(() => {
    videoSources.forEach((src, index) => {
      attachStream(index, src);
    });
  }, [videoSources, attachStream]);

  // Set volume
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.volume = volume / 100;
      }
    });
  }, [volume]);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cameras.length) % cameras.length);
  }, [cameras.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cameras.length);
  }, [cameras.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case " ":
          e.preventDefault();
          {
            const video = videoRefs.current[activeIndex];
            if (video) {
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }
          }
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        default:
          break;
      }
    },
    [activeIndex, handlePrevious, handleNext, toggleFullscreen]
  );

  return (
    <div
      ref={videoContainerRef}
      className={`relative w-full ${isFullscreen ? "h-screen" : "h-96"} transition-all duration-300`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Single Video Player */}
      <div className="w-full h-full">
        <Video
          cameras={cameras}
          activeIndex={activeIndex}
          videoRefs={videoRefs}
          showControls={showControls}
          volume={volume}
          isFullscreen={isFullscreen}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onVolumeChange={setVolume}
          onFullscreenToggle={toggleFullscreen}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Video Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
        {activeIndex + 1} / {cameras.length}
      </div>
    </div>
  );
};
