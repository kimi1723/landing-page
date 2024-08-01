import { mobileImagesPath, desktopImagesPath } from "../constants";

export const productsData = [
  {
    label: "Vegetable",
    title: "Calabrese broccoli",
    originalPrice: 25,
    discountedPrice: 21,
    rating: 5,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/1-1x.webp`,
        2: `${mobileImagesPath}/products/1-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/1-1x.webp`,
        2: `${desktopImagesPath}/products/1-2x.webp`,
      },
    },
    imgAlt: "Delicious, halved broccoli",
  },
  {
    label: "Vegetable",
    title: "Fresh corn",
    originalPrice: 21.23,
    discountedPrice: 18,
    rating: 3,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/2-1x.webp`,
        2: `${mobileImagesPath}/products/2-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/2-1x.webp`,
        2: `${desktopImagesPath}/products/2-2x.webp`,
      },
    },
    imgAlt: "Delicious half-opened corn",
  },
  {
    label: "Millets",
    title: "Dried pistachio",
    originalPrice: 61,
    discountedPrice: 48,
    rating: 4,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/3-1x.webp`,
        2: `${mobileImagesPath}/products/3-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/3-1x.webp`,
        2: `${desktopImagesPath}/products/3-2x.webp`,
      },
    },
    imgAlt: "Beautiful pistachios in a bowl",
  },
  {
    label: "Millets",
    title: "Vegan red tomato",
    originalPrice: 14,
    discountedPrice: 9.37,
    rating: 4,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/4-1x.webp`,
        2: `${mobileImagesPath}/products/4-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/4-1x.webp`,
        2: `${desktopImagesPath}/products/4-2x.webp`,
      },
    },
    imgAlt: "Small tomatos connected with a branch",
  },
  {
    label: "Fruits",
    title: "Organic almonds",
    originalPrice: 21,
    discountedPrice: 18,
    rating: 2,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/5-1x.webp`,
        2: `${mobileImagesPath}/products/5-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/5-1x.webp`,
        2: `${desktopImagesPath}/products/5-2x.webp`,
      },
    },
    imgAlt: "Delicious almonds packed in a brown, see-through bag",
  },
  {
    label: "Millets",
    title: "Brown hazelnut",
    originalPrice: 43,
    discountedPrice: 34,
    rating: 3,
    sources: {
      mobile: {
        1: `${mobileImagesPath}/products/6-1x.webp`,
        2: `${mobileImagesPath}/products/6-2x.webp`,
      },
      desktop: {
        1: `${desktopImagesPath}/products/6-1x.webp`,
        2: `${desktopImagesPath}/products/6-2x.webp`,
      },
    },
    imgAlt: "Delicious, scattered hazelnuts",
  },
];
