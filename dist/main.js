/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Keep the year current in the footer automatically\nconst yearEl = document.querySelector(\".year\");\nconst currentYear = new Date().getFullYear();\nyearEl.textContent = currentYear;\n\n// Mobile navigation functionality\nconst btnNavEl = document.querySelector(\".btn-mobile-nav\");\nconst headerEl = document.querySelector(\".header\");\nbtnNavEl.addEventListener(\"click\", () => {\n  headerEl.classList.toggle(\"open-nav\");\n});\n\n// scrolling smoothly\nconst allLinks = document.querySelectorAll(\"a:link\");\nallLinks.forEach(link => {\n  link.addEventListener(\"click\", e => {\n    e.preventDefault();\n    const href = link.getAttribute(\"href\");\n    if (href === \"#\") {\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\"\n      });\n    }\n    if (href !== \"#\" && href.startsWith(\"#\")) {\n      const sectionEl = document.querySelector(href);\n      sectionEl.scrollIntoView({\n        behavior: \"smooth\"\n      });\n    }\n    if (link.classList.contains(\"main-nav-link\")) {\n      headerEl.classList.toggle(\"open-nav\");\n    }\n  });\n});\n\n// sticky navigation\nconst sectionHeroEl = document.querySelector(\".section-hero\");\nconst obs = new IntersectionObserver(entries => {\n  const ent = entries[0];\n  if (ent.isIntersecting === false) {\n    document.body.classList.add(\"sticky\");\n  }\n  if (ent.isIntersecting) {\n    document.body.classList.remove(\"sticky\");\n  }\n}, {\n  root: null,\n  threshold: 0,\n  rootMargin: \"-80px\"\n});\nobs.observe(sectionHeroEl);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;