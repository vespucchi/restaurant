"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ 50:
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home-style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main.home {
    height: 75vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.left-home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    animation: .3s ease-in-out 0s 1 simmer;
}

h1 {
    font-size: 5rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-size: 3rem;
    line-height: 0.5;
    letter-spacing: 5px;
}

button#order {
    margin-top: auto;
    background-size: 200% auto;
    background-image: linear-gradient(to right, var(--licor-color) 0%, var(--khaki-color) 51%, var(--coffee-color) 100%);
    padding: 15px 25px;
    border-radius: var(--border-radius);
    border: 2px solid var(--white-color);
    font-size: 1.25rem;
    letter-spacing: 2px;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;
}

button#order:hover {
    transform: scale(1.05);
    background-position: right center;
}

.right-home {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 150px;
    height: 100%;
}

img#mug {
    width: 672px;
    height: 406px;
    animation: growslide .5s;
}


@keyframes simmer {
    0% {
        filter: blur(3px);
        transform: scale(0.95);
    }

    100% {
        filter: blur(0px);
        transform: scale(1);
    }
}

@keyframes growslide {
    0% {
        transform: scale(0.9) translateX(100%);
    }

    100% {
        transform: scale(1) translateX(0);
    }
}`, "",{"version":3,"sources":["webpack://./src/home-style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,qFAAqF;IACrF,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,oHAAoH;IACpH,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,4EAA4E;AAChF;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;;;AAGA;IACI;QACI,iBAAiB;QACjB,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;;IAEA;QACI,iCAAiC;IACrC;AACJ","sourcesContent":["main.home {\n    height: 75vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.left-home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    animation: .3s ease-in-out 0s 1 simmer;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: 2px;\n    background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\nh2 {\n    font-size: 3rem;\n    line-height: 0.5;\n    letter-spacing: 5px;\n}\n\nbutton#order {\n    margin-top: auto;\n    background-size: 200% auto;\n    background-image: linear-gradient(to right, var(--licor-color) 0%, var(--khaki-color) 51%, var(--coffee-color) 100%);\n    padding: 15px 25px;\n    border-radius: var(--border-radius);\n    border: 2px solid var(--white-color);\n    font-size: 1.25rem;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n}\n\nbutton#order:hover {\n    transform: scale(1.05);\n    background-position: right center;\n}\n\n.right-home {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding-bottom: 150px;\n    height: 100%;\n}\n\nimg#mug {\n    width: 672px;\n    height: 406px;\n    animation: growslide .5s;\n}\n\n\n@keyframes simmer {\n    0% {\n        filter: blur(3px);\n        transform: scale(0.95);\n    }\n\n    100% {\n        filter: blur(0px);\n        transform: scale(1);\n    }\n}\n\n@keyframes growslide {\n    0% {\n        transform: scale(0.9) translateX(100%);\n    }\n\n    100% {\n        transform: scale(1) translateX(0);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 123:
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index-style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ 417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Sundaycoffee.ttf */ 564), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Quesha.ttf */ 807), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto.ttf */ 591), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ 504), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'Sundaycoffee';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);
}

@font-face {
    font-family: 'Quesha';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(truetype);
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(truetype);
}

:root {
    color: var(--white-color);
    font-family: 'Roboto';
    font-size: 16px;

    /* HSL colors pallete */
    --ash-color: hsla(68, 8%, 62%, 1);
    --licor-color: hsla(23, 16%, 10%, 1);
    --coffee-color: hsla(25, 38%, 36%, 1);
    --khaki-color: hsla(39, 31%, 64%, 1);
    --dyke-color: hsla(27, 22%, 20%, 0.5);
    --white-color: #FFFFFF;

    --border-radius: 30px;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-color: var(--dyke-color);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
}

header {
    height: 15vh;
}

h3 {
    font-family: 'Quesha';
    font-size: 2rem;
}

nav {
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 25px 50px 0 50px;
}

nav .items {
    display: flex;
    gap: 25px;
}

main {
    padding: 0px 50px;
}

button {
    color: var(--white-color);
    background-color: transparent;
    border: none;
    cursor: pointer;
}

button.nav-item {
    font-size: 1.5rem;
}

span.home {
    --offset: 2;
    color: #ffcc00;
    left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));
    animation: flicker 3s linear infinite;
    top: 0;
    z-index: 1;

    font-size: 5rem;
    line-height: 1;
}

@keyframes flicker {

    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {
        opacity: 0.99;
        text-shadow:
            -1px -1px 0 rgba(255, 255, 255, 0.4),
            1px -1px 0 rgba(255, 255, 255, 0.4),
            -1px 1px 0 rgba(255, 255, 255, 0.4),
            1px 1px 0 rgba(255, 255, 255, 0.4),
            0 -2px 8px,
            0 0 2px,
            0 0 5px #ff7e00,
            0 0 15px #ff4444,
            0 0 2px #ff7e00,
            0 2px 3px #000;
    }

    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {
        opacity: 0.4;
        text-shadow: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/index-style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,6DAA+C;AACnD;;AAEA;IACI,qBAAqB;IACrB,6DAAyC;AAC7C;;AAEA;IACI,qBAAqB;IACrB,6DAAyC;AAC7C;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;;IAEf,uBAAuB;IACvB,iCAAiC;IACjC,oCAAoC;IACpC,qCAAqC;IACrC,oCAAoC;IACpC,qCAAqC;IACrC,sBAAsB;;IAEtB,qBAAqB;AACzB;;AAEA;IACI,yDAAyC;IACzC,mCAAmC;IACnC,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,6DAA6D;IAC7D,qCAAqC;IACrC,MAAM;IACN,UAAU;;IAEV,eAAe;IACf,cAAc;AAClB;;AAEA;;IAEI;QACI,aAAa;QACb;;;;;;;;;;0BAUkB;IACtB;;IAEA;QACI,YAAY;QACZ,iBAAiB;IACrB;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Sundaycoffee';\n    src: url('./Sundaycoffee.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Quesha';\n    src: url('./Quesha.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto.ttf') format(truetype);\n}\n\n:root {\n    color: var(--white-color);\n    font-family: 'Roboto';\n    font-size: 16px;\n\n    /* HSL colors pallete */\n    --ash-color: hsla(68, 8%, 62%, 1);\n    --licor-color: hsla(23, 16%, 10%, 1);\n    --coffee-color: hsla(25, 38%, 36%, 1);\n    --khaki-color: hsla(39, 31%, 64%, 1);\n    --dyke-color: hsla(27, 22%, 20%, 0.5);\n    --white-color: #FFFFFF;\n\n    --border-radius: 30px;\n}\n\nbody {\n    background-image: url('./background.jpg');\n    background-color: var(--dyke-color);\n    background-blend-mode: multiply;\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-sizing: border-box;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n}\n\nheader {\n    height: 15vh;\n}\n\nh3 {\n    font-family: 'Quesha';\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    gap: 100px;\n    padding: 25px 50px 0 50px;\n}\n\nnav .items {\n    display: flex;\n    gap: 25px;\n}\n\nmain {\n    padding: 0px 50px;\n}\n\nbutton {\n    color: var(--white-color);\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nbutton.nav-item {\n    font-size: 1.5rem;\n}\n\nspan.home {\n    --offset: 2;\n    color: #ffcc00;\n    left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));\n    animation: flicker 3s linear infinite;\n    top: 0;\n    z-index: 1;\n\n    font-size: 5rem;\n    line-height: 1;\n}\n\n@keyframes flicker {\n\n    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {\n        opacity: 0.99;\n        text-shadow:\n            -1px -1px 0 rgba(255, 255, 255, 0.4),\n            1px -1px 0 rgba(255, 255, 255, 0.4),\n            -1px 1px 0 rgba(255, 255, 255, 0.4),\n            1px 1px 0 rgba(255, 255, 255, 0.4),\n            0 -2px 8px,\n            0 0 2px,\n            0 0 5px #ff7e00,\n            0 0 15px #ff4444,\n            0 0 2px #ff7e00,\n            0 2px 3px #000;\n    }\n\n    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {\n        opacity: 0.4;\n        text-shadow: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 274:
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu-style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

section.menu {
    backdrop-filter: blur(40px) brightness(1.15);
    width: 33vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px var(--white-color) solid;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;
    animation: .3s ease-out 0s 1 moveup;
}

.title-box {
    display: flex;
    justify-content: space-between;
    line-height: 0;
}

.left, .right {
    padding: 40px 40px;
}

.left {
    background-color: var(--khaki-color);
    border-right: 1px var(--white-color) solid;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
}

.coffee-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.coffee-title {
    display: flex;
    justify-content: space-between;
}

img.mugs {
    max-width: 100%;
}




@keyframes moveup {
    0% {
        transform: translateY(10%) scale(0.9);
        opacity: 0;
    }

    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}
`, "",{"version":3,"sources":["webpack://./src/menu-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,2CAA2C;IAC3C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;;;;AAKA;IACI;QACI,qCAAqC;QACrC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ","sourcesContent":["main.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection.menu {\n    backdrop-filter: blur(40px) brightness(1.15);\n    width: 33vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 1px var(--white-color) solid;\n    border-radius: 40px;\n    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;\n    animation: .3s ease-out 0s 1 moveup;\n}\n\n.title-box {\n    display: flex;\n    justify-content: space-between;\n    line-height: 0;\n}\n\n.left, .right {\n    padding: 40px 40px;\n}\n\n.left {\n    background-color: var(--khaki-color);\n    border-right: 1px var(--white-color) solid;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 70px;\n}\n\n.coffee-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.coffee-title {\n    display: flex;\n    justify-content: space-between;\n}\n\nimg.mugs {\n    max-width: 100%;\n}\n\n\n\n\n@keyframes moveup {\n    0% {\n        transform: translateY(10%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0) scale(1);\n        opacity: 1;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 459:
/*!****************************!*\
  !*** ./src/home-style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home-style.css */ 50);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 528:
/*!*****************************!*\
  !*** ./src/index-style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index-style.css */ 123);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 103:
/*!****************************!*\
  !*** ./src/menu-style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu-style.css */ 274);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 58:
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMainContent)
/* harmony export */ });
/* harmony import */ var _home_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-style.css */ 459);


