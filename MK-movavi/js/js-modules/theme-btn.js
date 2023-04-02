const theme = () => {
  const toggleBtn = document.querySelector(".theme-btn");
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    moon.classList.toggle("d-none");
    sun.classList.toggle("d-none");
  });
};
export default theme;
