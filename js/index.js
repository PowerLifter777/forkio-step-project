/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/anime-element.js":
/*!*********************************!*\
  !*** ./src/js/anime-element.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst animItems = document.querySelectorAll('._anim-items');\r\n\r\nif (!!animItems.length) {\r\n    window.addEventListener('scroll', animOnScroll);\r\n\r\n    function animOnScroll() {\r\n        animItems.forEach(animItem => {\r\n\r\n            const animItemHeight = animItem.offsetHeight;\r\n            const animItemOffset = offset(animItem).top;\r\n            const windowHeight = window.innerHeight;\r\n\r\n            const animPointTop = animItemOffset - windowHeight;\r\n            const animPointBottom = animItemOffset + animItemHeight;\r\n\r\n            if (scrollY > animPointTop && scrollY < animPointBottom) {\r\n                animItem.classList.add('_active');\r\n            } else if (!animItem.classList.contains('_anim-no-hide')) {\r\n                animItem.classList.remove('_active');\r\n            }\r\n        })\r\n    }\r\n\r\n    function offset(el) {\r\n        const rect = el.getBoundingClientRect();\r\n        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;\r\n        const scrollTop = window.scrollY || document.documentElement.scrollTop;\r\n\r\n        return {\r\n            top: rect.top + scrollTop,\r\n            left: rect.left + scrollLeft\r\n        }\r\n    }\r\n\r\n    setTimeout(() => animOnScroll(), 300);\r\n}\r\n\n\n//# sourceURL=webpack://new-gulp/./src/js/anime-element.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anime_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime-element.js */ \"./src/js/anime-element.js\");\n\r\n\r\nconst btnBurger = document.querySelector('.menu__burger');\r\nconst btnBurgerArr = document.querySelectorAll('.header-icon');\r\nconst menuList = document.querySelector('.menu__nav-bar');\r\n\r\ndocument.addEventListener('click', menu);\r\n\r\nfunction menu(event) {\r\n    if (event.target.closest('.menu__burger')) {\r\n        menuList.classList.toggle('active');\r\n        btnBurger.classList.toggle('active');\r\n    }\r\n    if (!event.target.closest('.menu__burger') & !event.target.closest('.menu__list')) {\r\n        menuList.classList.remove('active');\r\n        btnBurger.classList.remove('active');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://new-gulp/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;