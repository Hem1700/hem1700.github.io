// Theme Toggle
const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.toggle("dark", savedTheme === "dark");
  body.classList.toggle("light", savedTheme === "light");
  themeToggleBtn.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";

  // Expand/Collapse Certification Content
  const certItems = document.querySelectorAll(".cert-item");
  certItems.forEach((item) => {
    const titleButton = item.querySelector(".cert-title");

    titleButton.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});

// Handle theme toggle and save preference to localStorage
themeToggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "Dark Mode";
  }
});

// Smooth scrolling for timeline
document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.querySelector(".timeline-container");
  timelineContainer.scrollLeft = 0; // Start at the leftmost position
});