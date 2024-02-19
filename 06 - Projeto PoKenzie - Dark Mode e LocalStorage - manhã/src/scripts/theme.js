export function handleDarkMode() {
  const darkModeButton = document.querySelector(".header__theme-btn");
  const html = document.querySelector("html");

  const darkMode = localStorage.getItem("@pokenzie:theme");
  console.log(darkMode);

  if (darkMode) {
    html.classList.add("dark-mode");
    darkModeButton.classList.add("header__theme-btn--sun");
  }

  darkModeButton.addEventListener("click", (event) => {
    // V1 - if tradicional
    // if (darkModeButton.classList.contains("header__theme-btn--sun")) {
    //   darkModeButton.classList.remove("header__theme-btn--sun");
    // } else {
    //   darkModeButton.classList.add("header__theme-btn--sun");
    // }
    // V2 - TOGGLE
    darkModeButton.classList.toggle("header__theme-btn--sun");

    html.classList.toggle("dark-mode");

    // V1 - if tradicional
    // if (html.classList.contains("dark-mode")) {
    //   localStorage.setItem("@pokenzie:theme", "dark");
    // } else {
    //   localStorage.removeItem("@pokenzie:theme");
    // }
    // V2 - ternário
    html.classList.contains("dark-mode")
      ? localStorage.setItem("@pokenzie:theme", "dark")
      : localStorage.removeItem("@pokenzie:theme");
  });
}
