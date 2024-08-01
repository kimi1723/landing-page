import { productsData } from "../../data/productsData";
import { getProductElements } from "../products/getProductElements";
import { setElements } from "../products/setElements";

const productsToRetrieve = [
  "Vegan red tomato",
  "Organic almonds",
  "Fresh corn",
];

export const handleOfferProducts = () => {
  const productsBox = document.querySelector(
    ".offer-products__products-box"
  ) as HTMLDivElement;

  const filteredProducts = productsToRetrieve.map((p) =>
    productsData.find(({ title }) => title === p)
  );

  const setImagesFunctions = filteredProducts.map((product) => {
    if (product === undefined) return;

    const elements = getProductElements();

    return setElements(elements, product, productsBox);
  });

  return setImagesFunctions;
};
