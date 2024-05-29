"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ 634:
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact/contact-style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main.contact {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0;
}

section.contact {
    width: 30%;
    height: 65%;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 40px;
    animation: .3s ease-out 0s 1 moveup;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.left-contact, .right-contact {
    border-radius: inherit;
    backdrop-filter: blur(40px) brightness(1.15);
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    border: 2px solid var(--white-color)
}

.left-contact {
    width: 40%;
    animation: 0.3s ease-in 0s 1 leftslide;
}

.right-contact {
    width: 60%;
    animation: 0.3s ease-in 0s 1 rightslide;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.name-div, .email-div, .comment-div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

h5 {
    font-size: 1rem;
}

input {
    background-color: var(--white-color);
    color: var(--coffee-color);
    border-radius: 10px;
    padding: 5px 5px;
    border: none;
}

input::placeholder, textarea::placeholder {
    color: var(--coffee-color);
}

textarea {
    color: var(--coffee-color);
    height: 75px;
    padding: 5px 5px;
    border-radius: 10px;
    resize: vertical;
}

button.submit-form {
    align-self: center;
    width: fit-content;
    background-color: var(--khaki-color);
    padding: 10px 20px;
    border-radius: var(--border-radius);
    font-size: 1rem;
    letter-spacing: 2px;
    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;
    transition: 0.5s;
}

button.submit-form:hover {
    transform: scale(1.03);
    transition: 0.5s;
}

.social-contact {
    display: flex;
    justify-content: center;
    gap: 20px;
}

@keyframes leftslide {
    0% {
        transform: translateX(-15%) scale(0.9);
        opacity: 0;
    }

    100% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
}

@keyframes rightslide {
    0% {
        transform: translateX(+15%) scale(0.9);
        opacity: 0;
    }

    100% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
}`, "",{"version":3,"sources":["webpack://./src/contact/contact-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT;AACJ;;AAEA;IACI,UAAU;IACV,sCAAsC;AAC1C;;AAEA;IACI,UAAU;IACV,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,mBAAmB;IACnB,4EAA4E;IAC5E,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI;QACI,sCAAsC;QACtC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ;;AAEA;IACI;QACI,sCAAsC;QACtC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ","sourcesContent":["main.contact {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n}\n\nsection.contact {\n    width: 30%;\n    height: 65%;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 40px;\n    animation: .3s ease-out 0s 1 moveup;\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n.left-contact, .right-contact {\n    border-radius: inherit;\n    backdrop-filter: blur(40px) brightness(1.15);\n    padding: 40px 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 50px;\n    border: 2px solid var(--white-color)\n}\n\n.left-contact {\n    width: 40%;\n    animation: 0.3s ease-in 0s 1 leftslide;\n}\n\n.right-contact {\n    width: 60%;\n    animation: 0.3s ease-in 0s 1 rightslide;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.name-div, .email-div, .comment-div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\ninput {\n    background-color: var(--white-color);\n    color: var(--coffee-color);\n    border-radius: 10px;\n    padding: 5px 5px;\n    border: none;\n}\n\ninput::placeholder, textarea::placeholder {\n    color: var(--coffee-color);\n}\n\ntextarea {\n    color: var(--coffee-color);\n    height: 75px;\n    padding: 5px 5px;\n    border-radius: 10px;\n    resize: vertical;\n}\n\nbutton.submit-form {\n    align-self: center;\n    width: fit-content;\n    background-color: var(--khaki-color);\n    padding: 10px 20px;\n    border-radius: var(--border-radius);\n    font-size: 1rem;\n    letter-spacing: 2px;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n    transition: 0.5s;\n}\n\nbutton.submit-form:hover {\n    transform: scale(1.03);\n    transition: 0.5s;\n}\n\n.social-contact {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n@keyframes leftslide {\n    0% {\n        transform: translateX(-15%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateX(0) scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes rightslide {\n    0% {\n        transform: translateX(+15%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateX(0) scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 850:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home-style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
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
}`, "",{"version":3,"sources":["webpack://./src/home/home-style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,qFAAqF;IACrF,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,oHAAoH;IACpH,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,4EAA4E;AAChF;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;;;AAGA;IACI;QACI,iBAAiB;QACjB,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;;IAEA;QACI,iCAAiC;IACrC;AACJ","sourcesContent":["main.home {\n    height: 75vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.left-home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    animation: .3s ease-in-out 0s 1 simmer;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: 2px;\n    background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\nh2 {\n    font-size: 3rem;\n    line-height: 0.5;\n    letter-spacing: 5px;\n}\n\nbutton#order {\n    margin-top: auto;\n    background-size: 200% auto;\n    background-image: linear-gradient(to right, var(--licor-color) 0%, var(--khaki-color) 51%, var(--coffee-color) 100%);\n    padding: 15px 25px;\n    border-radius: var(--border-radius);\n    border: 2px solid var(--white-color);\n    font-size: 1.25rem;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n}\n\nbutton#order:hover {\n    transform: scale(1.05);\n    background-position: right center;\n}\n\n.right-home {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding-bottom: 150px;\n    height: 100%;\n}\n\nimg#mug {\n    width: 672px;\n    height: 406px;\n    animation: growslide .5s;\n}\n\n\n@keyframes simmer {\n    0% {\n        filter: blur(3px);\n        transform: scale(0.95);\n    }\n\n    100% {\n        filter: blur(0px);\n        transform: scale(1);\n    }\n}\n\n@keyframes growslide {\n    0% {\n        transform: scale(0.9) translateX(100%);\n    }\n\n    100% {\n        transform: scale(1) translateX(0);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 322:
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/index-style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ 417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Sundaycoffee.ttf */ 893), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Quesha.ttf */ 878), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto.ttf */ 262), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ 80), __webpack_require__.b);
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
    padding: 0px 50px 0px 50px;
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

