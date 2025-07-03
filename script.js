function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100 && rect.bottom >= 100;
}

function animateSections() {
  document.querySelectorAll(".fade-section").forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateSections);
window.addEventListener("DOMContentLoaded", animateSections);
