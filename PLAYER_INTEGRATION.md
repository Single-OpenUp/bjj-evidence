# BJJ Player Integration - Project Merge

## Overview

The **bjj-player** project has been successfully integrated into the **bjj-evidence** project. The video player components, hooks, and utilities are now available in the bjj-evidence project to enable multi-camera video playback and analysis.

## What Was Integrated

### 1. **Components** (`/components/`)

- **`Video/`** - Main video wrapper component with controls and HUD
- **`VideoPlayer/`** - Core video element renderer supporting multiple cameras
- **`VideoHUD/`** - Heads-up display with camera name and controls
- **`VolumeControl/`** - Volume control slider component
- **`DualVideoPlayer/`** - **NEW** - Dual-mode player for switching between two video feeds

### 2. **Hooks** (`/hooks/`)

- **`use-hls-player.ts`** - HLS streaming player with adaptive bitrate
- **`use-video-sync.ts`** - Synchronizes playback across multiple videos
- **`use-controls-visibility.ts`** - Auto-hide/show UI controls on mouse movement
- **`use-fullscreen.ts`** - Fullscreen functionality

### 3. **Utilities** (`/utils/`)

- **`video-sources.ts`** - HLS URL builder and video source path management

### 4. **Types** (`/types/`)

- **`camera.ts`** - TypeScript interfaces for camera, video state, and HLS handling

## Key Features

✅ **Multi-Camera Support** - Switch between multiple video streams  
✅ **HLS Streaming** - Adaptive bitrate streaming with hls.js  
✅ **Video Sync** - Automatic playback synchronization across feeds  
✅ **Controls** - Volume, fullscreen, navigation between cameras  
✅ **Responsive** - Works with keyboard shortcuts and mouse controls  
✅ **Auto-Hide UI** - Controls fade after 3 seconds of inactivity

## How to Use

### Basic Example - Two-Camera Player

```tsx
import { DualVideoPlayer } from "@/components/DualVideoPlayer";

export default function VideosPage() {
  return (
    <DualVideoPlayer
      videoUrls={["cam1-teto", "cam2"]}
      videoLabels={["Camera 1 (Teto)", "Camera 2"]}
    />
  );
}
```

### Integration in Videos Page

The videos page at `/app/home/videos/page.tsx` now displays:

- A dual video player when a video is selected
- Video switching with arrow keys or on-screen buttons
- Full video analysis interface

## Installation

Before using these components, install the required dependency:

```bash
pnpm install
```

This will install `hls.js` as specified in `package.json`.

## Keyboard Shortcuts

| Key     | Action            |
| ------- | ----------------- |
| `←`     | Previous camera   |
| `→`     | Next camera       |
| `Space` | Play/Pause        |
| `F`     | Toggle fullscreen |

## Component Structure

```
components/
├── Video/
│   ├── index.tsx          # Main video component
│   ├── VideoPlayer/       # Video elements
│   ├── VideoHUD/          # Controls & info
│   └── VolumeControl/     # Volume slider
└── DualVideoPlayer/       # Dual camera player

hooks/
├── use-hls-player.ts      # HLS stream management
├── use-video-sync.ts      # Playback sync
├── use-controls-visibility.ts
└── use-fullscreen.ts      # Fullscreen handling

types/
└── camera.ts              # TypeScript interfaces

utils/
└── video-sources.ts       # URL builders
```

## Integration Details

The player is integrated into the videos page sidebar. When selecting a video:

1. The `DualVideoPlayer` loads two HLS streams
2. Users can switch between cameras using arrow buttons or keyboard
3. Playback is synchronized across both streams
4. Volume and fullscreen controls are available

## Next Steps

1. **Install dependencies**: `pnpm install`
2. **Copy HLS video files**: Ensure video files are in `/public/available_cameras/hls/`
3. **Test the player**: Navigate to the videos page and select a video
4. **Configure camera URLs**: Update video URLs in the mockVideos or connect to real video sources

## File Changes Summary

- **Added**: 13 new component, hook, and utility files
- **Modified**:
  - `package.json` - Added hls.js dependency
  - `app/home/videos/page.tsx` - Integrated DualVideoPlayer
- **New Exports**:
  - `components/index.ts`
  - `hooks/index.ts`

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **hls.js** - HLS streaming
- **Tailwind CSS** - Styling
- **React Hooks** - State management
