"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ 469:
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about/about-style.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `main.about {
    display: flex;
    justify-content: center;
    align-items: center;
}

section.about {
    backdrop-filter: blur(40px) brightness(1.15);
    width: 33vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    overflow: hidden;
    border: 2px var(--white-color) solid;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;
    animation: .3s ease-out 0s 1 moveup;
    padding: 40px 40px;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h2.title-about {
    font-size: 1.75rem;
    text-align: center;
}

.picture-about {
    width: 100%;
}

img.pic-about {
    max-width: 100%;
    border-radius: var(--border-radius);
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

@media (max-width: 600px) {
    main.about {
        width: 100vw;
        padding: 0 20px 0 20px;
        box-sizing: border-box;
        justify-content: start;
        align-items: stretch;
        overflow: scroll;
        margin: auto;
    }
    
    section.about {
        width: 100%;
        padding: 20px 20px;
    }

    h2.title-about {
        font-size: 3rem;
    }

    p.text-about {
        font-size: 2.2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/about/about-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,sBAAsB;IACtB,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,2CAA2C;IAC3C,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI;QACI,qCAAqC;QACrC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ;;AAEA;IACI;QACI,YAAY;QACZ,sBAAsB;QACtB,sBAAsB;QACtB,sBAAsB;QACtB,oBAAoB;QACpB,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["main.about {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection.about {\n    backdrop-filter: blur(40px) brightness(1.15);\n    width: 33vw;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 2px var(--white-color) solid;\n    border-radius: 40px;\n    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;\n    animation: .3s ease-out 0s 1 moveup;\n    padding: 40px 40px;\n}\n\n.text {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nh2.title-about {\n    font-size: 1.75rem;\n    text-align: center;\n}\n\n.picture-about {\n    width: 100%;\n}\n\nimg.pic-about {\n    max-width: 100%;\n    border-radius: var(--border-radius);\n}\n\n@keyframes moveup {\n    0% {\n        transform: translateY(10%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0) scale(1);\n        opacity: 1;\n    }\n}\n\n@media (max-width: 600px) {\n    main.about {\n        width: 100vw;\n        padding: 0 20px 0 20px;\n        box-sizing: border-box;\n        justify-content: start;\n        align-items: stretch;\n        overflow: scroll;\n        margin: auto;\n    }\n    \n    section.about {\n        width: 100%;\n        padding: 20px 20px;\n    }\n\n    h2.title-about {\n        font-size: 3rem;\n    }\n\n    p.text-about {\n        font-size: 2.2rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
}

.social-icons {
    display: flex;
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
}


@media (max-width: 600px) {
    main.contact {
        width: 100vw;
        height: 100%;
        padding: 0 20px 20px 20px;
        box-sizing: border-box;
    }

    section.contact {
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    .left-contact {
        padding-top: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 25%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "info1 social"
            "info2 social";
        gap: 10px;
    }

    .hq {
        order: 0;
        grid-area: info1;
    }

    .social-contact {
        order: 1;
        grid-area: social;
        align-self: center;
    }

    .social-icons {
        flex-direction: column;
    }

    .sp {
        order: 2;
        grid-area: info2;
    }

    .left-contact h5 {
        font-size: 3rem;
        overflow: scroll;
    }

    .right-contact {
        height: 60vh;
        width: 100%;
        box-sizing: border-box;
        gap: 5px;
        padding-top: 10px;
        padding-bottom: 20px;
        overflow: scroll
    }

    form {
        width: 100%;
    }

    form input, form textarea, form label {
        font-size: 3rem;
    }

    form textarea {
        height: 100px;
    }

    button.submit-form {
        margin-top: 5px;
        font-size: 3rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/contact/contact-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;AACd;;AAEA;IACI,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT;AACJ;;AAEA;IACI,UAAU;IACV,sCAAsC;AAC1C;;AAEA;IACI,UAAU;IACV,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,mBAAmB;IACnB,4EAA4E;IAC5E,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI;QACI,sCAAsC;QACtC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ;;AAEA;IACI;QACI,sCAAsC;QACtC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ;;;AAGA;IACI;QACI,YAAY;QACZ,YAAY;QACZ,yBAAyB;QACzB,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,oBAAoB;QACpB,sBAAsB;QACtB,WAAW;QACX,WAAW;QACX,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B;;0BAEkB;QAClB,SAAS;IACb;;IAEA;QACI,QAAQ;QACR,gBAAgB;IACpB;;IAEA;QACI,QAAQ;QACR,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,QAAQ;QACR,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,sBAAsB;QACtB,QAAQ;QACR,iBAAiB;QACjB,oBAAoB;QACpB;IACJ;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,eAAe;IACnB;AACJ","sourcesContent":["main.contact {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n}\n\nsection.contact {\n    width: 30%;\n    height: 65%;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 40px;\n    animation: .3s ease-out 0s 1 moveup;\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n.left-contact, .right-contact {\n    border-radius: inherit;\n    backdrop-filter: blur(40px) brightness(1.15);\n    padding: 40px 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 50px;\n    border: 2px solid var(--white-color)\n}\n\n.left-contact {\n    width: 40%;\n    animation: 0.3s ease-in 0s 1 leftslide;\n}\n\n.right-contact {\n    width: 60%;\n    animation: 0.3s ease-in 0s 1 rightslide;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.name-div, .email-div, .comment-div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\ninput {\n    background-color: var(--white-color);\n    color: var(--coffee-color);\n    border-radius: 10px;\n    padding: 5px 5px;\n    border: none;\n}\n\ninput::placeholder, textarea::placeholder {\n    color: var(--coffee-color);\n}\n\ntextarea {\n    color: var(--coffee-color);\n    height: 75px;\n    padding: 5px 5px;\n    border-radius: 10px;\n    resize: vertical;\n}\n\nbutton.submit-form {\n    align-self: center;\n    width: fit-content;\n    background-color: var(--khaki-color);\n    padding: 10px 20px;\n    border-radius: var(--border-radius);\n    font-size: 1rem;\n    letter-spacing: 2px;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n    transition: 0.5s;\n}\n\nbutton.submit-form:hover {\n    transform: scale(1.03);\n    transition: 0.5s;\n}\n\n.social-contact {\n    display: flex;\n    justify-content: center;\n}\n\n.social-icons {\n    display: flex;\n    gap: 20px;\n}\n\n@keyframes leftslide {\n    0% {\n        transform: translateX(-15%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateX(0) scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes rightslide {\n    0% {\n        transform: translateX(+15%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateX(0) scale(1);\n        opacity: 1;\n    }\n}\n\n\n@media (max-width: 600px) {\n    main.contact {\n        width: 100vw;\n        height: 100%;\n        padding: 0 20px 20px 20px;\n        box-sizing: border-box;\n    }\n\n    section.contact {\n        width: 100%;\n        height: 100%;\n        flex-direction: column;\n    }\n\n    .left-contact {\n        padding-top: 10px;\n        padding-bottom: 10px;\n        box-sizing: border-box;\n        width: 100%;\n        height: 25%;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas:\n            \"info1 social\"\n            \"info2 social\";\n        gap: 10px;\n    }\n\n    .hq {\n        order: 0;\n        grid-area: info1;\n    }\n\n    .social-contact {\n        order: 1;\n        grid-area: social;\n        align-self: center;\n    }\n\n    .social-icons {\n        flex-direction: column;\n    }\n\n    .sp {\n        order: 2;\n        grid-area: info2;\n    }\n\n    .left-contact h5 {\n        font-size: 3rem;\n        overflow: scroll;\n    }\n\n    .right-contact {\n        height: 60vh;\n        width: 100%;\n        box-sizing: border-box;\n        gap: 5px;\n        padding-top: 10px;\n        padding-bottom: 20px;\n        overflow: scroll\n    }\n\n    form {\n        width: 100%;\n    }\n\n    form input, form textarea, form label {\n        font-size: 3rem;\n    }\n\n    form textarea {\n        height: 100px;\n    }\n\n    button.submit-form {\n        margin-top: 5px;\n        font-size: 3rem;\n    }\n}"],"sourceRoot":""}]);
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
}


@media (max-width: 600px) {
    main.home {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0 0 20px;
    }

    .left-home {
        height: 100%;
    }

    button#order {
        margin-top: auto;
        font-size: 2rem;
    }

    h1 {
        font-size: 7rem;
        letter-spacing: 2px;
        background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h2 {
        font-size: 3rem;
        line-height: 0.5;
        letter-spacing: 5px;
        text-align: end;
    }

    .right-home {
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/home/home-style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,qFAAqF;IACrF,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,oHAAoH;IACpH,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,4EAA4E;AAChF;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;;AAGA;IACI;QACI,iBAAiB;QACjB,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;;IAEA;QACI,iCAAiC;IACrC;AACJ;;;AAGA;IACI;QACI,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,mBAAmB;QACnB,qFAAqF;QACrF,6BAA6B;QAC7B,oCAAoC;IACxC;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["main.home {\n    height: 75vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.left-home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    animation: .3s ease-in-out 0s 1 simmer;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: 2px;\n    background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\nh2 {\n    font-size: 3rem;\n    line-height: 0.5;\n    letter-spacing: 5px;\n}\n\nbutton#order {\n    margin-top: auto;\n    background-size: 200% auto;\n    background-image: linear-gradient(to right, var(--licor-color) 0%, var(--khaki-color) 51%, var(--coffee-color) 100%);\n    padding: 15px 25px;\n    border-radius: var(--border-radius);\n    border: 2px solid var(--white-color);\n    font-size: 1.25rem;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n}\n\nbutton#order:hover {\n    transform: scale(1.05);\n    background-position: right center;\n}\n\n.right-home {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding-bottom: 150px;\n    height: 100%;\n}\n\nimg#mug {\n    width: 672px;\n    animation: growslide .5s;\n}\n\n\n@keyframes simmer {\n    0% {\n        filter: blur(3px);\n        transform: scale(0.95);\n    }\n\n    100% {\n        filter: blur(0px);\n        transform: scale(1);\n    }\n}\n\n@keyframes growslide {\n    0% {\n        transform: scale(0.9) translateX(100%);\n    }\n\n    100% {\n        transform: scale(1) translateX(0);\n    }\n}\n\n\n@media (max-width: 600px) {\n    main.home {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        padding: 0 0 0 20px;\n    }\n\n    .left-home {\n        height: 100%;\n    }\n\n    button#order {\n        margin-top: auto;\n        font-size: 2rem;\n    }\n\n    h1 {\n        font-size: 7rem;\n        letter-spacing: 2px;\n        background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n\n    h2 {\n        font-size: 3rem;\n        line-height: 0.5;\n        letter-spacing: 5px;\n        text-align: end;\n    }\n\n    .right-home {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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
    --licor-color-trans: hsla(23, 16%, 10%, 0.9);
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
    width: 100vw;
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
    flex-wrap: wrap;
    gap: 100px;
    padding: 25px 50px 0 50px;
}

.logo {
    order: 0;
}

.navbar {
    order: 1;
}

button.burger-button {
    background-color: transparent;
    border: 10px;
    color: black;
    cursor: pointer;
    font-size: 30px;
    margin-left: 32px;
    float: left;
    line-height: 70px;
    display: none;
    outline: none;
}

nav ul#items {
    display: flex;
    gap: 25px;
}

li {
    list-style-type: none;
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

li.close {
    display: none;
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
}


@media (max-width: 600px) {
    :root {
        color: var(--white-color);
        font-family: 'Roboto';
        font-size: 8px;
    }

    header {
        height: 10vh;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: normal;
        padding: 0;
        padding-top: 20px;
        padding-right: 20px;
        gap: 0;
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1;
        overflow-x: hidden;
        order: 0;
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .logo {
        margin-left: auto;
        order: 1;
    }

    nav ul#items {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--licor-color-trans);
        height: 100%;
    }

    nav ul#items.show {
        display: flex;
    }
    
    button.nav-item {
        font-size: 3rem;
        padding-left: 20px;
    }

    button.burger-button {
        display: block;
        align-self: flex-start;
    }

    li.close {
        display: flex;
        align-self: flex-end;
        padding-top: 20px;
        padding-right: 20px;
        font-size: 3.5rem;
    }

    button.hidden {
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/index/index-style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,6DAAsD;AAC1D;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;;IAEf,uBAAuB;IACvB,iCAAiC;IACjC,oCAAoC;IACpC,4CAA4C;IAC5C,qCAAqC;IACrC,oCAAoC;IACpC,qCAAqC;IACrC,sBAAsB;;IAEtB,qBAAqB;AACzB;;AAEA;IACI,yDAAyC;IACzC,mCAAmC;IACnC,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,WAAW;IACX,cAAc;IACd,6DAA6D;IAC7D,qCAAqC;IACrC,MAAM;IACN,UAAU;;IAEV,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI;QACI,aAAa;QACb;;;;;;;;;;0BAUkB;IACtB;;IAEA;QACI,YAAY;QACZ,iBAAiB;IACrB;AACJ;;;AAGA;IACI;QACI,yBAAyB;QACzB,qBAAqB;QACrB,cAAc;IAClB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,UAAU;QACV,iBAAiB;QACjB,mBAAmB;QACnB,MAAM;IACV;;IAEA;QACI,eAAe;QACf,MAAM;QACN,OAAO;QACP,aAAa;QACb,UAAU;QACV,kBAAkB;QAClB,QAAQ;QACR,UAAU;QACV,aAAa;QACb,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,0CAA0C;QAC1C,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,cAAc;QACd,sBAAsB;IAC1B;;IAEA;QACI,aAAa;QACb,oBAAoB;QACpB,iBAAiB;QACjB,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Sundaycoffee';\n    src: url('../fonts/Sundaycoffee.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Quesha';\n    src: url('../fonts/Quesha.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('../fonts/Roboto.ttf') format(truetype);\n}\n\n:root {\n    color: var(--white-color);\n    font-family: 'Roboto';\n    font-size: 16px;\n\n    /* HSL colors pallete */\n    --ash-color: hsla(68, 8%, 62%, 1);\n    --licor-color: hsla(23, 16%, 10%, 1);\n    --licor-color-trans: hsla(23, 16%, 10%, 0.9);\n    --coffee-color: hsla(25, 38%, 36%, 1);\n    --khaki-color: hsla(39, 31%, 64%, 1);\n    --dyke-color: hsla(27, 22%, 20%, 0.5);\n    --white-color: #FFFFFF;\n\n    --border-radius: 30px;\n}\n\nbody {\n    background-image: url('./background.jpg');\n    background-color: var(--dyke-color);\n    background-blend-mode: multiply;\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n}\n\nheader {\n    height: 15vh;\n}\n\nh3 {\n    font-family: 'Quesha';\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 100px;\n    padding: 25px 50px 0 50px;\n}\n\n.logo {\n    order: 0;\n}\n\n.navbar {\n    order: 1;\n}\n\nbutton.burger-button {\n    background-color: transparent;\n    border: 10px;\n    color: black;\n    cursor: pointer;\n    font-size: 30px;\n    margin-left: 32px;\n    float: left;\n    line-height: 70px;\n    display: none;\n    outline: none;\n}\n\nnav ul#items {\n    display: flex;\n    gap: 25px;\n}\n\nli {\n    list-style-type: none;\n}\n\nbutton {\n    color: var(--white-color);\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nbutton.nav-item {\n    font-size: 1.5rem;\n}\n\nli.close {\n    display: none;\n}\n\n\nspan.home {\n    --offset: 2;\n    color: #ffcc00;\n    left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));\n    animation: flicker 3s linear infinite;\n    top: 0;\n    z-index: 1;\n\n    font-size: 5rem;\n    line-height: 1;\n}\n\na {\n    cursor: pointer;\n}\n\n@keyframes flicker {\n\n    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {\n        opacity: 0.99;\n        text-shadow:\n            -1px -1px 0 rgba(255, 255, 255, 0.4),\n            1px -1px 0 rgba(255, 255, 255, 0.4),\n            -1px 1px 0 rgba(255, 255, 255, 0.4),\n            1px 1px 0 rgba(255, 255, 255, 0.4),\n            0 -2px 8px,\n            0 0 2px,\n            0 0 5px #ff7e00,\n            0 0 15px #ff4444,\n            0 0 2px #ff7e00,\n            0 2px 3px #000;\n    }\n\n    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {\n        opacity: 0.4;\n        text-shadow: none;\n    }\n}\n\n\n@media (max-width: 600px) {\n    :root {\n        color: var(--white-color);\n        font-family: 'Roboto';\n        font-size: 8px;\n    }\n\n    header {\n        height: 10vh;\n    }\n\n    nav {\n        display: flex;\n        justify-content: space-between;\n        align-items: normal;\n        padding: 0;\n        padding-top: 20px;\n        padding-right: 20px;\n        gap: 0;\n    }\n\n    .navbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        height: 100vh;\n        z-index: 1;\n        overflow-x: hidden;\n        order: 0;\n        width: 50%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .logo {\n        margin-left: auto;\n        order: 1;\n    }\n\n    nav ul#items {\n        display: none;\n        flex-direction: column;\n        align-items: flex-start;\n        background-color: var(--licor-color-trans);\n        height: 100%;\n    }\n\n    nav ul#items.show {\n        display: flex;\n    }\n    \n    button.nav-item {\n        font-size: 3rem;\n        padding-left: 20px;\n    }\n\n    button.burger-button {\n        display: block;\n        align-self: flex-start;\n    }\n\n    li.close {\n        display: flex;\n        align-self: flex-end;\n        padding-top: 20px;\n        padding-right: 20px;\n        font-size: 3.5rem;\n    }\n\n    button.hidden {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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


@media (max-width: 600px) {
    main.menu {
        width: 100vw;
        padding: 10px 20px 10px 20px;
        box-sizing: border-box;
    }

    section.menu {
        width: 100%;
        overflow: scroll;
    }

    .left-menu {
        padding: 5px 5px;
        gap: 35px;
    }

    .right-menu {
        padding: 5px 15px;
        gap: 20px;
    }

    h3 {
        font-size: 5rem;
    }

    p {
        font-size: 2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/menu/menu-style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,2CAA2C;IAC3C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;;;;AAKA;IACI;QACI,qCAAqC;QACrC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;AACJ;;;AAGA;IACI;QACI,YAAY;QACZ,4BAA4B;QAC5B,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,SAAS;IACb;;IAEA;QACI,iBAAiB;QACjB,SAAS;IACb;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["main.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection.menu {\n    backdrop-filter: blur(40px) brightness(1.15);\n    width: 33vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 2px var(--white-color) solid;\n    border-radius: 40px;\n    box-shadow: rgba(0, 0, 0, .5) 20px 25px 5px;\n    animation: .3s ease-out 0s 1 moveup;\n}\n\n.title-box {\n    display: flex;\n    justify-content: space-between;\n    line-height: 0;\n}\n\n.left-menu, .right-menu {\n    padding: 40px 40px;\n}\n\n.left-menu {\n    background-color: var(--khaki-color);\n    border-right: 1px var(--white-color) solid;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.right-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 70px;\n}\n\n.coffee-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.coffee-title {\n    display: flex;\n    justify-content: space-between;\n}\n\nimg.mugs {\n    max-width: 100%;\n}\n\n\n\n\n@keyframes moveup {\n    0% {\n        transform: translateY(10%) scale(0.9);\n        opacity: 0;\n    }\n\n    100% {\n        transform: translateY(0) scale(1);\n        opacity: 1;\n    }\n}\n\n\n@media (max-width: 600px) {\n    main.menu {\n        width: 100vw;\n        padding: 10px 20px 10px 20px;\n        box-sizing: border-box;\n    }\n\n    section.menu {\n        width: 100%;\n        overflow: scroll;\n    }\n\n    .left-menu {\n        padding: 5px 5px;\n        gap: 35px;\n    }\n\n    .right-menu {\n        padding: 5px 15px;\n        gap: 20px;\n    }\n\n    h3 {\n        font-size: 5rem;\n    }\n\n    p {\n        font-size: 2rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 921:
/*!***********************************!*\
  !*** ./src/about/about-style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about-style.css */ 469);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ 16:
/*!*********************************!*\
  !*** ./src/about/about-load.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAboutContent)
/* harmony export */ });
/* harmony import */ var _about_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-style.css */ 921);


function loadAboutContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const text = document.createElement('div');
    const pic = document.createElement('div');
    const title = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');

    main.classList.add('about');
    section.classList.add('about');
    text.classList.add('text');
    pic.classList.add('picture-about');

    title.classList.add('title-about');
    title.textContent = 'Our story';
    p.classList.add('text-about');
    p.innerHTML = 'What started as shared hobby small talk, the team at COCO quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in. Over the years, we’ve developed, mass produced and sold our own blends to share with the world, and that’s how COCO came to be. <br><br>';
    p.innerHTML += 'With more than 200 shops across US as of 2023, we’re constantly working hard and innovating to bring the next chapter of COCO to all coffee lovers. In fact, we’re excited to share a few large developments as early as this year! <br> <br>';
    p.innerHTML += 'Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique - that’s COCO.';

    img.classList.add('pic-about');
    img.src = '../src/about/our-story.png';
    img.alt = 'Picture of a person pouring coffee';

    text.append(title, p);
    pic.append(img);
    section.append(text, pic);
    main.append(section);

    return main;
}

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
    hq.classList.add('hq');
    const h5_1 = document.createElement('h5');
    const p_1 = document.createElement('p');
    h5_1.textContent = 'headquarters';
    p_1.innerHTML = '113 Michigan Avenue<br>Chicago, IL 60661';
    hq.append(h5_1, p_1);

    const sp = document.createElement('div');
    sp.classList.add('info-contact');
    sp.classList.add('sp');
    const h5_2 = document.createElement('h5');
    const p_2 = document.createElement('p');
    h5_2.textContent = 'support';
    p_2.innerHTML = 'help@cafe.com<br>+1 777 222 1234';
    sp.append(h5_2, p_2);

    const icons = document.createElement('div');
    const ico = document.createElement('div');
    ico.classList.add('social-icons');
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
    ico.appendChild(a1);
    ico.appendChild(a2);
    icons.append(ico);
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
/* harmony import */ var _about_about_load_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about-load.js */ 16);








const body = document.querySelector('body');

body.appendChild((0,_home_home_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');
const burgerBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".close-btn");
const nav = document.getElementById("items");

const toggleNavbar = () => {
    nav.classList.toggle('show');
    burgerBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
};

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
            toggleNavbar();

            body.append((0,_menu_menu_load_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        }
        else if (item.dataset.index === '3') {
            main.classList.add('about');
            toggleNavbar();

            body.append((0,_about_about_load_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
        }
        else if (item.dataset.index === '4') {
            main.classList.add('contact');
            toggleNavbar();

            body.append((0,_contact_contact_load_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
        };
    })
})

burgerBtn.addEventListener('click', () => {
    toggleNavbar();
});

closeBtn.addEventListener('click', () => {
    toggleNavbar();
});

main.addEventListener('click', () => {
    if(nav.classList.contains('show')) {
        toggleNavbar();
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSx1Q0FBdUMsb0JBQW9CLDhCQUE4QixtQkFBbUIsa0JBQWtCLGlCQUFpQixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLDZCQUE2Qix1QkFBdUIsMEJBQTBCLDBDQUEwQyxvQkFBb0IsOEJBQThCLGdCQUFnQixHQUFHLG1DQUFtQyw2QkFBNkIsbURBQW1ELHlCQUF5QixvQkFBb0IsNkJBQTZCLHFDQUFxQyxnQkFBZ0IsNkNBQTZDLG1CQUFtQixpQkFBaUIsNkNBQTZDLEdBQUcsb0JBQW9CLGlCQUFpQiw4Q0FBOEMsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcseUNBQXlDLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFFBQVEsc0JBQXNCLEdBQUcsV0FBVywyQ0FBMkMsaUNBQWlDLDBCQUEwQix1QkFBdUIsbUJBQW1CLEdBQUcsK0NBQStDLGlDQUFpQyxHQUFHLGNBQWMsaUNBQWlDLG1CQUFtQix1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLHdCQUF3Qix5QkFBeUIseUJBQXlCLDJDQUEyQyx5QkFBeUIsMENBQTBDLHNCQUFzQiwwQkFBMEIsbUZBQW1GLHVCQUF1QixHQUFHLDhCQUE4Qiw2QkFBNkIsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQixHQUFHLDBCQUEwQixVQUFVLGlEQUFpRCxxQkFBcUIsT0FBTyxjQUFjLDRDQUE0QyxxQkFBcUIsT0FBTyxHQUFHLDJCQUEyQixVQUFVLGlEQUFpRCxxQkFBcUIsT0FBTyxjQUFjLDRDQUE0QyxxQkFBcUIsT0FBTyxHQUFHLGlDQUFpQyxvQkFBb0IsdUJBQXVCLHVCQUF1QixvQ0FBb0MsaUNBQWlDLE9BQU8seUJBQXlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLE9BQU8sdUJBQXVCLDRCQUE0QiwrQkFBK0IsaUNBQWlDLHNCQUFzQixzQkFBc0Isd0JBQXdCLHlDQUF5QyxzQ0FBc0MsMkZBQTJGLG9CQUFvQixPQUFPLGFBQWEsbUJBQW1CLDJCQUEyQixPQUFPLHlCQUF5QixtQkFBbUIsNEJBQTRCLDZCQUE2QixPQUFPLHVCQUF1QixpQ0FBaUMsT0FBTyxhQUFhLG1CQUFtQiwyQkFBMkIsT0FBTywwQkFBMEIsMEJBQTBCLDJCQUEyQixPQUFPLHdCQUF3Qix1QkFBdUIsc0JBQXNCLGlDQUFpQyxtQkFBbUIsNEJBQTRCLCtCQUErQixpQ0FBaUMsY0FBYyxzQkFBc0IsT0FBTywrQ0FBK0MsMEJBQTBCLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLDRCQUE0QiwwQkFBMEIsMEJBQTBCLE9BQU8sR0FBRyxtQkFBbUI7QUFDcGlMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hOdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8s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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLGNBQWMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFB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Ozs7Ozs7O0FDckN1QjtBQUNJO0FBQ3dCO0FBQ0E7QUFDUztBQUNOOzs7QUFHdEQ7O0FBRUEsaUJBQWlCLDhEQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsOERBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDhEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixnRUFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9FQUFrQjtBQUMxQztBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNuRXlCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0L2Fib3V0LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lL2hvbWUtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXgvaW5kZXgtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS9tZW51LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0L2Fib3V0LXN0eWxlLmNzcz9iNTU1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC9jb250YWN0LXN0eWxlLmNzcz9kODlkIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzcz9hY2E3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXgvaW5kZXgtc3R5bGUuY3NzP2ZhYjUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51L21lbnUtc3R5bGUuY3NzPzA0NGYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC9hYm91dC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC9jb250YWN0LWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lL2hvbWUtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS9tZW51LWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4uYWJvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbi5hYm91dCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgd2lkdGg6IDMzdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAycHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuNSkgMjBweCAyNXB4IDVweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5oMi50aXRsZS1hYm91dCB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBpY3R1cmUtYWJvdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcucGljLWFib3V0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4uYWJvdXQge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIFxuICAgIHNlY3Rpb24uYWJvdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIH1cblxuICAgIGgyLnRpdGxlLWFib3V0IHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgIHAudGV4dC1hYm91dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hYm91dC9hYm91dC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLmFib3V0IHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XFxuICAgIHdpZHRoOiAzM3Z3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuNSkgMjBweCAyNXB4IDVweDtcXG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XFxuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcXG59XFxuXFxuLnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmgyLnRpdGxlLWFib3V0IHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5waWN0dXJlLWFib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmltZy5waWMtYWJvdXQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgbWFpbi5hYm91dCB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgXFxuICAgIHNlY3Rpb24uYWJvdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgaDIudGl0bGUtYWJvdXQge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIHAudGV4dC1hYm91dCB7XFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4uY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuc2VjdGlvbi5jb250YWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4ubGVmdC1jb250YWN0LCAucmlnaHQtY29udGFjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpXG59XG5cbi5sZWZ0LWNvbnRhY3Qge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYW5pbWF0aW9uOiAwLjNzIGVhc2UtaW4gMHMgMSBsZWZ0c2xpZGU7XG59XG5cbi5yaWdodC1jb250YWN0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgcmlnaHRzbGlkZTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLm5hbWUtZGl2LCAuZW1haWwtZGl2LCAuY29tbWVudC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG59XG5cbnRleHRhcmVhIHtcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmJ1dHRvbi5zdWJtaXQtZm9ybSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYnV0dG9uLnN1Ym1pdC1mb3JtOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zb2NpYWwtY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbkBrZXlmcmFtZXMgbGVmdHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpZ2h0c2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCsxNSUpIHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFpbi5jb250YWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5jb250YWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAubGVmdC1jb250YWN0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJpbmZvMSBzb2NpYWxcIlxuICAgICAgICAgICAgXCJpbmZvMiBzb2NpYWxcIjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIC5ocSB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICBncmlkLWFyZWE6IGluZm8xO1xuICAgIH1cblxuICAgIC5zb2NpYWwtY29udGFjdCB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICBncmlkLWFyZWE6IHNvY2lhbDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5zcCB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICBncmlkLWFyZWE6IGluZm8yO1xuICAgIH1cblxuICAgIC5sZWZ0LWNvbnRhY3QgaDUge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLnJpZ2h0LWNvbnRhY3Qge1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsXG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGZvcm0gaW5wdXQsIGZvcm0gdGV4dGFyZWEsIGZvcm0gbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuXG4gICAgZm9ybSB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLnN1Ym1pdC1mb3JtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRhY3QvY29udGFjdC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNEVBQTRFO0lBQzVFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQjs7MEJBRWtCO1FBQ2xCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFFBQVE7UUFDUixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEI7SUFDSjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubGVmdC1jb250YWN0LCAucmlnaHQtY29udGFjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcilcXG59XFxuXFxuLmxlZnQtY29udGFjdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgbGVmdHNsaWRlO1xcbn1cXG5cXG4ucmlnaHQtY29udGFjdCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgcmlnaHRzbGlkZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm5hbWUtZGl2LCAuZW1haWwtZGl2LCAuY29tbWVudC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZm9ybSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgLjIyKSAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuYnV0dG9uLnN1Ym1pdC1mb3JtOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNvY2lhbC1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbGVmdHNsaWRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNSUpIHNjYWxlKDAuOSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJpZ2h0c2xpZGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzE1JSkgc2NhbGUoMC45KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYWluLmNvbnRhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbi5jb250YWN0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubGVmdC1jb250YWN0IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDI1JTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJpbmZvMSBzb2NpYWxcXFwiXFxuICAgICAgICAgICAgXFxcImluZm8yIHNvY2lhbFxcXCI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhxIHtcXG4gICAgICAgIG9yZGVyOiAwO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMTtcXG4gICAgfVxcblxcbiAgICAuc29jaWFsLWNvbnRhY3Qge1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICBncmlkLWFyZWE6IHNvY2lhbDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuc29jaWFsLWljb25zIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnNwIHtcXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMjtcXG4gICAgfVxcblxcbiAgICAubGVmdC1jb250YWN0IGg1IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0LWNvbnRhY3Qge1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbFxcbiAgICB9XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgZm9ybSBpbnB1dCwgZm9ybSB0ZXh0YXJlYSwgZm9ybSBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgZm9ybSB0ZXh0YXJlYSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5zdWJtaXQtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmhvbWUge1xuICAgIGhlaWdodDogNzV2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogLjNzIGVhc2UtaW4tb3V0IDBzIDEgc2ltbWVyO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG5idXR0b24jb3JkZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1saWNvci1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSA1MSUsIHZhcigtLWNvZmZlZS1jb2xvcikgMTAwJSk7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XG59XG5cbmJ1dHRvbiNvcmRlcjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5yaWdodC1ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcjbXVnIHtcbiAgICB3aWR0aDogNjcycHg7XG4gICAgYW5pbWF0aW9uOiBncm93c2xpZGUgLjVzO1xufVxuXG5cbkBrZXlmcmFtZXMgc2ltbWVyIHtcbiAgICAwJSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZ3Jvd3NsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4uaG9tZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgICB9XG5cbiAgICAubGVmdC1ob21lIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIGJ1dHRvbiNvcmRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5yaWdodC1ob21lIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFGQUFxRjtJQUNyRiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9IQUFvSDtJQUNwSCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHFGQUFxRjtRQUNyRiw2QkFBNkI7UUFDN0Isb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluLmhvbWUge1xcbiAgICBoZWlnaHQ6IDc1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQtaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2UtaW4tb3V0IDBzIDEgc2ltbWVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcblxcbmJ1dHRvbiNvcmRlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWxpY29yLWNvbG9yKSAwJSwgdmFyKC0ta2hha2ktY29sb3IpIDUxJSwgdmFyKC0tY29mZmVlLWNvbG9yKSAxMDAlKTtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XFxufVxcblxcbmJ1dHRvbiNvcmRlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0LWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaW1nI211ZyB7XFxuICAgIHdpZHRoOiA2NzJweDtcXG4gICAgYW5pbWF0aW9uOiBncm93c2xpZGUgLjVzO1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIHNpbW1lciB7XFxuICAgIDAlIHtcXG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dzbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYWluLmhvbWUge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0LWhvbWUge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiNvcmRlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXdoaXRlLWNvbG9yKSAwJSwgdmFyKC0ta2hha2ktY29sb3IpIDEwMCUpO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0LWhvbWUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1N1bmRheWNvZmZlZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9RdWVzaGEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1N1bmRheWNvZmZlZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG46cm9vdCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLyogSFNMIGNvbG9ycyBwYWxsZXRlICovXG4gICAgLS1hc2gtY29sb3I6IGhzbGEoNjgsIDglLCA2MiUsIDEpO1xuICAgIC0tbGljb3ItY29sb3I6IGhzbGEoMjMsIDE2JSwgMTAlLCAxKTtcbiAgICAtLWxpY29yLWNvbG9yLXRyYW5zOiBoc2xhKDIzLCAxNiUsIDEwJSwgMC45KTtcbiAgICAtLWNvZmZlZS1jb2xvcjogaHNsYSgyNSwgMzglLCAzNiUsIDEpO1xuICAgIC0ta2hha2ktY29sb3I6IGhzbGEoMzksIDMxJSwgNjQlLCAxKTtcbiAgICAtLWR5a2UtY29sb3I6IGhzbGEoMjcsIDIyJSwgMjAlLCAwLjUpO1xuICAgIC0td2hpdGUtY29sb3I6ICNGRkZGRkY7XG5cbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1keWtlLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMDBweDtcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHggMCA1MHB4O1xufVxuXG4ubG9nbyB7XG4gICAgb3JkZXI6IDA7XG59XG5cbi5uYXZiYXIge1xuICAgIG9yZGVyOiAxO1xufVxuXG5idXR0b24uYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxubmF2IHVsI2l0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjVweDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5uYXYtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmxpLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbnNwYW4uaG9tZSB7XG4gICAgLS1vZmZzZXQ6IDI7XG4gICAgY29sb3I6ICNmZmNjMDA7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1vZmZzZXQpICogMWNoICsgY2FsYyh2YXIoLS1vZmZzZXQpICogMC4yY2gpKTtcbiAgICBhbmltYXRpb246IGZsaWNrZXIgM3MgbGluZWFyIGluZmluaXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG5cbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAtMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxuICAgICAgICAgICAgMCAwIDJweCxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXG4gICAgICAgICAgICAwIDAgMnB4ICNmZjdlMDAsXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgIG5hdiB1bCNpdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWNvci1jb2xvci10cmFucyk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBuYXYgdWwjaXRlbXMuc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbi5uYXYtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5idXJnZXItYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgbGkuY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIH1cblxuICAgIGJ1dHRvbi5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC9pbmRleC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkRBQWdEO0FBQ3BEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlOztJQUVmLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxzQkFBc0I7O0lBRXRCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCw2REFBNkQ7SUFDN0QscUNBQXFDO0lBQ3JDLE1BQU07SUFDTixVQUFVOztJQUVWLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSTtRQUNJLGFBQWE7UUFDYjs7Ozs7Ozs7OzswQkFVa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsTUFBTTtJQUNWOztJQUVBO1FBQ0ksZUFBZTtRQUNmLE1BQU07UUFDTixPQUFPO1FBQ1AsYUFBYTtRQUNiLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7UUFDVixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLDBDQUEwQztRQUMxQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdW5kYXljb2ZmZWUnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvU3VuZGF5Y29mZmVlLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9RdWVzaGEudHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICAvKiBIU0wgY29sb3JzIHBhbGxldGUgKi9cXG4gICAgLS1hc2gtY29sb3I6IGhzbGEoNjgsIDglLCA2MiUsIDEpO1xcbiAgICAtLWxpY29yLWNvbG9yOiBoc2xhKDIzLCAxNiUsIDEwJSwgMSk7XFxuICAgIC0tbGljb3ItY29sb3ItdHJhbnM6IGhzbGEoMjMsIDE2JSwgMTAlLCAwLjkpO1xcbiAgICAtLWNvZmZlZS1jb2xvcjogaHNsYSgyNSwgMzglLCAzNiUsIDEpO1xcbiAgICAtLWtoYWtpLWNvbG9yOiBoc2xhKDM5LCAzMSUsIDY0JSwgMSk7XFxuICAgIC0tZHlrZS1jb2xvcjogaHNsYSgyNywgMjIlLCAyMCUsIDAuNSk7XFxuICAgIC0td2hpdGUtY29sb3I6ICNGRkZGRkY7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1keWtlLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHggMCA1MHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG9yZGVyOiAwO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgb3JkZXI6IDE7XFxufVxcblxcbmJ1dHRvbi5idXJnZXItYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogNzBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxubmF2IHVsI2l0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ubmF2LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGkuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5zcGFuLmhvbWUge1xcbiAgICAtLW9mZnNldDogMjtcXG4gICAgY29sb3I6ICNmZmNjMDA7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tb2Zmc2V0KSAqIDFjaCArIGNhbGModmFyKC0tb2Zmc2V0KSAqIDAuMmNoKSk7XFxuICAgIGFuaW1hdGlvbjogZmxpY2tlciAzcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG5cXG4gICAgMCUsIDE5LjklLCAyMiUsIDYyLjklLCA2NCUsIDY0LjklLCA3MCUsIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC45OTtcXG4gICAgICAgIHRleHQtc2hhZG93OlxcbiAgICAgICAgICAgIC0xcHggLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgICAgICAxcHggLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgICAgICAtMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgICAgICAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIDAgLTJweCA4cHgsXFxuICAgICAgICAgICAgMCAwIDJweCxcXG4gICAgICAgICAgICAwIDAgNXB4ICNmZjdlMDAsXFxuICAgICAgICAgICAgMCAwIDE1cHggI2ZmNDQ0NCxcXG4gICAgICAgICAgICAwIDAgMnB4ICNmZjdlMDAsXFxuICAgICAgICAgICAgMCAycHggM3B4ICMwMDA7XFxuICAgIH1cXG5cXG4gICAgMjAlLCAyMS45JSwgNjMlLCA2My45JSwgNjUlLCA2OS45JSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcblxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIG9yZGVyOiAwO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVsI2l0ZW1zIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWNvci1jb2xvci10cmFucyk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgbmF2IHVsI2l0ZW1zLnNob3cge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICBcXG4gICAgYnV0dG9uLm5hdi1pdGVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24uYnVyZ2VyLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgbGkuY2xvc2Uge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uLmhpZGRlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ubWVudSB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgd2lkdGg6IDMzdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XG59XG5cbi50aXRsZS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4ubGVmdC1tZW51LCAucmlnaHQtbWVudSB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4ubGVmdC1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5yaWdodC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDcwcHg7XG59XG5cbi5jb2ZmZWUtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNvZmZlZS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmltZy5tdWdzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cbkBrZXlmcmFtZXMgbW92ZXVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFpbi5tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHNlY3Rpb24ubWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC5sZWZ0LW1lbnUge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICBnYXA6IDM1cHg7XG4gICAgfVxuXG4gICAgLnJpZ2h0LW1lbnUge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lbnUvbWVudS1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7Ozs7QUFLQTtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi5tZW51IHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XFxuICAgIHdpZHRoOiAzM3Z3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuNSkgMjBweCAyNXB4IDVweDtcXG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XFxufVxcblxcbi50aXRsZS1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubGVmdC1tZW51LCAucmlnaHQtbWVudSB7XFxuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcXG59XFxuXFxuLmxlZnQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5yaWdodC1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNzBweDtcXG59XFxuXFxuLmNvZmZlZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29mZmVlLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbWcubXVncyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuQGtleWZyYW1lcyBtb3ZldXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIG1haW4ubWVudSB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcblxcbiAgICBzZWN0aW9uLm1lbnUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0LW1lbnUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgICAgIGdhcDogMzVweDtcXG4gICAgfVxcblxcbiAgICAucmlnaHQtbWVudSB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICcuL2Fib3V0LXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dENvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgcGljLmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUtYWJvdXQnKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWFib3V0Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIHN0b3J5JztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3RleHQtYWJvdXQnKTtcbiAgICBwLmlubmVySFRNTCA9ICdXaGF0IHN0YXJ0ZWQgYXMgc2hhcmVkIGhvYmJ5IHNtYWxsIHRhbGssIHRoZSB0ZWFtIGF0IENPQ08gcXVpY2tseSBncmV3IG9ic2Vzc2VkIHBlcmZlY3RpbmcgdGhlIHZhcmlvdXMgd2F5cyB3ZSBicmV3ZWQgY29mZmVlIGFuZCBkZWNpZGVkIHRvIGdvIGFsbCBpbi4gT3ZlciB0aGUgeWVhcnMsIHdl4oCZdmUgZGV2ZWxvcGVkLCBtYXNzIHByb2R1Y2VkIGFuZCBzb2xkIG91ciBvd24gYmxlbmRzIHRvIHNoYXJlIHdpdGggdGhlIHdvcmxkLCBhbmQgdGhhdOKAmXMgaG93IENPQ08gY2FtZSB0byBiZS4gPGJyPjxicj4nO1xuICAgIHAuaW5uZXJIVE1MICs9ICdXaXRoIG1vcmUgdGhhbiAyMDAgc2hvcHMgYWNyb3NzIFVTIGFzIG9mIDIwMjMsIHdl4oCZcmUgY29uc3RhbnRseSB3b3JraW5nIGhhcmQgYW5kIGlubm92YXRpbmcgdG8gYnJpbmcgdGhlIG5leHQgY2hhcHRlciBvZiBDT0NPIHRvIGFsbCBjb2ZmZWUgbG92ZXJzLiBJbiBmYWN0LCB3ZeKAmXJlIGV4Y2l0ZWQgdG8gc2hhcmUgYSBmZXcgbGFyZ2UgZGV2ZWxvcG1lbnRzIGFzIGVhcmx5IGFzIHRoaXMgeWVhciEgPGJyPiA8YnI+JztcbiAgICBwLmlubmVySFRNTCArPSAnVXNpbmcgYWx3YXlzIGZyZXNoLCAxMDAlIG9yZ2FuaWMgaW5ncmVkaWVudHMgc291cmNlZCBmcm9tIHN1c3RhaW5hYmxlIHZlbmRvcnMsIHdlIHN0YW5kIGJlaGluZCBvdXIgY29mZmVlLCBvdXIgaW5ncmVkaWVudHMgYW5kIG91ciB0ZWNobmlxdWUgLSB0aGF04oCZcyBDT0NPLic7XG5cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgncGljLWFib3V0Jyk7XG4gICAgaW1nLnNyYyA9ICcuLi9zcmMvYWJvdXQvb3VyLXN0b3J5LnBuZyc7XG4gICAgaW1nLmFsdCA9ICdQaWN0dXJlIG9mIGEgcGVyc29uIHBvdXJpbmcgY29mZmVlJztcblxuICAgIHRleHQuYXBwZW5kKHRpdGxlLCBwKTtcbiAgICBwaWMuYXBwZW5kKGltZyk7XG4gICAgc2VjdGlvbi5hcHBlbmQodGV4dCwgcGljKTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufSIsImltcG9ydCAnLi9jb250YWN0LXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtY29udGFjdCcpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWNvbnRhY3QnKTtcblxuICAgIGNvbnN0IGhxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHEuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWN0Jyk7XG4gICAgaHEuY2xhc3NMaXN0LmFkZCgnaHEnKTtcbiAgICBjb25zdCBoNV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDVfMS50ZXh0Q29udGVudCA9ICdoZWFkcXVhcnRlcnMnO1xuICAgIHBfMS5pbm5lckhUTUwgPSAnMTEzIE1pY2hpZ2FuIEF2ZW51ZTxicj5DaGljYWdvLCBJTCA2MDY2MSc7XG4gICAgaHEuYXBwZW5kKGg1XzEsIHBfMSk7XG5cbiAgICBjb25zdCBzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFjdCcpO1xuICAgIHNwLmNsYXNzTGlzdC5hZGQoJ3NwJyk7XG4gICAgY29uc3QgaDVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgcF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGg1XzIudGV4dENvbnRlbnQgPSAnc3VwcG9ydCc7XG4gICAgcF8yLmlubmVySFRNTCA9ICdoZWxwQGNhZmUuY29tPGJyPisxIDc3NyAyMjIgMTIzNCc7XG4gICAgc3AuYXBwZW5kKGg1XzIsIHBfMik7XG5cbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljby5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtaWNvbnMnKTtcbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtY29udGFjdCcpO1xuXG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgaWNuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgaWNuMS5hbHQgPSAnRmFjZWJvb2sgaWNvbic7XG4gICAgaWNuMS5zcmMgPSAnLi4vc3JjL2NvbnRhY3QvZmFjZWJvb2suc3ZnJztcbiAgICBpY24xLmhlaWdodCA9ICcyNic7XG5cbiAgICBhMS5hcHBlbmRDaGlsZChpY24xKTtcblxuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGljbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGljbjIuYWx0ID0gJ0luc3RhZ3JhbSBpY29uJztcbiAgICBpY24yLnNyYyA9ICcuLi9zcmMvY29udGFjdC9pbnN0YWdyYW0uc3ZnJztcbiAgICBpY24yLmhlaWdodCA9ICcyNic7XG5cbiAgICBhMi5hcHBlbmRDaGlsZChpY24yKTtcbiAgICBpY28uYXBwZW5kQ2hpbGQoYTEpO1xuICAgIGljby5hcHBlbmRDaGlsZChhMik7XG4gICAgaWNvbnMuYXBwZW5kKGljbyk7XG4gICAgbGVmdC5hcHBlbmQoaHEsIHNwLCBpY29ucyk7XG5cbiAgICAvLyByaWdodCBzaWRlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhY3QnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdMZXRzIGNoYXQuJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZS1kaXYnKTtcbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwxLmZvciA9ICduYW1lJztcbiAgICBsYWJlbDEudGV4dENvbnRlbnQgPSAnbmFtZSdcbiAgICBpbnB1dDEudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDEucGxhY2Vob2xkZXIgPSAnSm9obiBEaWF6JztcbiAgICBpbnB1dDEubmFtZSA9ICduYW1lJztcbiAgICBuYW1lLmFwcGVuZChsYWJlbDEsIGlucHV0MSk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsLWRpdicpO1xuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDIuZm9yID0gJ2VtYWlsJztcbiAgICBsYWJlbDIudGV4dENvbnRlbnQgPSAnZW1haWwnO1xuICAgIGlucHV0Mi50eXBlID0gJ2VtYWlsJztcbiAgICBpbnB1dDIucGxhY2Vob2xkZXIgPSAnam9obkBlbWFpbC5jb20nO1xuICAgIGlucHV0Mi5uYW1lID0gJ2VtYWlsJztcbiAgICBlbWFpbC5hcHBlbmQobGFiZWwyLCBpbnB1dDIpO1xuXG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1kaXYnKTtcbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbGFiZWwzLmZvciA9ICdjb21tZW50JztcbiAgICBsYWJlbDMudGV4dENvbnRlbnQgPSAnY29tbWVudCc7XG4gICAgaW5wdXQzLnBsYWNlaG9sZGVyID0gJ1R5cGUgaGVyZS4uLic7XG4gICAgaW5wdXQzLm5hbWUgPSAnY29tbWVudCc7XG4gICAgY29tbWVudC5hcHBlbmQobGFiZWwzLCBpbnB1dDMpO1xuXG4gICAgZm9ybS5hcHBlbmQobmFtZSwgZW1haWwsIGNvbW1lbnQpO1xuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1mb3JtJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICByaWdodC5hcHBlbmQodGl0bGUsIGZvcm0sIGJ0bik7XG4gICAgc2VjdGlvbi5hcHBlbmQobGVmdCwgcmlnaHQpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0ICcuL2hvbWUtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1haW5Db250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbW9rZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtaG9tZScpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWhvbWUnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlcicpO1xuICAgIHNtb2tlLmNsYXNzTGlzdC5hZGQoJ3Ntb2tlJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtdWcnKTtcblxuICAgIGgxLnRleHRDb250ZW50ID0gJ0JyZXdlZCB0byBwZXJmZWN0aW9uLic7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnRXZlcnkgdGltZS4nO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBub3cnO1xuICAgIGltYWdlLnNyYyA9ICcuLi9zcmMvaG9tZS9tdWcucG5nJztcblxuICAgIGhlYWRlci5hcHBlbmQoaDEsIGgyKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBsZWZ0LmFwcGVuZChoZWFkZXIsIGJ1dHRvbik7XG4gICAgcmlnaHQuYXBwZW5kKHNtb2tlLCBpbWFnZSk7XG4gICAgbWFpbi5hcHBlbmQobGVmdCwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIG1haW47IFxufSIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vaW5kZXgtc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkTWFpbkNvbnRlbnQgZnJvbSAnLi4vaG9tZS9ob21lLWxvYWQuanMnO1xuaW1wb3J0IGxvYWRNZW51Q29udGVudCBmcm9tICcuLi9tZW51L21lbnUtbG9hZC5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3RDb250ZW50IGZyb20gJy4uL2NvbnRhY3QvY29udGFjdC1sb2FkLmpzJztcbmltcG9ydCBsb2FkQWJvdXRDb250ZW50IGZyb20gJy4uL2Fib3V0L2Fib3V0LWxvYWQuanMnO1xuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobG9hZE1haW5Db250ZW50KCkpO1xuXG5jb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLWJ1dHRvblwiKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zXCIpO1xuXG5jb25zdCB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59O1xuXG5uYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lJywgJ21lbnUnLCAnYWJvdXQnLCAnY29udGFjdCcpO1xuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzEnKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZE1haW5Db250ZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzInKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZChsb2FkTWVudUNvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnMycpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZChsb2FkQWJvdXRDb250ZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzQnKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZChsb2FkQ29udGFjdENvbnRlbnQoKSk7XG4gICAgICAgIH07XG4gICAgfSlcbn0pXG5cbmJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOYXZiYXIoKTtcbn0pO1xuXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOYXZiYXIoKTtcbn0pO1xuXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICB0b2dnbGVOYXZiYXIoKTtcbiAgICB9XG59KTsiLCJpbXBvcnQgJy4vbWVudS1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1lbnUnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodC1tZW51Jyk7XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gW1xuICAgICAgICAnTW9jaGEnLFxuICAgICAgICAnTGF0dGUnLFxuICAgICAgICAnQ2FwcHVjY2lubycsXG4gICAgICAgICdBbWVyaWNhbm8nXG4gICAgXVxuXG4gICAgY29uc3QgcHJpY2VBcnJheSA9IFsnJDknLCAnJDgnLCAnJDgnLCAnJDcnXTtcblxuICAgIGNvbnN0IGRlc2NBcnJheSA9IFtcbiAgICAgICAgJ0JyZXdlZCBmb3IgY296eSBhdG1vc3BoZXJlcywgb3VyIGhlYXJ0eSBhbmQgcnVzdGljIGJsZW5kIGlzIHJlbWluaXNjZW50IG9mIGEgY2FiaW4gZmlyZXBsYWNlLicsXG4gICAgICAgICdDcmFmdGVkIHdpdGggcHJlY2lzaW9uIHVzaW5nIGEgYmFsYW5jZWQgYmxlbmQgb2YgY29mZmVlIGFuZCBtaWxrLCBhIGZlYXN0IGZvciB0aGUgc2Vuc2VzLicsXG4gICAgICAgICdQZXJmZWN0IGJhbGFuY2Ugb2YgZXNwcmVzc28sIG1pbGsgYW5kIGEgY2lubmFtb24gdHdpc3QsIGp1c3QgZW5vdWdoIHRvIHdha2UgdGhlIHRhc3RlIGJ1ZHMuJyxcbiAgICAgICAgJ1NvcGhpc3RpY2F0ZWQgdGFrZSBvbiBhIGNsYXNzaWMgY29mZmVlIGV4cGVyaWVuY2UsIG1hZGUgd2l0aCB0aGUgZmluZXN0IDEwMCUgb3JnYW5pYyBiZWFucy4nXG4gICAgXVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS1pbmZvJyk7XG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS10aXRsZScpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdtdWdzJyk7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2ldO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IHByaWNlQXJyYXlbaV07XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBkZXNjQXJyYXlbaV07XG4gICAgICAgIGltYWdlLnNyYyA9IGAuLi9zcmMvbWVudS9jb2ZmZS1tdWdzICgke2kgKyAxfSkucG5nYDtcblxuICAgICAgICB0aXRsZURpdi5hcHBlbmQodGl0bGUsIHByaWNlKTtcbiAgICAgICAgaW5mb0Rpdi5hcHBlbmQodGl0bGVEaXYsIGRlc2MpO1xuICAgICAgICByaWdodC5hcHBlbmQoaW5mb0Rpdik7XG4gICAgICAgIGxlZnQuYXBwZW5kKGltYWdlKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQobGVmdCwgcmlnaHQpO1xuICAgIH1cblxuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9