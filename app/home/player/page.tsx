"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { buildCameraList } from "@/utils/camera-config";
import { buildHlsMasterSrc } from "@/utils/video-sources";
import { useControlsVisibility } from "@/hooks/use-controls-visibility";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { useHLSPlayer } from "@/hooks/use-hls-player";
import { useVideoSync } from "@/hooks/use-video-sync";
import { CameraSelector } from "@/components/CameraSelector";
import { Header } from "@/components/Header";
import { Video } from "@/components/Video";

export default function PlayerPage() {
  const cameras = useMemo(() => buildCameraList(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [volume, setVolume] = useState(50);

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Custom hooks
  const { showControls, handleMouseMove, handleMouseLeave } = useControlsVisibility();
  const { isFullscreen, toggleFullscreen } = useFullscreen(videoContainerRef);
  const { attachStream, isLiveStream } = useHLSPlayer({
    cameras,
    videoRefs,
    activeIndex,
  });
  const { syncTime } = useVideoSync({
    cameras,
    videoRefs,
    activeIndex,
    isLiveStream,
  });

  // Camera navigation
  const selectCamera = useCallback(
    (index: number) => {
      const prevIndex = activeIndex;
      setActiveIndex(index);
      syncTime(prevIndex, index);
    },
    [activeIndex, syncTime]
  );

  const nextCamera = useCallback(() => {
    selectCamera((activeIndex + 1) % cameras.length);
  }, [activeIndex, cameras.length, selectCamera]);

  const previousCamera = useCallback(() => {
    selectCamera((activeIndex - 1 + cameras.length) % cameras.length);
  }, [activeIndex, cameras.length, selectCamera]);

  // Volume control
  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.volume = newVolume / 100;
        video.muted = newVolume === 0;
      }
    });
  }, []);

  // Initialize HLS streams
  useEffect(() => {
    cameras.forEach((camera, index) => {
      const src = buildHlsMasterSrc(camera.file.slug);
      attachStream(index, src);
    });

    // Initialize volume on mount
    videoRefs.current.forEach((video) => {
      if (video) {
        video.volume = volume / 100;
        video.muted = volume === 0;
      }
    });
  }, [cameras, attachStream, volume]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-zinc-900 px-2 py-4 text-white lg:px-4 lg:py-6">
      <main className="mx-auto flex w-full max-w-full flex-col gap-6">
        <Header />

        <div className="flex flex-row gap-8 flex-nowrap items-stretch">
          {/* Camera Selector */}
          <CameraSelector
            cameras={cameras}
            activeIndex={activeIndex}
            onSelectCamera={selectCamera}
          />

          {/* Main Video Player */}
          <section className="flex flex-1 flex-col gap-4 min-w-0">
            <div ref={videoContainerRef} className="w-full h-full">
              <Video
                cameras={cameras}
                activeIndex={activeIndex}
                videoRefs={videoRefs}
                showControls={showControls}
                volume={volume}
                isFullscreen={isFullscreen}
                onPrevious={previousCamera}
                onNext={nextCamera}
                onVolumeChange={handleVolumeChange}
                onFullscreenToggle={toggleFullscreen}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
