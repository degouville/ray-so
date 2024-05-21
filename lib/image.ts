import { toPng as htmlToPng, toSvg as htmlToSvg, toBlob as htmlToBlob } from "html-to-image";

const imageFilter = (node: HTMLElement) => node.tagName !== "TEXTAREA" && !node.dataset?.ignoreInExport;

const htmlToImageOptions = {
  filter: imageFilter,
  pixelRatio: 2,
  skipAutoScale: true,
};

type PngOptions = Parameters<typeof htmlToPng>[1];
export const toPng = async (node: HTMLElement, options?: PngOptions) => {
  return htmlToPng(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

type BlobOptions = Parameters<typeof htmlToBlob>[1];
export const toBlob = async (node: HTMLElement, options?: BlobOptions) => {
  return htmlToBlob(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

type SvgOptions = Parameters<typeof htmlToSvg>[1];
export const toSvg = async (node: HTMLElement, options?: SvgOptions) => {
  return htmlToSvg(node, {
    ...htmlToImageOptions,
    ...options,
  });
};
