// script.js
const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  // If body is in .light mode, switch to .dark, else switch to .light
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggleBtn.textContent = "Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggleBtn.textContent = "Dark Mode";
  }
});
