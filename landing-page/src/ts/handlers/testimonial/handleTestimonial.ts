import { setStars } from "../../utils";

export const handleTestimonial = () => {
  const testimonialRatingEl = document.querySelector(
    ".testimonial__rating"
  ) as HTMLDivElement;

  setStars(testimonialRatingEl, 5);
};
