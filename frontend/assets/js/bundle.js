/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0019-exercicio/form-control.ts":
/*!*********************************************!*\
  !*** ./src/A0019-exercicio/form-control.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log('opa');
const form = document.querySelector('.form');
const usuarioInput = document.querySelector('.username');
const spanElement = document.querySelector('.error-message');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    if (usuarioInput.value.length < 3 && usuarioInput.value.length >= 255) {
        console.log('Valor inválido');
        spanElement.classList.contains('error-message');
    }
    // if (cpf.length !== 14) {
    //   formErrors = true;
    //   toast.error('CPF inválido');
    // }
    console.log('a');
});


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./src/A0019-exercicio/index.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0019-exercicio/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map