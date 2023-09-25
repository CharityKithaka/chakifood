// Keep the year current in the footer automatically
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation functionality
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});

// scrolling smoothly
const allLinks = document.querySelectorAll("a:link");

// cleaner way is using event deligation which you can try out

// for each link
allLinks.forEach(function (link) {
  // add event listener to each link
  link.addEventListener("click", function (e) {
    // turn off the default behaviour and implement your own
    e.preventDefault();
    // get the href attribute out of the link that was clicked
    const href = link.getAttribute("href");
    // if the href is # then scroll to the top of the page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // if the href is not # and starts with #
    //then scroll to the section with the id that matches the href
    if (href !== "#" && href.startsWith("#")) {
      // get the section element
      const sectionEl = document.querySelector(href);
      // scroll to the section
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // if the link has the class main-nav-link then close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      // close the mobile navigation
      headerEl.classList.toggle("open-nav");
    }
  });
});

// sticky navigation

// get the section hero element
const sectionHeroEl = document.querySelector(".section-hero");
// get the section about element
// what we want to happen when the section about element is intersected
// we want to remove the sticky class from the header element
const obs = new IntersectionObserver(function (entries) {
    // get the first entry
    const ent = entries[0];
    // if the entry is intersecting
    if (ent.isIntersecting === false) {
        // add the sticky class to the header element
        document.body.classList.add("sticky");
    }

    // if the entry is not intersecting
    if (ent.isIntersecting) {
        // remove the sticky class from the header element
        document.body.classList.remove("sticky");
    }
}, 
{
    // observe elements scrolling through the viewport
    // inside the entire browser window
    root: null,
    // we will have an event as soon as 0% of the hero section is inside the viewport
    threshold: 0,
    // we will have an event as soon as 80px of the hero section is inside the viewport
    rootMargin: "-80px",
});
// observe the section hero element
obs.observe(sectionHeroEl);
