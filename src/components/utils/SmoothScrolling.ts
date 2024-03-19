import { useEffect } from "react";

function enableSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId !== null) {
        const targetElement = document.querySelector(targetId);
        if (targetElement instanceof HTMLElement) {
          const offset = 100; // Customize the offset as needed
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY - offset;
          const customTopPosition = targetPosition - 10; // Customize the top position measurement
          window.scroll({
            top: customTopPosition,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

function SmoothScrolling() {
  useEffect(() => {
    enableSmoothScrolling();
  }, []);

  return null;
}

export default SmoothScrolling;
