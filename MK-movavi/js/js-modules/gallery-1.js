const gallery1 = () => {
  const slides = document.querySelectorAll(".gallery-1__slide");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
};
export default gallery1;
