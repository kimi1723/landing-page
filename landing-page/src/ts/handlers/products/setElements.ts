import { Elements, Product } from "../../types/productTypes";
import { checkIsMobile, setStars } from "../../utils";

const transformPrice = (price: number) =>
  Number.isInteger(price) ? `$ ${price}.00 USD` : `$ ${price} USD`;

const useImages = ({
  imgEl,
  sources,
  imgAlt,
}: {
  imgEl: HTMLElement;
  sources: Product["sources"];
  imgAlt: string;
}) => {
  let lastResolution: undefined | string;

  return (sourcesResolution: string) => {
    if (sourcesResolution !== lastResolution) {
      const sourcesMapped = Object.entries(sources[sourcesResolution]).map(
        ([key, val]) => `${val} ${key}x`
      );
      const firstSource = sourcesMapped[0].toString().slice(0, -3);
      const srcset = sourcesMapped.toString();

      imgEl.setAttribute("src", firstSource);
      imgEl.setAttribute("srcset", srcset);
      imgEl.setAttribute("alt", imgAlt);
      lastResolution = sourcesResolution;
    }
  };
};

export const setElements = (
  {
    product,

    imgEl,
    labelEl,
    titleEl,
    originalPriceEl,
    discountedPriceEl,
    ratingEl,
  }: Elements,
  {
    label,
    title,
    originalPrice,
    discountedPrice,
    rating,
    sources,
    imgAlt,
  }: Product,
  productsBox: HTMLDivElement
) => {
  const sourcesResolution = checkIsMobile() ? "mobile" : "desktop";
  const setImages = useImages({ imgEl, sources, imgAlt });
  setImages(sourcesResolution);

  const originalPriceTransformed = transformPrice(originalPrice);
  const discountedPriceTransformed = transformPrice(discountedPrice);

  setStars(ratingEl, rating);

  titleEl.textContent = title;
  labelEl.textContent = label;
  originalPriceEl.textContent = originalPriceTransformed;
  discountedPriceEl.textContent = discountedPriceTransformed;

  productsBox.appendChild(product);

  return setImages;
};
