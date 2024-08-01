import { Elements } from "../../types/productTypes";

export const getProductElements = (): Elements => {
  const productTemplate = document.querySelector(
    "#product"
  ) as HTMLTemplateElement;
  const product = productTemplate.content.cloneNode(true) as HTMLElement;

  const imgEl = product.querySelector(".product__img") as HTMLImageElement;
  const labelEl = product.querySelector(".label") as HTMLParagraphElement;
  const titleEl = product.querySelector(".subtitle") as HTMLHeadingElement;
  const originalPriceEl = product.querySelector(
    ".product__original-price"
  ) as HTMLParagraphElement;
  const discountedPriceEl = product.querySelector(
    ".product__discounted-price"
  ) as HTMLParagraphElement;
  const ratingEl = product.querySelector(".product__rating") as HTMLDivElement;

  return {
    product,
    imgEl,
    labelEl,
    titleEl,
    originalPriceEl,
    discountedPriceEl,
    ratingEl,
  };
};
