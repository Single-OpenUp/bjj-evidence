"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { buildCameraList, getCamerasForAula } from "@/utils/camera-config";
import { buildHlsMasterSrc } from "@/utils/video-sources";
import { useAula } from "@/contexts/AulaContext";
import { useControlsVisibility } from "@/hooks/use-controls-visibility";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { useHLSPlayer } from "@/hooks/use-hls-player";
import { useVideoSync } from "@/hooks/use-video-sync";
import { CameraSelector } from "@/components/CameraSelector";
import { Header } from "@/components/Header";
import { Video } from "@/components/Video";

export default function PlayerPage() {
  const { selectedAula } = useAula();
  const [activeIndex, setActiveIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  const router = useRouter();

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Get cameras for the selected aula
  const fetchedCameras = useMemo(
    () => getCamerasForAula(selectedAula),
    [selectedAula]
  );

  const cameras = useMemo(
    () => buildCameraList(fetchedCameras),
    [fetchedCameras]
  );

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

  // Initialize HLS streams - only for active and adjacent cameras
  useEffect(() => {
    // Only load the active camera and maybe preload adjacent ones
    const indexesToLoad = [activeIndex];

    // Optionally preload next camera for smooth transitions
    if (activeIndex < cameras.length - 1) {
      indexesToLoad.push(activeIndex + 1);
    }

    cameras.forEach((camera, index) => {
      if (indexesToLoad.includes(index)) {
        const src = buildHlsMasterSrc(camera.file.slug);
        attachStream(index, src);
      }
    });

    // Initialize volume on mount
    videoRefs.current.forEach((video) => {
      if (video) {
        video.volume = volume / 100;
        video.muted = video !== videoRefs.current[activeIndex];
      }
    });
  }, [cameras, attachStream, volume, selectedAula, activeIndex]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-zinc-900 px-2 py-4 text-white lg:px-4 lg:py-6">
      <main className="mx-auto flex w-full max-w-full flex-col gap-6">
        <Header />

        <div className="flex">
          <button
            onClick={() => router.push("/home/courses")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-700 transition-colors"
          >
            Voltar para aulas
          </button>
        </div>

        <div className="flex flex-row gap-8 flex-nowrap items-stretch" key={selectedAula}>
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
