import { productsData } from "../../data/productsData";

import { getProductElements } from "./getProductElements";
import { setElements } from "./setElements";

export const handleProducts = () => {
  const productsBox = document.querySelector(
    ".products__products-box"
  ) as HTMLDivElement;

  const setImagesFunctions = productsData.map((product) => {
    const elements = getProductElements();

    return setElements(elements, product, productsBox);
  });

  return setImagesFunctions;
};
