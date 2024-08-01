import { checkIsMobile } from "../../utils";

const burgerBtn = document.querySelector(
  ".nav-bar__burger-btn"
) as HTMLAnchorElement;
const crossBtn = document.querySelector(
  ".nav-bar__cross-btn"
) as HTMLAnchorElement;
const navBarContent = document.querySelector(
  ".nav-bar__content"
) as HTMLDivElement;
let isVisible = false;
let timeout: ReturnType<typeof setTimeout>;

const toggleNav = () => {
  if (isVisible) {
    crossBtn.classList.remove("d-none");
    burgerBtn.classList.add("d-none");
    navBarContent.classList.add("nav-bar__content--visible");
    navBarContent.classList.remove("hidden");
  } else {
    crossBtn.classList.add("d-none");
    burgerBtn.classList.remove("d-none");
    navBarContent.classList.remove("nav-bar__content--visible");

    setTimeout(() => navBarContent.classList.add("hidden"), 400);
  }

  navBarContent.ariaExpanded = isVisible.toString();
  navBarContent.ariaHidden = (!isVisible).toString();
};

const handleStyles = () => {
  return (isMobile: boolean) => {
    clearTimeout(timeout);

    if (isMobile) {
      navBarContent.ariaExpanded = isVisible.toString();
      navBarContent.ariaHidden = (!isVisible).toString();

      if (!isVisible) {
        timeout = setTimeout(() => navBarContent.classList.add("hidden"), 400);
        navBarContent.classList.remove("nav-bar__content--visible");
        burgerBtn.classList.remove("d-none");
      } else {
        crossBtn.classList.remove("d-none");
      }

      return;
    }

    if (!isVisible) {
      navBarContent.classList.remove("hidden");
      navBarContent.classList.add("nav-bar__content--visible");
    }

    crossBtn.classList.add("d-none");
    burgerBtn.classList.add("d-none");
    navBarContent.removeAttribute("aria-expanded");
    navBarContent.removeAttribute("aria-hidden");
  };
};

export const handleNav = () => {
  const isMobile = checkIsMobile();
  const setStyles = handleStyles();
  setStyles(isMobile);

  burgerBtn.addEventListener("click", () => {
    isVisible = true;
    toggleNav();
  });
  crossBtn.addEventListener("click", () => {
    isVisible = false;
    toggleNav();
  });

  return setStyles;
};
