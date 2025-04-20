const enBtn = document.getElementById("enBtn");
const deBtn = document.getElementById("deBtn");

function switchLang(lang) {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach((el) => {
    let newText = el.getAttribute(`data-${lang}`);
    if (newText) {
      // If the element contains paragraphs or line breaks, use innerHTML
      // Convert both \n and \\n to <br> for proper line breaks
      newText = newText.replace(/\\n/g, "<br>").replace(/\n/g, "<br>");
      el.innerHTML = newText;
    } else {
      el.innerHTML = el.getAttribute("data-en"); // Fallback to English if data-lang is missing
    }
  });
}

enBtn.addEventListener("click", () => switchLang("en"));
deBtn.addEventListener("click", () => switchLang("de"));
// Fade-in on scroll
const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeInElements.forEach((element) => {
  observer.observe(element);
});
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Trigger when scroll is below halfway through the page
  if (scrollPosition > scrollableHeight * (1 / 3)) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});
