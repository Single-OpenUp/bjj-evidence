import type { Camera } from "@/types/camera";

export const PREVIEW_VARIANT = "480p";

interface AulaCamera {
  label: string;
  slug: string;
}

const COMMON_CAMERAS: AulaCamera[] = [
  { label: "Câmera 1 · Teto", slug: "cam1-teto" },
  { label: "Câmera 2", slug: "cam2" },
  { label: "Câmera 3", slug: "cam3" },
  { label: "Câmera 4", slug: "cam4" },
  { label: "Câmera 5", slug: "cam5" },
  { label: "Câmera 6", slug: "cam6" },
  { label: "Câmera 7", slug: "cam7" },
  { label: "Câmera 8", slug: "cam8" },
];

const AULA_CAMERAS: Record<string, AulaCamera[]> = {
  "aula-1": COMMON_CAMERAS,
  "aula-2": COMMON_CAMERAS,
};

export const getCamerasForAula = (aula: string): AulaCamera[] => {
  return AULA_CAMERAS[aula] || [];
};

export const buildCameraList = (cameras: AulaCamera[]): Camera[] => {
  return cameras.map((camera) => ({
    name: camera.label,
    file: {
      label: camera.label,
      filename: camera.slug,
      slug: camera.slug,
    },
  }));
};
