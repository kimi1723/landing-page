export type Elements = {
  [key: string]: HTMLElement;
};

export type Product = {
  label: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
  sources: {
    [key: string]: {
      [key: number]: string;
    };
  };
  imgAlt: string;
};
