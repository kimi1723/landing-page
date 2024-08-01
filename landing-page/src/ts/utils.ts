import { mobileWidthPx, defaultRemDivider } from "./constants";

export const getDefaultRem = (px: number) => px / defaultRemDivider;

export const getActualRem = (px: number) => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  return px / fontSize;
};

export const checkIsMobile = () =>
  getActualRem(window.innerWidth) < getDefaultRem(mobileWidthPx);

export const setStars = (parent: HTMLElement, times: number) => {
  const starTemplate = document.querySelector("#star") as HTMLTemplateElement;
  const star = starTemplate.content.cloneNode(true) as HTMLElement;

  for (let i = 0; i < times; i++) {
    parent.appendChild(star.cloneNode(true));
  }
};
