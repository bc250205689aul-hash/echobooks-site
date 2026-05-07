document.querySelector(".dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// click animation
document.querySelectorAll(".card, .slide").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transform = "scale(0.95)";
    setTimeout(() => el.style.transform = "", 150);
  });
});
