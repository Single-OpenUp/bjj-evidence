import type { Camera } from "@/types/camera";

export const PREVIEW_VARIANT = "480p";

interface AulaCamera {
  label: string;
  slug: string;
}

const AULA_CAMERAS: Record<string, AulaCamera[]> = {
  "aula-1": [
    { label: "Câmera 1", slug: "bjj-evidence---aula-1---cam01" },
    { label: "Câmera 2", slug: "bjj-evidence---aula-1---cam02" },
    { label: "Câmera 3", slug: "bjj-evidence---aula-1---cam03" },
    { label: "Câmera 4", slug: "bjj-evidence---aula-1---cam04" },
    { label: "Câmera 5", slug: "bjj-evidence---aula-1---cam05" },
    { label: "Câmera 6", slug: "bjj-evidence---aula-1---cam06" },
    { label: "Câmera 7", slug: "bjj-evidence---aula-1---cam07" },
    { label: "Câmera 8", slug: "bjj-evidence---aula-1---cam08" },
  ],
  "aula-2": [
    { label: "Câmera 1", slug: "bjj-evidence---aula-2---cam01" },
    { label: "Câmera 2", slug: "bjj-evidence---aula-2---cam02" },
    { label: "Câmera 3", slug: "bjj-evidence---aula-2---cam03" },
    { label: "Câmera 4", slug: "bjj-evidence---aula-2---cam04" },
    { label: "Câmera 5", slug: "bjj-evidence---aula-2---cam05" },
    { label: "Câmera 6", slug: "bjj-evidence---aula-2---cam06" },
    { label: "Câmera 7", slug: "bjj-evidence---aula-2---cam07" },
    { label: "Câmera 8", slug: "bjj-evidence---aula-2---cam08" },
  ],
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
