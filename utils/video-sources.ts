const USE_S3 = process.env.NEXT_PUBLIC_USE_S3 === "true";
const S3_BUCKET = process.env.NEXT_PUBLIC_S3_BUCKET || "";
const S3_REGION = process.env.NEXT_PUBLIC_S3_REGION || "us-east-1";

const getS3Url = (path: string): string => {
  return `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${path}`;
};

const getLocalUrl = (path: string): string => {
  return `/bjj-aulas/${path}`;
};

const buildUrl = (path: string, aula: string): string => {
  const fullPath = `${aula}/${path}`;
  return USE_S3 ? getS3Url(fullPath) : getLocalUrl(fullPath);
};

export const buildVideoSrc = (filename: string, aula: string): string =>
  buildUrl(encodeURIComponent(filename), aula);

export const buildPreviewSrc = (filename: string, aula: string): string => {
  const dotIndex = filename.lastIndexOf(".");
  const previewName =
    dotIndex === -1
      ? `${filename}.preview`
      : `${filename.slice(0, dotIndex)}.preview${filename.slice(dotIndex)}`;
  return buildVideoSrc(previewName, aula);
};

export const slugFromFilename = (filename: string): string => {
  const dotIndex = filename.lastIndexOf(".");
  const stem = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
  return stem
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9_.-]/g, "");
};

export const buildHlsMasterSrc = (cameraSlug: string, aula: string): string => {
  return buildUrl(`${cameraSlug}/master.m3u8`, aula);
};

export const buildHlsVariantSrc = (cameraSlug: string, variant: string, aula: string): string => {
  return buildUrl(`${cameraSlug}/${cameraSlug}_${variant}.m3u8`, aula);
};
