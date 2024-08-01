import "./main.scss";

import { checkIsMobile } from "./ts/utils";

import { handleNav } from "./ts/handlers/nav/handleNav";
import { handleProducts } from "./ts/handlers/products/handleProducts";
import { handleTestimonial } from "./ts/handlers/testimonial/handleTestimonial";
import { handleOfferProducts } from "./ts/handlers/offer-products/handleOfferProducts";

const setNavStyles = handleNav();
const setProductsImages = handleProducts();

handleTestimonial();
const setOfferProductsImages = handleOfferProducts();

window.addEventListener("resize", () => {
  const isMobile = checkIsMobile();
  const resVersion = isMobile ? "mobile" : "desktop";

  setNavStyles(isMobile);
  setProductsImages.forEach((fun) => fun(resVersion));
  setOfferProductsImages.forEach((fun) => fun !== undefined && fun(resVersion));
});
