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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\n\nconst COLOR = 'dark grey';\nconst RADIUS = 25;\n\nfunction Asteroid(options) {\n    this.pos = Game.randomPos(640, 640)\n    this.vel = Util2.randomVec(25);  \n    this.RADIUS;\n    this.COLOR;\n    MovingObject.call(this, options);\n};\n\nUtil.inherits(Asteroid, MovingObject)\n\n\nAsteroid.color\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst Game = {\n    randomPos(length, width) {\n        let x = Math.floor.random() * length;\n        let y = Math.floor.random() * width;\n        return [x, y]\n    },\n};\n\nmodule.export = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.Util = Util;\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width=640;\n    canvas.height=640;\n    const ctx = canvas.getContext('2d');\n    window.ctx= ctx;\n\n    const mo = new MovingObject({\n        pos: [300, 30],\n        vel: [0, 50],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    const astA = new Asteroid();\n\n    const astB = new Asteroid();\n\n    const astC = new Asteroid();\n    \n    window.mo=mo;\n    window.astA = astA;\n    window.astB = astB;\n    window.astC = astC;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n    this.pos = options['pos'];\n    this.vel = options['vel'];  // [horiz, vert]\n    this.radius = options['radius'];\n    this.color = options['color'];\n}\n\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,true);\n    ctx.fill();\n}\n\n// const TIME = 1000/60\nMovingObject.prototype.move = function() {\n    // const velS=timea/TIME;\n    const that = this;\n\n    setInterval(function(){\n        let oldPos=that.pos\n        that.pos = [that.pos[0]+that.vel[0],that.pos[1]+that.vel[1]];\n        if(that.pos[0]>640){\n            that.pos[0]=0;\n        }else if(that.pos[0]<0){\n            that.pos[0]=640;\n        }\n        if(that.pos[1]>640){\n            that.pos[1]=0\n        }else if(that.pos[1]<0){\n            that.pos[1]=640;\n        }\n        console.log(that.pos)\n        that.draw(ctx);\n        that.remove(ctx,oldPos,that)\n    },1000)\n}\n\nMovingObject.prototype.remove =function(ctx,oldPos,object){\n    let rad=object.radius;\n    ctx.clearRect(oldPos[0]-rad,oldPos[1]-rad,rad*2,rad*2);\n}\n\n\n// every 1 sec\n\n// at 1 sec :  pos_new [40,40]\n// at 2 sec: pos_new[50, 50]\n\n// canvas = 640 x 480\n// if pos[0] > 640\n// pos[0] = 0\n\n\n// def up\n// vel[1] += 10\n\n\n\nmodule.exports = MovingObject;\n\n\n\n// // Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\n// NavigationPreloadManager(vel) = Dist (pos, new_pos)\n\n// // this is math, not JavaScript\n\n// // Dist([x_1, y_1], [x_2, y_2]) = sqrt(  (x_1 - x_2) ** 2 + (y_1 - y_2)** 2)\n// // Dist( pos1, pos2  )\n// [velx, vely]\n\n// Norm ( vel ) = Dist (pos0, pos1)\n\n// Dist(pos0, pos1) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)\n\n\n// Norm(vel) = sqrt((pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2)\n\n// Norm(vel) ^ 2 = (pos0[0] - pos1[0]) ** 2 + (pos0[1] - pos1[1]) ** 2\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    }\n};\n\nconst Util2 = {\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\n\nmodule.export = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
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