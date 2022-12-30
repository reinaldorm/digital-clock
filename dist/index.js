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

/***/ "./js/lib/clock.js":
/*!*************************!*\
  !*** ./js/lib/clock.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateClock\": () => (/* binding */ updateClock)\n/* harmony export */ });\nconst hourLeft = document.querySelector('.time-line.hourLeft');\r\nconst hourRight = document.querySelector('.time-line.hourRight');\r\nconst minuteLeft = document.querySelector('.time-line.minuteLeft');\r\nconst minuteRight = document.querySelector('.time-line.minuteRight');\r\nconst secondLeft = document.querySelector('.time-line.secondLeft');\r\nconst secondRight = document.querySelector('.time-line.secondRight');\r\nconst updateLine = (line, index) => {\r\n    const numbers = [...line.children];\r\n    numbers.forEach((el) => el.classList.remove('active'));\r\n    const number = line.children[index];\r\n    line.style.translate = `0px -${number.offsetTop}px 0px`;\r\n    number.classList.add('active');\r\n};\r\nconst updateClock = () => {\r\n    const time = new Date().toTimeString();\r\n    updateLine(hourLeft, Number(time.charAt(0)));\r\n    updateLine(hourRight, Number(time.charAt(1)));\r\n    updateLine(minuteLeft, Number(time.charAt(3)));\r\n    updateLine(minuteRight, Number(time.charAt(4)));\r\n    updateLine(secondLeft, Number(time.charAt(6)));\r\n    updateLine(secondRight, Number(time.charAt(7)));\r\n};\r\n\n\n//# sourceURL=webpack://projects/./js/lib/clock.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/clock */ \"./js/lib/clock.js\");\n\r\nconst clock = document.querySelector('.clock');\r\nlet clockUpdate;\r\nclockUpdate = setInterval(() => (0,_lib_clock__WEBPACK_IMPORTED_MODULE_0__.updateClock)(), 1000);\r\nconst pauseClock = () => {\r\n    if (clockUpdate) {\r\n        clearInterval(clockUpdate);\r\n        clockUpdate = null;\r\n        clock?.classList.add('paused');\r\n    }\r\n    else {\r\n        (0,_lib_clock__WEBPACK_IMPORTED_MODULE_0__.updateClock)();\r\n        clockUpdate = setInterval(() => (0,_lib_clock__WEBPACK_IMPORTED_MODULE_0__.updateClock)(), 1000);\r\n        clock?.classList.remove('paused');\r\n    }\r\n};\r\nclock?.addEventListener('click', pauseClock);\r\n\n\n//# sourceURL=webpack://projects/./js/script.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;