function loadMainContent() {
    const main = document.querySelector('main');
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const button = document.createElement('div');
    const btn = document.createElement('button');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const smoke = document.createElement('div');
    const image = document.createElement('img');


    main.classList.add('home');

    header.classList.add('header');
    button.classList.add('button');
    left.classList.add('left-home');
    right.classList.add('right-home');
    btn.setAttribute('id', 'order');
    smoke.classList.add('smoke');
    image.setAttribute('id', 'mug');

    h1.textContent = 'Brewed to perfection.';
    h2.textContent = 'Every time.';
    btn.textContent = 'Order now';
    image.src = '../src/mug.png';

    header.append(h1, h2);
    button.appendChild(btn);
    left.append(header, button);
    right.append(smoke, image);
    main.append(left, right);

    return main; 
}

/***/ }),

/***/ 44:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ 678);
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-style.css */ 528);
/* harmony import */ var _home_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-load.js */ 58);
/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-load.js */ 798);





const body = document.querySelector('body');

body.appendChild((0,_home_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

navItems.forEach(item => {
    item.addEventListener('click', e => {
        main.classList.remove('home', 'menu', 'about', 'contact');
        main.textContent = '';

        if (item.dataset.index === '1') {
            main.classList.add('home');
            body.append((0,_home_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
        else if (item.dataset.index === '2') {
            main.classList.add('menu');
            body.append((0,_menu_load_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        };
    })
})

/***/ }),

/***/ 798:
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuContent)
/* harmony export */ });
/* harmony import */ var _menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-style.css */ 103);


function loadMenuContent() {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const left = document.createElement('div');
    const right = document.createElement('div');

    body.classList.add('menu');
    main.classList.add('menu');
    section.classList.add('menu');
    left.classList.add('left');
    right.classList.add('right');

    const titleArray = [
        'Mocha',
        'Latte',
        'Cappuccino',
        'Americano'
    ]

    const priceArray = ['$9', '$8', '$8', '$7'];

    const descArray = [
        'Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.',
        'Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.',
        'Perfect balance of espresso, milk and a cinnamon twist, just enough to wake the taste buds.',
        'Sophisticated take on a classic coffee experience, made with the finest 100% organic beans.'
    ]
    
    for(let i = 0; i < 4; i++) {
        const infoDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const title = document.createElement('h3');
        const price = document.createElement('h3');
        const desc = document.createElement('p');
        const image = document.createElement('img');

        infoDiv.classList.add('coffee-info');
        titleDiv.classList.add('coffee-title');
        image.classList.add('mugs');

        title.textContent = titleArray[i];
        price.textContent = priceArray[i];
        desc.textContent = descArray[i];
        image.src = `../src/coffe-mugs (${i + 1}).png`;

        titleDiv.append(title, price);
        infoDiv.append(titleDiv, desc);
        right.append(infoDiv);
        left.append(image);
        section.append(left, right);
        main.append(section);
    }

    return main;
}

/***/ }),

