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

/***/ "./analytics.js":
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/***/ (() => {

eval("function createAnalytics() {\r\n\tlet counter = 0\r\n\tlet destroyed = false\r\n\r\n\tconst listener = () => counter++\r\n\r\n\tdocument.addEventListener('click', listener)\r\n\r\n\treturn {\r\n\t\tdestroy() {\r\n\t\t\tdocument.removeEventListener('click', listener)\r\n\t\t\tdestroyed = true\r\n\t\t},\r\n\r\n\t\tgetClicks() {\r\n\t\t\tif (destroyed) {\r\n\t\t\t\treturn 'Analytics is destroyed. Total clicks = ${counter}'\r\n\t\t\t}\r\n\t\t\treturn counter\r\n\t\t}\r\n\t}\r\n}\r\n\r\nwindow.analytics = createAnalytics()\n\n//# sourceURL=webpack:///./analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./analytics.js"]();
/******/ 	
/******/ })()
;