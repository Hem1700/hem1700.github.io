// Theme Toggle
const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
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

// Expand/Collapse Certification Content
document.addEventListener("DOMContentLoaded", () => {
  const certItems = document.querySelectorAll(".cert-item");
  certItems.forEach((item) => {
    const titleButton = item.querySelector(".cert-title");

    titleButton.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});