a {
    cursor: pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/index/index-style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,6DAAsD;AAC1D;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;;IAEf,uBAAuB;IACvB,iCAAiC;IACjC,oCAAoC;IACpC,qCAAqC;IACrC,oCAAoC;IACpC,qCAAqC;IACrC,sBAAsB;;IAEtB,qBAAqB;AACzB;;AAEA;IACI,yDAAyC;IACzC,mCAAmC;IACnC,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,6DAA6D;IAC7D,qCAAqC;IACrC,MAAM;IACN,UAAU;;IAEV,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI;QACI,aAAa;QACb;;;;;;;;;;0BAUkB;IACtB;;IAEA;QACI,YAAY;QACZ,iBAAiB;IACrB;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Sundaycoffee';\n    src: url('../fonts/Sundaycoffee.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Quesha';\n    src: url('../fonts/Quesha.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('../fonts/Roboto.ttf') format(truetype);\n}\n\n:root {\n    color: var(--white-color);\n    font-family: 'Roboto';\n    font-size: 16px;\n\n    /* HSL colors pallete */\n    --ash-color: hsla(68, 8%, 62%, 1);\n    --licor-color: hsla(23, 16%, 10%, 1);\n    --coffee-color: hsla(25, 38%, 36%, 1);\n    --khaki-color: hsla(39, 31%, 64%, 1);\n    --dyke-color: hsla(27, 22%, 20%, 0.5);\n    --white-color: #FFFFFF;\n\n    --border-radius: 30px;\n}\n\nbody {\n    background-image: url('./background.jpg');\n    background-color: var(--dyke-color);\n    background-blend-mode: multiply;\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-sizing: border-box;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n}\n\nheader {\n    height: 15vh;\n}\n\nh3 {\n    font-family: 'Quesha';\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    gap: 100px;\n    padding: 25px 50px 0 50px;\n}\n\nnav .items {\n    display: flex;\n    gap: 25px;\n}\n\nmain {\n    padding: 0px 50px 0px 50px;\n}\n\nbutton {\n    color: var(--white-color);\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nbutton.nav-item {\n    font-size: 1.5rem;\n}\n\nspan.home {\n    --offset: 2;\n    color: #ffcc00;\n    left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));\n    animation: flicker 3s linear infinite;\n    top: 0;\n    z-index: 1;\n\n    font-size: 5rem;\n    line-height: 1;\n}\n\na {\n    cursor: pointer;\n}\n\n@keyframes flicker {\n\n    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {\n        opacity: 0.99;\n        text-shadow:\n            -1px -1px 0 rgba(255, 255, 255, 0.4),\n            1px -1px 0 rgba(255, 255, 255, 0.4),\n            -1px 1px 0 rgba(255, 255, 255, 0.4),\n            1px 1px 0 rgba(255, 255, 255, 0.4),\n            0 -2px 8px,\n            0 0 2px,\n            0 0 5px #ff7e00,\n            0 0 15px #ff4444,\n            0 0 2px #ff7e00,\n            0 2px 3px #000;\n    }\n\n    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {\n        opacity: 0.4;\n        text-shadow: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 538:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu/menu-style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
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
    border: 2px var(--white-color) solid;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;
    animation: .3s ease-out 0s 1 moveup;
}