/***/ 807:
/*!************************!*\
  !*** ./src/Quesha.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37326ec20bcc0646176b.ttf";

/***/ }),

/***/ 591:
/*!************************!*\
  !*** ./src/Roboto.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ 564:
/*!******************************!*\
  !*** ./src/Sundaycoffee.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "775d3d690ae0f0085c2e.ttf";

/***/ }),

/***/ 504:
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ca4e74b6171489fccee.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(44)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNJO0FBQ2tCO0FBQ0E7O0FBRTdDOztBQUVBLGlCQUFpQix5REFBZTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBZTtBQUN2QztBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFCeUI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUtc3R5bGUuY3NzPzM0ZWYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC1zdHlsZS5jc3M/ZjA0YSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtc3R5bGUuY3NzPzkxZjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbi5ob21lIHtcbiAgICBoZWlnaHQ6IDc1dnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQtaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLWluLW91dCAwcyAxIHNpbW1lcjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0td2hpdGUtY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgMTAwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuYnV0dG9uI29yZGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tbGljb3ItY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgNTElLCB2YXIoLS1jb2ZmZWUtY29sb3IpIDEwMCUpO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xufVxuXG5idXR0b24jb3JkZXI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xufVxuXG4ucmlnaHQtaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW1nI211ZyB7XG4gICAgd2lkdGg6IDY3MnB4O1xuICAgIGhlaWdodDogNDA2cHg7XG4gICAgYW5pbWF0aW9uOiBncm93c2xpZGUgLjVzO1xufVxuXG5cbkBrZXlmcmFtZXMgc2ltbWVyIHtcbiAgICAwJSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZ3Jvd3NsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUZBQXFGO0lBQ3JGLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsb0hBQW9IO0lBQ3BILGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5ob21lIHtcXG4gICAgaGVpZ2h0OiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLWluLW91dCAwcyAxIHNpbW1lcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0td2hpdGUtY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgMTAwJSk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMC41O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG5cXG5idXR0b24jb3JkZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1saWNvci1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSA1MSUsIHZhcigtLWNvZmZlZS1jb2xvcikgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xcbn1cXG5cXG5idXR0b24jb3JkZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmltZyNtdWcge1xcbiAgICB3aWR0aDogNjcycHg7XFxuICAgIGhlaWdodDogNDA2cHg7XFxuICAgIGFuaW1hdGlvbjogZ3Jvd3NsaWRlIC41cztcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBzaW1tZXIge1xcbiAgICAwJSB7XFxuICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBncm93c2xpZGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU3VuZGF5Y29mZmVlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUXVlc2hhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1N1bmRheWNvZmZlZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG46cm9vdCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLyogSFNMIGNvbG9ycyBwYWxsZXRlICovXG4gICAgLS1hc2gtY29sb3I6IGhzbGEoNjgsIDglLCA2MiUsIDEpO1xuICAgIC0tbGljb3ItY29sb3I6IGhzbGEoMjMsIDE2JSwgMTAlLCAxKTtcbiAgICAtLWNvZmZlZS1jb2xvcjogaHNsYSgyNSwgMzglLCAzNiUsIDEpO1xuICAgIC0ta2hha2ktY29sb3I6IGhzbGEoMzksIDMxJSwgNjQlLCAxKTtcbiAgICAtLWR5a2UtY29sb3I6IGhzbGEoMjcsIDIyJSwgMjAlLCAwLjUpO1xuICAgIC0td2hpdGUtY29sb3I6ICNGRkZGRkY7XG5cbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1keWtlLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oZWFkZXIge1xuICAgIGhlaWdodDogMTV2aDtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbn1cblxubmF2IC5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG59XG5cbm1haW4ge1xuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLm5hdi1pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuc3Bhbi5ob21lIHtcbiAgICAtLW9mZnNldDogMjtcbiAgICBjb2xvcjogI2ZmY2MwMDtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLW9mZnNldCkgKiAxY2ggKyBjYWxjKHZhcigtLW9mZnNldCkgKiAwLjJjaCkpO1xuICAgIGFuaW1hdGlvbjogZmxpY2tlciAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG5cbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAtMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxuICAgICAgICAgICAgMCAwIDJweCxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXG4gICAgICAgICAgICAwIDAgMnB4ICNmZjdlMDAsXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXgtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2REFBK0M7QUFDbkQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkRBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZEQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTs7SUFFZix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxzQkFBc0I7O0lBRXRCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELHFDQUFxQztJQUNyQyxNQUFNO0lBQ04sVUFBVTs7SUFFVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSTtRQUNJLGFBQWE7UUFDYjs7Ozs7Ozs7OzswQkFVa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3VuZGF5Y29mZmVlJztcXG4gICAgc3JjOiB1cmwoJy4vU3VuZGF5Y29mZmVlLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XFxuICAgIHNyYzogdXJsKCcuL1F1ZXNoYS50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8udHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLyogSFNMIGNvbG9ycyBwYWxsZXRlICovXFxuICAgIC0tYXNoLWNvbG9yOiBoc2xhKDY4LCA4JSwgNjIlLCAxKTtcXG4gICAgLS1saWNvci1jb2xvcjogaHNsYSgyMywgMTYlLCAxMCUsIDEpO1xcbiAgICAtLWNvZmZlZS1jb2xvcjogaHNsYSgyNSwgMzglLCAzNiUsIDEpO1xcbiAgICAtLWtoYWtpLWNvbG9yOiBoc2xhKDM5LCAzMSUsIDY0JSwgMSk7XFxuICAgIC0tZHlrZS1jb2xvcjogaHNsYSgyNywgMjIlLCAyMCUsIDAuNSk7XFxuICAgIC0td2hpdGUtY29sb3I6ICNGRkZGRkY7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1keWtlLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggNTBweCAwIDUwcHg7XFxufVxcblxcbm5hdiAuaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ubmF2LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuc3Bhbi5ob21lIHtcXG4gICAgLS1vZmZzZXQ6IDI7XFxuICAgIGNvbG9yOiAjZmZjYzAwO1xcbiAgICBsZWZ0OiBjYWxjKHZhcigtLW9mZnNldCkgKiAxY2ggKyBjYWxjKHZhcigtLW9mZnNldCkgKiAwLjJjaCkpO1xcbiAgICBhbmltYXRpb246IGZsaWNrZXIgM3MgbGluZWFyIGluZmluaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuXFxuICAgIDAlLCAxOS45JSwgMjIlLCA2Mi45JSwgNjQlLCA2NC45JSwgNzAlLCAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XFxuICAgICAgICB0ZXh0LXNoYWRvdzpcXG4gICAgICAgICAgICAtMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgLTFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxcbiAgICAgICAgICAgIDAgMCAycHgsXFxuICAgICAgICAgICAgMCAwIDVweCAjZmY3ZTAwLFxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXFxuICAgICAgICAgICAgMCAwIDJweCAjZmY3ZTAwLFxcbiAgICAgICAgICAgIDAgMnB4IDNweCAjMDAwO1xcbiAgICB9XFxuXFxuICAgIDIwJSwgMjEuOSUsIDYzJSwgNjMuOSUsIDY1JSwgNjkuOSUge1xcbiAgICAgICAgb3BhY2l0eTogMC40O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbi5tZW51IHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcbiAgICB3aWR0aDogMzN2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuNSkgMjBweCAyNXB4IDVweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbn1cblxuLnRpdGxlLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5sZWZ0LCAucmlnaHQge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLmxlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpLWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDcwcHg7XG59XG5cbi5jb2ZmZWUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNvZmZlZS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmltZy5tdWdzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cbkBrZXlmcmFtZXMgbW92ZXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51LXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7OztBQUtBO0lBQ0k7UUFDSSxxQ0FBcUM7UUFDckMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLm1lbnUge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcXG4gICAgd2lkdGg6IDMzdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC41KSAyMHB4IDI1cHggNXB4O1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcXG59XFxuXFxuLnRpdGxlLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxufVxcblxcbi5sZWZ0LCAucmlnaHQge1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNzBweDtcXG59XFxuXFxuLmNvZmZlZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29mZmVlLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcubXVncyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuQGtleWZyYW1lcyBtb3ZldXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICcuL2hvbWUtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbW9rZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtaG9tZScpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWhvbWUnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlcicpO1xuICAgIHNtb2tlLmNsYXNzTGlzdC5hZGQoJ3Ntb2tlJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtdWcnKTtcblxuICAgIGgxLnRleHRDb250ZW50ID0gJ0JyZXdlZCB0byBwZXJmZWN0aW9uLic7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnRXZlcnkgdGltZS4nO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBub3cnO1xuICAgIGltYWdlLnNyYyA9ICcuLi9zcmMvbXVnLnBuZyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGgxLCBoMik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgbGVmdC5hcHBlbmQoaGVhZGVyLCBidXR0b24pO1xuICAgIHJpZ2h0LmFwcGVuZChzbW9rZSwgaW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcblxuICAgIHJldHVybiBtYWluOyBcbn0iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LXN0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZE1haW5Db250ZW50IGZyb20gJy4vaG9tZS1sb2FkLmpzJztcbmltcG9ydCBsb2FkTWVudUNvbnRlbnQgZnJvbSAnLi9tZW51LWxvYWQuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGxvYWRNYWluQ29udGVudCgpKTtcblxuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbm5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCAnbWVudScsICdhYm91dCcsICdjb250YWN0Jyk7XG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnMScpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZE1haW5Db250ZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzInKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRNZW51Q29udGVudCgpKTtcbiAgICAgICAgfTtcbiAgICB9KVxufSkiLCJpbXBvcnQgJy4vbWVudS1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFtcbiAgICAgICAgJ01vY2hhJyxcbiAgICAgICAgJ0xhdHRlJyxcbiAgICAgICAgJ0NhcHB1Y2Npbm8nLFxuICAgICAgICAnQW1lcmljYW5vJ1xuICAgIF1cblxuICAgIGNvbnN0IHByaWNlQXJyYXkgPSBbJyQ5JywgJyQ4JywgJyQ4JywgJyQ3J107XG5cbiAgICBjb25zdCBkZXNjQXJyYXkgPSBbXG4gICAgICAgICdCcmV3ZWQgZm9yIGNvenkgYXRtb3NwaGVyZXMsIG91ciBoZWFydHkgYW5kIHJ1c3RpYyBibGVuZCBpcyByZW1pbmlzY2VudCBvZiBhIGNhYmluIGZpcmVwbGFjZS4nLFxuICAgICAgICAnQ3JhZnRlZCB3aXRoIHByZWNpc2lvbiB1c2luZyBhIGJhbGFuY2VkIGJsZW5kIG9mIGNvZmZlZSBhbmQgbWlsaywgYSBmZWFzdCBmb3IgdGhlIHNlbnNlcy4nLFxuICAgICAgICAnUGVyZmVjdCBiYWxhbmNlIG9mIGVzcHJlc3NvLCBtaWxrIGFuZCBhIGNpbm5hbW9uIHR3aXN0LCBqdXN0IGVub3VnaCB0byB3YWtlIHRoZSB0YXN0ZSBidWRzLicsXG4gICAgICAgICdTb3BoaXN0aWNhdGVkIHRha2Ugb24gYSBjbGFzc2ljIGNvZmZlZSBleHBlcmllbmNlLCBtYWRlIHdpdGggdGhlIGZpbmVzdCAxMDAlIG9yZ2FuaWMgYmVhbnMuJ1xuICAgIF1cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaW5mbycpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtdGl0bGUnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbXVncycpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpXTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZUFycmF5W2ldO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gZGVzY0FycmF5W2ldO1xuICAgICAgICBpbWFnZS5zcmMgPSBgLi4vc3JjL2NvZmZlLW11Z3MgKCR7aSArIDF9KS5wbmdgO1xuXG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZSwgcHJpY2UpO1xuICAgICAgICBpbmZvRGl2LmFwcGVuZCh0aXRsZURpdiwgZGVzYyk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZChpbmZvRGl2KTtcbiAgICAgICAgbGVmdC5hcHBlbmQoaW1hZ2UpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZChsZWZ0LCByaWdodCk7XG4gICAgICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBtYWluO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==