//sticky header
export const stickyHeaderHandler = function () {
  let top = document.querySelector("sticky-header")
    ? document.querySelector("sticky-header").offsetTop
    : 600;

  let stickyHeader = document.querySelector(".sticky-header");
  let height = 0;

  if (stickyHeader) {
    height = stickyHeader.offsetHeight;
  }

  if (window.pageYOffset >= top && window.outerWidth >= 992) {
    if (stickyHeader) {
      stickyHeader.classList.add("fixed");
      if (!document.querySelector(".sticky-wrapper")) {
        let newNode = document.createElement("div");
        newNode.className = "sticky-wrapper";
        stickyHeader.parentNode.insertBefore(newNode, stickyHeader);
        document
          .querySelector(".sticky-wrapper")
          .insertAdjacentElement("beforeend", stickyHeader);
        document
          .querySelector(".sticky-wrapper")
          .setAttribute("style", "height: " + height + "px");
      }

      if (!document.querySelector(".sticky-wrapper").getAttribute("style")) {
        document
          .querySelector(".sticky-wrapper")
          .setAttribute("style", "height: " + height + "px");
      }
    }
  } else {
    if (stickyHeader) {
      stickyHeader.classList.remove("fixed");
    }

    if (document.querySelector(".sticky-wrapper")) {
      document.querySelector(".sticky-wrapper").removeAttribute("style");
    }
  }

  if (window.outerWidth < 992 && document.querySelector(".sticky-wrapper")) {
    document.querySelector(".sticky-wrapper").style.height = "auto";
  }
};