.title-box {
    display: flex;
    justify-content: space-between;
    line-height: 0;
}

.left-menu, .right-menu {
    padding: 40px 40px;
}

.left-menu {
    background-color: var(--khaki-color);
    border-right: 1px var(--white-color) solid;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.right-menu {
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
`, "",{"version":3,"sources":["webpack://./src/menu/menu-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,2CAA2C;IAC3C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;;;;AAKA;IACI;QACI,qCAAqC;QACrC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ","sourcesContent":["main.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection.menu {\n    backdrop-filter: blur(40px) brightness(1.15);\n    width: 33vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 2px var(--white-color) solid;\n    border-radius: 40px;\n    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;\n    animation: .3s ease-out 0s 1 moveup;\n}\n\n.title-box {\n    display: flex;\n    justify-content: space-between;\n    line-height: 0;\n}\n\n.left-menu, .right-menu {\n    padding: 40px 40px;\n}\n\n.left-menu {\n    background-color: var(--khaki-color);\n    border-right: 1px var(--white-color) solid;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.right-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 70px;\n}\n\n.coffee-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.coffee-title {\n    display: flex;\n    justify-content: space-between;\n}\n\nimg.mugs {\n    max-width: 100%;\n}\n\n\n\n\n@keyframes moveup {\n    0% {\n        transform: translateY(10%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0) scale(1);\n        opacity: 1;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 913:
/*!***************************************!*\
  !*** ./src/contact/contact-style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact-style.css */ 634);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 209:
/*!*********************************!*\
  !*** ./src/home/home-style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home-style.css */ 850);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 873:
/*!***********************************!*\
  !*** ./src/index/index-style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index-style.css */ 322);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 369:
/*!*********************************!*\
  !*** ./src/menu/menu-style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu-style.css */ 538);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 827:
/*!*************************************!*\
  !*** ./src/contact/contact-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactContent)
/* harmony export */ });
/* harmony import */ var _contact_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-style.css */ 913);


function loadContactContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const left = document.createElement('div');
    const right = document.createElement('div');

    main.classList.add('contact');
    section.classList.add('contact');
    left.classList.add('left-contact');
    right.classList.add('right-contact');

    const hq = document.createElement('div');
    hq.classList.add('info-contact');
    const h5_1 = document.createElement('h5');
    const p_1 = document.createElement('p');
    h5_1.textContent = 'headquarters';
    p_1.innerHTML = '113 Michigan Avenue<br>Chicago, IL 60661';
    hq.append(h5_1, p_1);

    const sp = document.createElement('div');
    sp.classList.add('info-contact');
    const h5_2 = document.createElement('h5');
    const p_2 = document.createElement('p');
    h5_2.textContent = 'support';
    p_2.innerHTML = 'help@cafe.com<br>+1 777 222 1234';
    sp.append(h5_2, p_2);

    const icons = document.createElement('div');
    icons.classList.add('social-contact');

    const a1 = document.createElement('a');
    const icn1 = document.createElement('img');

    icn1.alt = 'Facebook icon';
    icn1.src = '../src/contact/facebook.svg';
    icn1.height = '26';

    a1.appendChild(icn1);

    const a2 = document.createElement('a');
    const icn2 = document.createElement('img');

    icn2.alt = 'Instagram icon';
    icn2.src = '../src/contact/instagram.svg';
    icn2.height = '26';

    a2.appendChild(icn2);
    icons.append(a1, a2);

    left.append(hq, sp, icons);

    // right side
    const title = document.createElement('h3');
    title.classList.add('title-contact');
    title.textContent = 'Lets chat.';

    const form = document.createElement('form');
    const name = document.createElement('div');
    name.classList.add('name-div');
    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    label1.for = 'name';
    label1.textContent = 'name'
    input1.type = 'text';
    input1.placeholder = 'John Diaz';
    input1.name = 'name';
    name.append(label1, input1);

    const email = document.createElement('div');
    email.classList.add('email-div');
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    label2.for = 'email';
    label2.textContent = 'email';
    input2.type = 'email';
    input2.placeholder = 'john@email.com';
    input2.name = 'email';
    email.append(label2, input2);

    const comment = document.createElement('div');
    comment.classList.add('comment-div');
    const label3 = document.createElement('label');
    const input3 = document.createElement('textarea');
    label3.for = 'comment';
    label3.textContent = 'comment';
    input3.placeholder = 'Type here...';
    input3.name = 'comment';
    comment.append(label3, input3);

    form.append(name, email, comment);

    const btn = document.createElement('button');
    btn.classList.add('submit-form');
    btn.textContent = 'Submit';

    right.append(title, form, btn);
    section.append(left, right);
    main.append(section);

    return main;
}

/***/ }),

/***/ 256:
/*!*******************************!*\
  !*** ./src/home/home-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMainContent)
/* harmony export */ });
/* harmony import */ var _home_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-style.css */ 209);


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
    image.src = '../src/home/mug.png';

    header.append(h1, h2);
    button.appendChild(btn);
    left.append(header, button);
    right.append(smoke, image);
    main.append(left, right);

    return main; 
}

/***/ }),

/***/ 531:
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ 678);
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-style.css */ 873);
/* harmony import */ var _home_home_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home-load.js */ 256);
/* harmony import */ var _menu_menu_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu-load.js */ 208);
/* harmony import */ var _contact_contact_load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact-load.js */ 827);







const body = document.querySelector('body');

body.appendChild((0,_contact_contact_load_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

navItems.forEach(item => {
    item.addEventListener('click', e => {
        main.classList.remove('home', 'menu', 'about', 'contact');
        main.textContent = '';

        if (item.dataset.index === '1') {
            main.classList.add('home');
            body.append((0,_home_home_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
        else if (item.dataset.index === '2') {
            main.classList.add('menu');
            body.append((0,_menu_menu_load_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        }
        else if (item.dataset.index === '4') {
            main.classList.add('contact');
            body.append((0,_contact_contact_load_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
        };

    })
})

/***/ }),

/***/ 208:
/*!*******************************!*\
  !*** ./src/menu/menu-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuContent)
/* harmony export */ });
/* harmony import */ var _menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-style.css */ 369);


function loadMenuContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const left = document.createElement('div');
    const right = document.createElement('div');

    main.classList.add('menu');
    section.classList.add('menu');
    left.classList.add('left-menu');
    right.classList.add('right-menu');

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
        image.src = `../src/menu/coffe-mugs (${i + 1}).png`;

        titleDiv.append(title, price);
        infoDiv.append(titleDiv, desc);
        right.append(infoDiv);
        left.append(image);
        section.append(left, right);
    }

    main.append(section);

    return main;
}

/***/ }),

/***/ 878:
/*!******************************!*\
  !*** ./src/fonts/Quesha.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37326ec20bcc0646176b.ttf";

/***/ }),

/***/ 262:
/*!******************************!*\
  !*** ./src/fonts/Roboto.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ 893:
/*!************************************!*\
  !*** ./src/fonts/Sundaycoffee.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "775d3d690ae0f0085c2e.ttf";

/***/ }),

/***/ 80:
/*!**********************************!*\
  !*** ./src/index/background.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ca4e74b6171489fccee.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(531)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFB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O0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDSTtBQUN3QjtBQUNBO0FBQ1M7OztBQUc1RDs7QUFFQSxpQkFBaUIsb0VBQWtCOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBa0I7QUFDMUM7O0FBRUEsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakN5Qjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzP2Q4OWQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lL2hvbWUtc3R5bGUuY3NzP2FjYTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC9pbmRleC1zdHlsZS5jc3M/ZmFiNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1zdHlsZS5jc3M/MDQ0ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbnNlY3Rpb24uY29udGFjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmxlZnQtY29udGFjdCwgLnJpZ2h0LWNvbnRhY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKVxufVxuXG4ubGVmdC1jb250YWN0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgbGVmdHNsaWRlO1xufVxuXG4ucmlnaHQtY29udGFjdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIHJpZ2h0c2xpZGU7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5uYW1lLWRpdiwgLmVtYWlsLWRpdiwgLmNvbW1lbnQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5idXR0b24uc3VibWl0LWZvcm0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmJ1dHRvbi5zdWJtaXQtZm9ybTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc29jaWFsLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgc2NhbGUoMC45KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTUlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRhY3QvY29udGFjdC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNEVBQTRFO0lBQzVFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubGVmdC1jb250YWN0LCAucmlnaHQtY29udGFjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcilcXG59XFxuXFxuLmxlZnQtY29udGFjdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgbGVmdHNsaWRlO1xcbn1cXG5cXG4ucmlnaHQtY29udGFjdCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgcmlnaHRzbGlkZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm5hbWUtZGl2LCAuZW1haWwtZGl2LCAuY29tbWVudC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZm9ybSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgLjIyKSAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC1mb3JtOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNvY2lhbC1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBsZWZ0c2xpZGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgc2NhbGUoMC45KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmlnaHRzbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTUlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmhvbWUge1xuICAgIGhlaWdodDogNzV2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogLjNzIGVhc2UtaW4tb3V0IDBzIDEgc2ltbWVyO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG5idXR0b24jb3JkZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1saWNvci1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSA1MSUsIHZhcigtLWNvZmZlZS1jb2xvcikgMTAwJSk7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XG59XG5cbmJ1dHRvbiNvcmRlcjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5yaWdodC1ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcjbXVnIHtcbiAgICB3aWR0aDogNjcycHg7XG4gICAgaGVpZ2h0OiA0MDZweDtcbiAgICBhbmltYXRpb246IGdyb3dzbGlkZSAuNXM7XG59XG5cblxuQGtleWZyYW1lcyBzaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDNweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBncm93c2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFGQUFxRjtJQUNyRiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9IQUFvSDtJQUNwSCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLGlDQUFpQztJQUNyQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4uaG9tZSB7XFxuICAgIGhlaWdodDogNzV2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdC1ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1pbi1vdXQgMHMgMSBzaW1tZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXdoaXRlLWNvbG9yKSAwJSwgdmFyKC0ta2hha2ktY29sb3IpIDEwMCUpO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuYnV0dG9uI29yZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tbGljb3ItY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgNTElLCB2YXIoLS1jb2ZmZWUtY29sb3IpIDEwMCUpO1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgLjIyKSAwcHggNXB4IDVweDtcXG59XFxuXFxuYnV0dG9uI29yZGVyOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbn1cXG5cXG4ucmlnaHQtaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5pbWcjbXVnIHtcXG4gICAgd2lkdGg6IDY3MnB4O1xcbiAgICBoZWlnaHQ6IDQwNnB4O1xcbiAgICBhbmltYXRpb246IGdyb3dzbGlkZSAuNXM7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgc2ltbWVyIHtcXG4gICAgMCUge1xcbiAgICAgICAgZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvd3NsaWRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TdW5kYXljb2ZmZWUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUXVlc2hhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTdW5kYXljb2ZmZWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuOnJvb3Qge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIC8qIEhTTCBjb2xvcnMgcGFsbGV0ZSAqL1xuICAgIC0tYXNoLWNvbG9yOiBoc2xhKDY4LCA4JSwgNjIlLCAxKTtcbiAgICAtLWxpY29yLWNvbG9yOiBoc2xhKDIzLCAxNiUsIDEwJSwgMSk7XG4gICAgLS1jb2ZmZWUtY29sb3I6IGhzbGEoMjUsIDM4JSwgMzYlLCAxKTtcbiAgICAtLWtoYWtpLWNvbG9yOiBoc2xhKDM5LCAzMSUsIDY0JSwgMSk7XG4gICAgLS1keWtlLWNvbG9yOiBoc2xhKDI3LCAyMiUsIDIwJSwgMC41KTtcbiAgICAtLXdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHlrZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDI1cHggNTBweCAwIDUwcHg7XG59XG5cbm5hdiAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG5tYWluIHtcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwcHggNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5uYXYtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbnNwYW4uaG9tZSB7XG4gICAgLS1vZmZzZXQ6IDI7XG4gICAgY29sb3I6ICNmZmNjMDA7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1vZmZzZXQpICogMWNoICsgY2FsYyh2YXIoLS1vZmZzZXQpICogMC4yY2gpKTtcbiAgICBhbmltYXRpb246IGZsaWNrZXIgM3MgbGluZWFyIGluZmluaXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG5cbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAtMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxuICAgICAgICAgICAgMCAwIDJweCxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXG4gICAgICAgICAgICAwIDAgMnB4ICNmZjdlMDAsXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXgvaW5kZXgtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2REFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkRBQWdEO0FBQ3BEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTs7SUFFZix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxzQkFBc0I7O0lBRXRCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELHFDQUFxQztJQUNyQyxNQUFNO0lBQ04sVUFBVTs7SUFFVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2I7Ozs7Ozs7Ozs7MEJBVWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1N1bmRheWNvZmZlZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9TdW5kYXljb2ZmZWUudHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1F1ZXNoYS50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbjpyb290IHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIC8qIEhTTCBjb2xvcnMgcGFsbGV0ZSAqL1xcbiAgICAtLWFzaC1jb2xvcjogaHNsYSg2OCwgOCUsIDYyJSwgMSk7XFxuICAgIC0tbGljb3ItY29sb3I6IGhzbGEoMjMsIDE2JSwgMTAlLCAxKTtcXG4gICAgLS1jb2ZmZWUtY29sb3I6IGhzbGEoMjUsIDM4JSwgMzYlLCAxKTtcXG4gICAgLS1raGFraS1jb2xvcjogaHNsYSgzOSwgMzElLCA2NCUsIDEpO1xcbiAgICAtLWR5a2UtY29sb3I6IGhzbGEoMjcsIDIyJSwgMjAlLCAwLjUpO1xcbiAgICAtLXdoaXRlLWNvbG9yOiAjRkZGRkZGO1xcblxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHlrZS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHggMCA1MHB4O1xcbn1cXG5cXG5uYXYgLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMHB4IDUwcHggMHB4IDUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLm5hdi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbnNwYW4uaG9tZSB7XFxuICAgIC0tb2Zmc2V0OiAyO1xcbiAgICBjb2xvcjogI2ZmY2MwMDtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1vZmZzZXQpICogMWNoICsgY2FsYyh2YXIoLS1vZmZzZXQpICogMC4yY2gpKTtcXG4gICAgYW5pbWF0aW9uOiBmbGlja2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xcblxcbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjk5O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6XFxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIDFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIC0xcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMCAtMnB4IDhweCxcXG4gICAgICAgICAgICAwIDAgMnB4LFxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcXG4gICAgICAgICAgICAwIDAgMTVweCAjZmY0NDQ0LFxcbiAgICAgICAgICAgIDAgMCAycHggI2ZmN2UwMCxcXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcXG4gICAgfVxcblxcbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ubWVudSB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgd2lkdGg6IDMzdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XG59XG5cbi50aXRsZS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4ubGVmdC1tZW51LCAucmlnaHQtbWVudSB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4ubGVmdC1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5yaWdodC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDcwcHg7XG59XG5cbi5jb2ZmZWUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNvZmZlZS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmltZy5tdWdzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cbkBrZXlmcmFtZXMgbW92ZXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51L21lbnUtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7O0FBS0E7SUFDSTtRQUNJLHFDQUFxQztRQUNyQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlY3Rpb24ubWVudSB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICB3aWR0aDogMzN2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbn1cXG5cXG4udGl0bGUtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLmxlZnQtbWVudSwgLnJpZ2h0LW1lbnUge1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxufVxcblxcbi5sZWZ0LW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHQtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDcwcHg7XFxufVxcblxcbi5jb2ZmZWUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvZmZlZS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nLm11Z3Mge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcblxcblxcblxcbkBrZXlmcmFtZXMgbW92ZXVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSkgc2NhbGUoMC45KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICcuL2NvbnRhY3Qtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1jb250YWN0Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQtY29udGFjdCcpO1xuXG4gICAgY29uc3QgaHEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBocS5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhY3QnKTtcbiAgICBjb25zdCBoNV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDVfMS50ZXh0Q29udGVudCA9ICdoZWFkcXVhcnRlcnMnO1xuICAgIHBfMS5pbm5lckhUTUwgPSAnMTEzIE1pY2hpZ2FuIEF2ZW51ZTxicj5DaGljYWdvLCBJTCA2MDY2MSc7XG4gICAgaHEuYXBwZW5kKGg1XzEsIHBfMSk7XG5cbiAgICBjb25zdCBzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFjdCcpO1xuICAgIGNvbnN0IGg1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHBfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoNV8yLnRleHRDb250ZW50ID0gJ3N1cHBvcnQnO1xuICAgIHBfMi5pbm5lckhUTUwgPSAnaGVscEBjYWZlLmNvbTxicj4rMSA3NzcgMjIyIDEyMzQnO1xuICAgIHNwLmFwcGVuZChoNV8yLCBwXzIpO1xuXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtY29udGFjdCcpO1xuXG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgaWNuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgaWNuMS5hbHQgPSAnRmFjZWJvb2sgaWNvbic7XG4gICAgaWNuMS5zcmMgPSAnLi4vc3JjL2NvbnRhY3QvZmFjZWJvb2suc3ZnJztcbiAgICBpY24xLmhlaWdodCA9ICcyNic7XG5cbiAgICBhMS5hcHBlbmRDaGlsZChpY24xKTtcblxuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGljbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGljbjIuYWx0ID0gJ0luc3RhZ3JhbSBpY29uJztcbiAgICBpY24yLnNyYyA9ICcuLi9zcmMvY29udGFjdC9pbnN0YWdyYW0uc3ZnJztcbiAgICBpY24yLmhlaWdodCA9ICcyNic7XG5cbiAgICBhMi5hcHBlbmRDaGlsZChpY24yKTtcbiAgICBpY29ucy5hcHBlbmQoYTEsIGEyKTtcblxuICAgIGxlZnQuYXBwZW5kKGhxLCBzcCwgaWNvbnMpO1xuXG4gICAgLy8gcmlnaHQgc2lkZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1jb250YWN0Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTGV0cyBjaGF0Lic7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUtZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMS5mb3IgPSAnbmFtZSc7XG4gICAgbGFiZWwxLnRleHRDb250ZW50ID0gJ25hbWUnXG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLnBsYWNlaG9sZGVyID0gJ0pvaG4gRGlheic7XG4gICAgaW5wdXQxLm5hbWUgPSAnbmFtZSc7XG4gICAgbmFtZS5hcHBlbmQobGFiZWwxLCBpbnB1dDEpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbC1kaXYnKTtcbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwyLmZvciA9ICdlbWFpbCc7XG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gJ2VtYWlsJztcbiAgICBpbnB1dDIudHlwZSA9ICdlbWFpbCc7XG4gICAgaW5wdXQyLnBsYWNlaG9sZGVyID0gJ2pvaG5AZW1haWwuY29tJztcbiAgICBpbnB1dDIubmFtZSA9ICdlbWFpbCc7XG4gICAgZW1haWwuYXBwZW5kKGxhYmVsMiwgaW5wdXQyKTtcblxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGxhYmVsMy5mb3IgPSAnY29tbWVudCc7XG4gICAgbGFiZWwzLnRleHRDb250ZW50ID0gJ2NvbW1lbnQnO1xuICAgIGlucHV0My5wbGFjZWhvbGRlciA9ICdUeXBlIGhlcmUuLi4nO1xuICAgIGlucHV0My5uYW1lID0gJ2NvbW1lbnQnO1xuICAgIGNvbW1lbnQuYXBwZW5kKGxhYmVsMywgaW5wdXQzKTtcblxuICAgIGZvcm0uYXBwZW5kKG5hbWUsIGVtYWlsLCBjb21tZW50KTtcblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtZm9ybScpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgcmlnaHQuYXBwZW5kKHRpdGxlLCBmb3JtLCBidG4pO1xuICAgIHNlY3Rpb24uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufSIsImltcG9ydCAnLi9ob21lLXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWhvbWUnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodC1ob21lJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXInKTtcbiAgICBzbW9rZS5jbGFzc0xpc3QuYWRkKCdzbW9rZScpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXVnJyk7XG5cbiAgICBoMS50ZXh0Q29udGVudCA9ICdCcmV3ZWQgdG8gcGVyZmVjdGlvbi4nO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0V2ZXJ5IHRpbWUuJztcbiAgICBidG4udGV4dENvbnRlbnQgPSAnT3JkZXIgbm93JztcbiAgICBpbWFnZS5zcmMgPSAnLi4vc3JjL2hvbWUvbXVnLnBuZyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGgxLCBoMik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgbGVmdC5hcHBlbmQoaGVhZGVyLCBidXR0b24pO1xuICAgIHJpZ2h0LmFwcGVuZChzbW9rZSwgaW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcblxuICAgIHJldHVybiBtYWluOyBcbn0iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LXN0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZE1haW5Db250ZW50IGZyb20gJy4uL2hvbWUvaG9tZS1sb2FkLmpzJztcbmltcG9ydCBsb2FkTWVudUNvbnRlbnQgZnJvbSAnLi4vbWVudS9tZW51LWxvYWQuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0Q29udGVudCBmcm9tICcuLi9jb250YWN0L2NvbnRhY3QtbG9hZC5qcyc7XG5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYm9keS5hcHBlbmRDaGlsZChsb2FkQ29udGFjdENvbnRlbnQoKSk7XG5cbmNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5uYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywgJ21lbnUnLCAnYWJvdXQnLCAnY29udGFjdCcpO1xuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzEnKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRNYWluQ29udGVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmRhdGFzZXQuaW5kZXggPT09ICcyJykge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChsb2FkTWVudUNvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnNCcpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZENvbnRhY3RDb250ZW50KCkpO1xuICAgICAgICB9O1xuXG4gICAgfSlcbn0pIiwiaW1wb3J0ICcuL21lbnUtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1tZW51Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQtbWVudScpO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFtcbiAgICAgICAgJ01vY2hhJyxcbiAgICAgICAgJ0xhdHRlJyxcbiAgICAgICAgJ0NhcHB1Y2Npbm8nLFxuICAgICAgICAnQW1lcmljYW5vJ1xuICAgIF1cblxuICAgIGNvbnN0IHByaWNlQXJyYXkgPSBbJyQ5JywgJyQ4JywgJyQ4JywgJyQ3J107XG5cbiAgICBjb25zdCBkZXNjQXJyYXkgPSBbXG4gICAgICAgICdCcmV3ZWQgZm9yIGNvenkgYXRtb3NwaGVyZXMsIG91ciBoZWFydHkgYW5kIHJ1c3RpYyBibGVuZCBpcyByZW1pbmlzY2VudCBvZiBhIGNhYmluIGZpcmVwbGFjZS4nLFxuICAgICAgICAnQ3JhZnRlZCB3aXRoIHByZWNpc2lvbiB1c2luZyBhIGJhbGFuY2VkIGJsZW5kIG9mIGNvZmZlZSBhbmQgbWlsaywgYSBmZWFzdCBmb3IgdGhlIHNlbnNlcy4nLFxuICAgICAgICAnUGVyZmVjdCBiYWxhbmNlIG9mIGVzcHJlc3NvLCBtaWxrIGFuZCBhIGNpbm5hbW9uIHR3aXN0LCBqdXN0IGVub3VnaCB0byB3YWtlIHRoZSB0YXN0ZSBidWRzLicsXG4gICAgICAgICdTb3BoaXN0aWNhdGVkIHRha2Ugb24gYSBjbGFzc2ljIGNvZmZlZSBleHBlcmllbmNlLCBtYWRlIHdpdGggdGhlIGZpbmVzdCAxMDAlIG9yZ2FuaWMgYmVhbnMuJ1xuICAgIF1cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaW5mbycpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtdGl0bGUnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbXVncycpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpXTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZUFycmF5W2ldO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gZGVzY0FycmF5W2ldO1xuICAgICAgICBpbWFnZS5zcmMgPSBgLi4vc3JjL21lbnUvY29mZmUtbXVncyAoJHtpICsgMX0pLnBuZ2A7XG5cbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlLCBwcmljZSk7XG4gICAgICAgIGluZm9EaXYuYXBwZW5kKHRpdGxlRGl2LCBkZXNjKTtcbiAgICAgICAgcmlnaHQuYXBwZW5kKGluZm9EaXYpO1xuICAgICAgICBsZWZ0LmFwcGVuZChpbWFnZSk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==