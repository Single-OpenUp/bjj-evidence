// Local-only helpers that serve HLS from the public folder
const LOCAL_PREFIX = "available_cameras";

const buildUrl = (path: string): string => {
  return `/${LOCAL_PREFIX}/${path}`;
};

export const buildVideoSrc = (filename: string): string =>
  buildUrl(encodeURIComponent(filename));

export const buildPreviewSrc = (filename: string): string => {
  const dotIndex = filename.lastIndexOf(".");
  const previewName =
    dotIndex === -1
      ? `${filename}.preview`
      : `${filename.slice(0, dotIndex)}.preview${filename.slice(dotIndex)}`;
  return buildVideoSrc(previewName);
};

export const slugFromFilename = (filename: string): string => {
  const dotIndex = filename.lastIndexOf(".");
  const stem = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
  return stem
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9_.-]/g, "");
};

export const buildHlsMasterSrc = (cameraSlugOrFilename: string): string => {
  const slug = slugFromFilename(cameraSlugOrFilename);
  return buildUrl(`hls/${slug}/master.m3u8`);
};

export const buildHlsVariantSrc = (cameraSlugOrFilename: string, variant: string): string => {
  const slug = slugFromFilename(cameraSlugOrFilename);
  return buildUrl(`hls/${slug}/${slug}_${variant}.m3u8`);
};
