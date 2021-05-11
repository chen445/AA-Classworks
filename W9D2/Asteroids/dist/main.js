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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n    this.pos = options['pos'];\n    this.vel = options['vel'];  // [horiz, vert]\n    this.radius = options['radius'];\n    this.color = options['color'];\n}\n\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,true);\n    ctx.fill();\n}\n\n// MovingObject.prototype.move = function(ctx) {\n\n// }\n\n\nconst mo = new MovingObject({\n  pos: [30, 30],\n  vel: [10, 10],\n  radius: 5,\n  color: \"#00FF00\"\n});\n\n// every 1 sec\n\n// at 1 sec :  pos_new [40,40]\n// at 2 sec: pos_new[50, 50]\n\n// canvas = 640 x 480\n// if pos[0] > 640\n// pos[0] = 0\n\n\n// def up\n// vel[1] += 10\n\n\n\nmodule.exports = MovingObject;\n\n\n\n// // Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\n// NavigationPreloadManager(vel) = Dist (pos, new_pos)\n\n// // this is math, not JavaScript\n\n// // Dist([x_1, y_1], [x_2, y_2]) = sqrt(  (x_1 - x_2) ** 2 + (y_1 - y_2)** 2)\n// // Dist( pos1, pos2  )\n// [velx, vely]\n\n// Norm ( vel ) = Dist (pos0, pos1)\n\n// Dist(pos0, pos1) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)\n\n\n// Norm(vel) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)\n\n// Norm(vel) ^ 2 = (pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;