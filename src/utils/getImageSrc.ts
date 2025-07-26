export function getImageSrc(imagePath: string): string {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return new URL(`../assets/${imagePath}`, import.meta.url).href;
}
