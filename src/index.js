// Keep the year current in the footer automatically
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation functionality
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("open-nav");
});

// scrolling smoothly
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("open-nav");
    }
  });
});

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);

obs.observe(sectionHeroEl);
