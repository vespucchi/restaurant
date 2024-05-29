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

body.appendChild((0,_contact_contact_load_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUss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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8s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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLGNBQWMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFB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Ozs7Ozs7O0FDckN1QjtBQUNJO0FBQ3dCO0FBQ0E7QUFDUztBQUNOOzs7QUFHdEQ7O0FBRUEsaUJBQWlCLG9FQUFrQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLDhEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw4REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0VBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvRUFBa0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbkV5Qjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC9hYm91dC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC9hYm91dC1zdHlsZS5jc3M/YjU1NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1zdHlsZS5jc3M/ZDg5ZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUvaG9tZS1zdHlsZS5jc3M/YWNhNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzcz9mYWI1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS9tZW51LXN0eWxlLmNzcz8wNDRmIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQvYWJvdXQtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmFib3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24uYWJvdXQge1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xuICAgIHdpZHRoOiAzM3Z3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuaDIudGl0bGUtYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waWN0dXJlLWFib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW1nLnBpYy1hYm91dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYWluLmFib3V0IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICBzZWN0aW9uLmFib3V0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICB9XG5cbiAgICBoMi50aXRsZS1hYm91dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICBwLnRleHQtYWJvdXQge1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYWJvdXQvYWJvdXQtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztRQUNyQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi5hYm91dCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICB3aWR0aDogMzN2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oMi50aXRsZS1hYm91dCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGljdHVyZS1hYm91dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbWcucGljLWFib3V0IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZldXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIG1haW4uYWJvdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICAgIFxcbiAgICBzZWN0aW9uLmFib3V0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGgyLnRpdGxlLWFib3V0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICBwLnRleHQtYWJvdXQge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbnNlY3Rpb24uY29udGFjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmxlZnQtY29udGFjdCwgLnJpZ2h0LWNvbnRhY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKVxufVxuXG4ubGVmdC1jb250YWN0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgbGVmdHNsaWRlO1xufVxuXG4ucmlnaHQtY29udGFjdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIHJpZ2h0c2xpZGU7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5uYW1lLWRpdiwgLmVtYWlsLWRpdiwgLmNvbW1lbnQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5idXR0b24uc3VibWl0LWZvcm0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmJ1dHRvbi5zdWJtaXQtZm9ybTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc29jaWFsLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgc2NhbGUoMC45KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTUlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4uY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHNlY3Rpb24uY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmxlZnQtY29udGFjdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiaW5mbzEgc29jaWFsXCJcbiAgICAgICAgICAgIFwiaW5mbzIgc29jaWFsXCI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAuaHEge1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMTtcbiAgICB9XG5cbiAgICAuc29jaWFsLWNvbnRhY3Qge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgZ3JpZC1hcmVhOiBzb2NpYWw7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuc3Age1xuICAgICAgICBvcmRlcjogMjtcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMjtcbiAgICB9XG5cbiAgICAubGVmdC1jb250YWN0IGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC5yaWdodC1jb250YWN0IHtcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbFxuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhLCBmb3JtIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5zdWJtaXQtZm9ybSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDRFQUE0RTtJQUM1RSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0I7OzBCQUVrQjtRQUNsQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFFBQVE7UUFDUixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnNlY3Rpb24uY29udGFjdCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxlZnQtY29udGFjdCwgLnJpZ2h0LWNvbnRhY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcXG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpXFxufVxcblxcbi5sZWZ0LWNvbnRhY3Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIGxlZnRzbGlkZTtcXG59XFxuXFxuLnJpZ2h0LWNvbnRhY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIHJpZ2h0c2xpZGU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYW1lLWRpdiwgLmVtYWlsLWRpdiwgLmNvbW1lbnQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5idXR0b24uc3VibWl0LWZvcm0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZm9ybTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zb2NpYWwtY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxlZnRzbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByaWdodHNsaWRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCsxNSUpIHNjYWxlKDAuOSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgbWFpbi5jb250YWN0IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb24uY29udGFjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtY29udGFjdCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAyNSU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaW5mbzEgc29jaWFsXFxcIlxcbiAgICAgICAgICAgIFxcXCJpbmZvMiBzb2NpYWxcXFwiO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ocSB7XFxuICAgICAgICBvcmRlcjogMDtcXG4gICAgICAgIGdyaWQtYXJlYTogaW5mbzE7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbC1jb250YWN0IHtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzb2NpYWw7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbC1pY29ucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5zcCB7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgICAgIGdyaWQtYXJlYTogaW5mbzI7XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtY29udGFjdCBoNSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodC1jb250YWN0IHtcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGxcXG4gICAgfVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQsIGZvcm0gdGV4dGFyZWEsIGZvcm0gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24uc3VibWl0LWZvcm0ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbi5ob21lIHtcbiAgICBoZWlnaHQ6IDc1dnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQtaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLWluLW91dCAwcyAxIHNpbW1lcjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0td2hpdGUtY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgMTAwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuYnV0dG9uI29yZGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tbGljb3ItY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgNTElLCB2YXIoLS1jb2ZmZWUtY29sb3IpIDEwMCUpO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xufVxuXG5idXR0b24jb3JkZXI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xufVxuXG4ucmlnaHQtaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW1nI211ZyB7XG4gICAgd2lkdGg6IDY3MnB4O1xuICAgIGFuaW1hdGlvbjogZ3Jvd3NsaWRlIC41cztcbn1cblxuXG5Aa2V5ZnJhbWVzIHNpbW1lciB7XG4gICAgMCUge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyb3dzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYWluLmhvbWUge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG4gICAgfVxuXG4gICAgLmxlZnQtaG9tZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBidXR0b24jb3JkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0td2hpdGUtY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgMTAwJSk7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG5cbiAgICAucmlnaHQtaG9tZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUvaG9tZS1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxRkFBcUY7SUFDckYsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixvSEFBb0g7SUFDcEgsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLGlDQUFpQztJQUNyQztBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixxRkFBcUY7UUFDckYsNkJBQTZCO1FBQzdCLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5ob21lIHtcXG4gICAgaGVpZ2h0OiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLWluLW91dCAwcyAxIHNpbW1lcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0td2hpdGUtY29sb3IpIDAlLCB2YXIoLS1raGFraS1jb2xvcikgMTAwJSk7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMC41O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG5cXG5idXR0b24jb3JkZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1saWNvci1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSA1MSUsIHZhcigtLWNvZmZlZS1jb2xvcikgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xcbn1cXG5cXG5idXR0b24jb3JkZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmltZyNtdWcge1xcbiAgICB3aWR0aDogNjcycHg7XFxuICAgIGFuaW1hdGlvbjogZ3Jvd3NsaWRlIC41cztcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBzaW1tZXIge1xcbiAgICAwJSB7XFxuICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBncm93c2xpZGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgwKTtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgbWFpbi5ob21lIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMjBweDtcXG4gICAgfVxcblxcbiAgICAubGVmdC1ob21lIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBidXR0b24jb3JkZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDdyZW07XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodC1ob21lIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TdW5kYXljb2ZmZWUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUXVlc2hhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTdW5kYXljb2ZmZWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuOnJvb3Qge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIC8qIEhTTCBjb2xvcnMgcGFsbGV0ZSAqL1xuICAgIC0tYXNoLWNvbG9yOiBoc2xhKDY4LCA4JSwgNjIlLCAxKTtcbiAgICAtLWxpY29yLWNvbG9yOiBoc2xhKDIzLCAxNiUsIDEwJSwgMSk7XG4gICAgLS1saWNvci1jb2xvci10cmFuczogaHNsYSgyMywgMTYlLCAxMCUsIDAuOSk7XG4gICAgLS1jb2ZmZWUtY29sb3I6IGhzbGEoMjUsIDM4JSwgMzYlLCAxKTtcbiAgICAtLWtoYWtpLWNvbG9yOiBoc2xhKDM5LCAzMSUsIDY0JSwgMSk7XG4gICAgLS1keWtlLWNvbG9yOiBoc2xhKDI3LCAyMiUsIDIwJSwgMC41KTtcbiAgICAtLXdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHlrZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTAwcHg7XG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbn1cblxuLmxvZ28ge1xuICAgIG9yZGVyOiAwO1xufVxuXG4ubmF2YmFyIHtcbiAgICBvcmRlcjogMTtcbn1cblxuYnV0dG9uLmJ1cmdlci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbm5hdiB1bCNpdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ubmF2LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5saS5jbG9zZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5zcGFuLmhvbWUge1xuICAgIC0tb2Zmc2V0OiAyO1xuICAgIGNvbG9yOiAjZmZjYzAwO1xuICAgIGxlZnQ6IGNhbGModmFyKC0tb2Zmc2V0KSAqIDFjaCArIGNhbGModmFyKC0tb2Zmc2V0KSAqIDAuMmNoKSk7XG4gICAgYW5pbWF0aW9uOiBmbGlja2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcblxuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xuXG4gICAgMCUsIDE5LjklLCAyMiUsIDYyLjklLCA2NCUsIDY0LjklLCA3MCUsIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwLjk5O1xuICAgICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgICAgICAgIC0xcHggLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgICAgIDFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgLTFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgMCAtMnB4IDhweCxcbiAgICAgICAgICAgIDAgMCAycHgsXG4gICAgICAgICAgICAwIDAgNXB4ICNmZjdlMDAsXG4gICAgICAgICAgICAwIDAgMTVweCAjZmY0NDQ0LFxuICAgICAgICAgICAgMCAwIDJweCAjZmY3ZTAwLFxuICAgICAgICAgICAgMCAycHggM3B4ICMwMDA7XG4gICAgfVxuXG4gICAgMjAlLCAyMS45JSwgNjMlLCA2My45JSwgNjUlLCA2OS45JSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIDpyb290IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICB9XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgZ2FwOiAwO1xuICAgIH1cblxuICAgIC5uYXZiYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICBuYXYgdWwjaXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGljb3ItY29sb3ItdHJhbnMpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgbmF2IHVsI2l0ZW1zLnNob3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBcbiAgICBidXR0b24ubmF2LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICBidXR0b24uYnVyZ2VyLWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIGxpLmNsb3NlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG5cbiAgICBidXR0b24uaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXgvaW5kZXgtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2REFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkRBQWdEO0FBQ3BEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTs7SUFFZix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsc0JBQXNCOztJQUV0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBeUM7SUFDekMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELHFDQUFxQztJQUNyQyxNQUFNO0lBQ04sVUFBVTs7SUFFVixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2I7Ozs7Ozs7Ozs7MEJBVWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtBQUNKOzs7QUFHQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLE1BQU07SUFDVjs7SUFFQTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztRQUNQLGFBQWE7UUFDYixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixVQUFVO1FBQ1YsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixRQUFRO0lBQ1o7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QiwwQ0FBMEM7UUFDMUMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3VuZGF5Y29mZmVlJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1N1bmRheWNvZmZlZS50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUXVlc2hhLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8udHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLyogSFNMIGNvbG9ycyBwYWxsZXRlICovXFxuICAgIC0tYXNoLWNvbG9yOiBoc2xhKDY4LCA4JSwgNjIlLCAxKTtcXG4gICAgLS1saWNvci1jb2xvcjogaHNsYSgyMywgMTYlLCAxMCUsIDEpO1xcbiAgICAtLWxpY29yLWNvbG9yLXRyYW5zOiBoc2xhKDIzLCAxNiUsIDEwJSwgMC45KTtcXG4gICAgLS1jb2ZmZWUtY29sb3I6IGhzbGEoMjUsIDM4JSwgMzYlLCAxKTtcXG4gICAgLS1raGFraS1jb2xvcjogaHNsYSgzOSwgMzElLCA2NCUsIDEpO1xcbiAgICAtLWR5a2UtY29sb3I6IGhzbGEoMjcsIDIyJSwgMjAlLCAwLjUpO1xcbiAgICAtLXdoaXRlLWNvbG9yOiAjRkZGRkZGO1xcblxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHlrZS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBvcmRlcjogMDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIG9yZGVyOiAxO1xcbn1cXG5cXG5idXR0b24uYnVyZ2VyLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbm5hdiB1bCNpdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLm5hdi1pdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxpLmNsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuc3Bhbi5ob21lIHtcXG4gICAgLS1vZmZzZXQ6IDI7XFxuICAgIGNvbG9yOiAjZmZjYzAwO1xcbiAgICBsZWZ0OiBjYWxjKHZhcigtLW9mZnNldCkgKiAxY2ggKyBjYWxjKHZhcigtLW9mZnNldCkgKiAwLjJjaCkpO1xcbiAgICBhbmltYXRpb246IGZsaWNrZXIgM3MgbGluZWFyIGluZmluaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbmEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuXFxuICAgIDAlLCAxOS45JSwgMjIlLCA2Mi45JSwgNjQlLCA2NC45JSwgNzAlLCAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XFxuICAgICAgICB0ZXh0LXNoYWRvdzpcXG4gICAgICAgICAgICAtMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgLTFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxcbiAgICAgICAgICAgIDAgMCAycHgsXFxuICAgICAgICAgICAgMCAwIDVweCAjZmY3ZTAwLFxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXFxuICAgICAgICAgICAgMCAwIDJweCAjZmY3ZTAwLFxcbiAgICAgICAgICAgIDAgMnB4IDNweCAjMDAwO1xcbiAgICB9XFxuXFxuICAgIDIwJSwgMjEuOSUsIDYzJSwgNjMuOSUsIDY1JSwgNjkuOSUge1xcbiAgICAgICAgb3BhY2l0eTogMC40O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgICAgICBmb250LXNpemU6IDhweDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICBvcmRlcjogMDtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bCNpdGVtcyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGljb3ItY29sb3ItdHJhbnMpO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIG5hdiB1bCNpdGVtcy5zaG93IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgXFxuICAgIGJ1dHRvbi5uYXYtaXRlbSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uLmJ1cmdlci1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIGxpLmNsb3NlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5oaWRkZW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWN0aW9uLm1lbnUge1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xuICAgIHdpZHRoOiAzM3Z3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDJweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC41KSAyMHB4IDI1cHggNXB4O1xuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xufVxuXG4udGl0bGUtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmxlZnQtbWVudSwgLnJpZ2h0LW1lbnUge1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbn1cblxuLmxlZnQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ucmlnaHQtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA3MHB4O1xufVxuXG4uY29mZmVlLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5jb2ZmZWUtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbWcubXVncyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5cblxuXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4ubWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBzZWN0aW9uLm1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAubGVmdC1tZW51IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgZ2FwOiAzNXB4O1xuICAgIH1cblxuICAgIC5yaWdodC1tZW51IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51L21lbnUtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7O0FBS0E7SUFDSTtRQUNJLHFDQUFxQztRQUNyQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlY3Rpb24ubWVudSB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICB3aWR0aDogMzN2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbn1cXG5cXG4udGl0bGUtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLmxlZnQtbWVudSwgLnJpZ2h0LW1lbnUge1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxufVxcblxcbi5sZWZ0LW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraS1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHQtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDcwcHg7XFxufVxcblxcbi5jb2ZmZWUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvZmZlZS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW1nLm11Z3Mge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcblxcblxcblxcbkBrZXlmcmFtZXMgbW92ZXVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSkgc2NhbGUoMC45KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYWluLm1lbnUge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG5cXG4gICAgc2VjdGlvbi5tZW51IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICAubGVmdC1tZW51IHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgICAgICBnYXA6IDM1cHg7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0LW1lbnUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Qtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9hYm91dC1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXRDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIHBpYy5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlLWFib3V0Jyk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hYm91dCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ091ciBzdG9yeSc7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWFib3V0Jyk7XG4gICAgcC5pbm5lckhUTUwgPSAnV2hhdCBzdGFydGVkIGFzIHNoYXJlZCBob2JieSBzbWFsbCB0YWxrLCB0aGUgdGVhbSBhdCBDT0NPIHF1aWNrbHkgZ3JldyBvYnNlc3NlZCBwZXJmZWN0aW5nIHRoZSB2YXJpb3VzIHdheXMgd2UgYnJld2VkIGNvZmZlZSBhbmQgZGVjaWRlZCB0byBnbyBhbGwgaW4uIE92ZXIgdGhlIHllYXJzLCB3ZeKAmXZlIGRldmVsb3BlZCwgbWFzcyBwcm9kdWNlZCBhbmQgc29sZCBvdXIgb3duIGJsZW5kcyB0byBzaGFyZSB3aXRoIHRoZSB3b3JsZCwgYW5kIHRoYXTigJlzIGhvdyBDT0NPIGNhbWUgdG8gYmUuIDxicj48YnI+JztcbiAgICBwLmlubmVySFRNTCArPSAnV2l0aCBtb3JlIHRoYW4gMjAwIHNob3BzIGFjcm9zcyBVUyBhcyBvZiAyMDIzLCB3ZeKAmXJlIGNvbnN0YW50bHkgd29ya2luZyBoYXJkIGFuZCBpbm5vdmF0aW5nIHRvIGJyaW5nIHRoZSBuZXh0IGNoYXB0ZXIgb2YgQ09DTyB0byBhbGwgY29mZmVlIGxvdmVycy4gSW4gZmFjdCwgd2XigJlyZSBleGNpdGVkIHRvIHNoYXJlIGEgZmV3IGxhcmdlIGRldmVsb3BtZW50cyBhcyBlYXJseSBhcyB0aGlzIHllYXIhIDxicj4gPGJyPic7XG4gICAgcC5pbm5lckhUTUwgKz0gJ1VzaW5nIGFsd2F5cyBmcmVzaCwgMTAwJSBvcmdhbmljIGluZ3JlZGllbnRzIHNvdXJjZWQgZnJvbSBzdXN0YWluYWJsZSB2ZW5kb3JzLCB3ZSBzdGFuZCBiZWhpbmQgb3VyIGNvZmZlZSwgb3VyIGluZ3JlZGllbnRzIGFuZCBvdXIgdGVjaG5pcXVlIC0gdGhhdOKAmXMgQ09DTy4nO1xuXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3BpYy1hYm91dCcpO1xuICAgIGltZy5zcmMgPSAnLi4vc3JjL2Fib3V0L291ci1zdG9yeS5wbmcnO1xuICAgIGltZy5hbHQgPSAnUGljdHVyZSBvZiBhIHBlcnNvbiBwb3VyaW5nIGNvZmZlZSc7XG5cbiAgICB0ZXh0LmFwcGVuZCh0aXRsZSwgcCk7XG4gICAgcGljLmFwcGVuZChpbWcpO1xuICAgIHNlY3Rpb24uYXBwZW5kKHRleHQsIHBpYyk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgJy4vY29udGFjdC1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdENvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWNvbnRhY3QnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodC1jb250YWN0Jyk7XG5cbiAgICBjb25zdCBocSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhxLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFjdCcpO1xuICAgIGhxLmNsYXNzTGlzdC5hZGQoJ2hxJyk7XG4gICAgY29uc3QgaDVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgcF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGg1XzEudGV4dENvbnRlbnQgPSAnaGVhZHF1YXJ0ZXJzJztcbiAgICBwXzEuaW5uZXJIVE1MID0gJzExMyBNaWNoaWdhbiBBdmVudWU8YnI+Q2hpY2FnbywgSUwgNjA2NjEnO1xuICAgIGhxLmFwcGVuZChoNV8xLCBwXzEpO1xuXG4gICAgY29uc3Qgc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcC5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhY3QnKTtcbiAgICBzcC5jbGFzc0xpc3QuYWRkKCdzcCcpO1xuICAgIGNvbnN0IGg1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHBfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoNV8yLnRleHRDb250ZW50ID0gJ3N1cHBvcnQnO1xuICAgIHBfMi5pbm5lckhUTUwgPSAnaGVscEBjYWZlLmNvbTxicj4rMSA3NzcgMjIyIDEyMzQnO1xuICAgIHNwLmFwcGVuZChoNV8yLCBwXzIpO1xuXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY28uY2xhc3NMaXN0LmFkZCgnc29jaWFsLWljb25zJyk7XG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZCgnc29jaWFsLWNvbnRhY3QnKTtcblxuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGljbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGljbjEuYWx0ID0gJ0ZhY2Vib29rIGljb24nO1xuICAgIGljbjEuc3JjID0gJy4uL3NyYy9jb250YWN0L2ZhY2Vib29rLnN2Zyc7XG4gICAgaWNuMS5oZWlnaHQgPSAnMjYnO1xuXG4gICAgYTEuYXBwZW5kQ2hpbGQoaWNuMSk7XG5cbiAgICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpY24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpY24yLmFsdCA9ICdJbnN0YWdyYW0gaWNvbic7XG4gICAgaWNuMi5zcmMgPSAnLi4vc3JjL2NvbnRhY3QvaW5zdGFncmFtLnN2Zyc7XG4gICAgaWNuMi5oZWlnaHQgPSAnMjYnO1xuXG4gICAgYTIuYXBwZW5kQ2hpbGQoaWNuMik7XG4gICAgaWNvLmFwcGVuZENoaWxkKGExKTtcbiAgICBpY28uYXBwZW5kQ2hpbGQoYTIpO1xuICAgIGljb25zLmFwcGVuZChpY28pO1xuICAgIGxlZnQuYXBwZW5kKGhxLCBzcCwgaWNvbnMpO1xuXG4gICAgLy8gcmlnaHQgc2lkZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1jb250YWN0Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTGV0cyBjaGF0Lic7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUtZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMS5mb3IgPSAnbmFtZSc7XG4gICAgbGFiZWwxLnRleHRDb250ZW50ID0gJ25hbWUnXG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLnBsYWNlaG9sZGVyID0gJ0pvaG4gRGlheic7XG4gICAgaW5wdXQxLm5hbWUgPSAnbmFtZSc7XG4gICAgbmFtZS5hcHBlbmQobGFiZWwxLCBpbnB1dDEpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbC1kaXYnKTtcbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwyLmZvciA9ICdlbWFpbCc7XG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gJ2VtYWlsJztcbiAgICBpbnB1dDIudHlwZSA9ICdlbWFpbCc7XG4gICAgaW5wdXQyLnBsYWNlaG9sZGVyID0gJ2pvaG5AZW1haWwuY29tJztcbiAgICBpbnB1dDIubmFtZSA9ICdlbWFpbCc7XG4gICAgZW1haWwuYXBwZW5kKGxhYmVsMiwgaW5wdXQyKTtcblxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGxhYmVsMy5mb3IgPSAnY29tbWVudCc7XG4gICAgbGFiZWwzLnRleHRDb250ZW50ID0gJ2NvbW1lbnQnO1xuICAgIGlucHV0My5wbGFjZWhvbGRlciA9ICdUeXBlIGhlcmUuLi4nO1xuICAgIGlucHV0My5uYW1lID0gJ2NvbW1lbnQnO1xuICAgIGNvbW1lbnQuYXBwZW5kKGxhYmVsMywgaW5wdXQzKTtcblxuICAgIGZvcm0uYXBwZW5kKG5hbWUsIGVtYWlsLCBjb21tZW50KTtcblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtZm9ybScpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgcmlnaHQuYXBwZW5kKHRpdGxlLCBmb3JtLCBidG4pO1xuICAgIHNlY3Rpb24uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufSIsImltcG9ydCAnLi9ob21lLXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWhvbWUnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodC1ob21lJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXInKTtcbiAgICBzbW9rZS5jbGFzc0xpc3QuYWRkKCdzbW9rZScpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXVnJyk7XG5cbiAgICBoMS50ZXh0Q29udGVudCA9ICdCcmV3ZWQgdG8gcGVyZmVjdGlvbi4nO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0V2ZXJ5IHRpbWUuJztcbiAgICBidG4udGV4dENvbnRlbnQgPSAnT3JkZXIgbm93JztcbiAgICBpbWFnZS5zcmMgPSAnLi4vc3JjL2hvbWUvbXVnLnBuZyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGgxLCBoMik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgbGVmdC5hcHBlbmQoaGVhZGVyLCBidXR0b24pO1xuICAgIHJpZ2h0LmFwcGVuZChzbW9rZSwgaW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcblxuICAgIHJldHVybiBtYWluOyBcbn0iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LXN0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZE1haW5Db250ZW50IGZyb20gJy4uL2hvbWUvaG9tZS1sb2FkLmpzJztcbmltcG9ydCBsb2FkTWVudUNvbnRlbnQgZnJvbSAnLi4vbWVudS9tZW51LWxvYWQuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0Q29udGVudCBmcm9tICcuLi9jb250YWN0L2NvbnRhY3QtbG9hZC5qcyc7XG5pbXBvcnQgbG9hZEFib3V0Q29udGVudCBmcm9tICcuLi9hYm91dC9hYm91dC1sb2FkLmpzJztcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGxvYWRDb250YWN0Q29udGVudCgpKTtcblxuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1idXR0b25cIik7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc1wiKTtcblxuY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufTtcblxubmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScsICdtZW51JywgJ2Fib3V0JywgJ2NvbnRhY3QnKTtcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGlmIChpdGVtLmRhdGFzZXQuaW5kZXggPT09ICcxJykge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRNYWluQ29udGVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmRhdGFzZXQuaW5kZXggPT09ICcyJykge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKTtcblxuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZE1lbnVDb250ZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uZGF0YXNldC5pbmRleCA9PT0gJzMnKSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKTtcblxuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZEFib3V0Q29udGVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmRhdGFzZXQuaW5kZXggPT09ICc0Jykge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKTtcblxuICAgICAgICAgICAgYm9keS5hcHBlbmQobG9hZENvbnRhY3RDb250ZW50KCkpO1xuICAgICAgICB9O1xuICAgIH0pXG59KVxuXG5idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTmF2YmFyKCk7XG59KTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTmF2YmFyKCk7XG59KTtcblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgdG9nZ2xlTmF2YmFyKCk7XG4gICAgfVxufSk7IiwiaW1wb3J0ICcuL21lbnUtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1tZW51Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQtbWVudScpO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFtcbiAgICAgICAgJ01vY2hhJyxcbiAgICAgICAgJ0xhdHRlJyxcbiAgICAgICAgJ0NhcHB1Y2Npbm8nLFxuICAgICAgICAnQW1lcmljYW5vJ1xuICAgIF1cblxuICAgIGNvbnN0IHByaWNlQXJyYXkgPSBbJyQ5JywgJyQ4JywgJyQ4JywgJyQ3J107XG5cbiAgICBjb25zdCBkZXNjQXJyYXkgPSBbXG4gICAgICAgICdCcmV3ZWQgZm9yIGNvenkgYXRtb3NwaGVyZXMsIG91ciBoZWFydHkgYW5kIHJ1c3RpYyBibGVuZCBpcyByZW1pbmlzY2VudCBvZiBhIGNhYmluIGZpcmVwbGFjZS4nLFxuICAgICAgICAnQ3JhZnRlZCB3aXRoIHByZWNpc2lvbiB1c2luZyBhIGJhbGFuY2VkIGJsZW5kIG9mIGNvZmZlZSBhbmQgbWlsaywgYSBmZWFzdCBmb3IgdGhlIHNlbnNlcy4nLFxuICAgICAgICAnUGVyZmVjdCBiYWxhbmNlIG9mIGVzcHJlc3NvLCBtaWxrIGFuZCBhIGNpbm5hbW9uIHR3aXN0LCBqdXN0IGVub3VnaCB0byB3YWtlIHRoZSB0YXN0ZSBidWRzLicsXG4gICAgICAgICdTb3BoaXN0aWNhdGVkIHRha2Ugb24gYSBjbGFzc2ljIGNvZmZlZSBleHBlcmllbmNlLCBtYWRlIHdpdGggdGhlIGZpbmVzdCAxMDAlIG9yZ2FuaWMgYmVhbnMuJ1xuICAgIF1cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtaW5mbycpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtdGl0bGUnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbXVncycpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpXTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZUFycmF5W2ldO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gZGVzY0FycmF5W2ldO1xuICAgICAgICBpbWFnZS5zcmMgPSBgLi4vc3JjL21lbnUvY29mZmUtbXVncyAoJHtpICsgMX0pLnBuZ2A7XG5cbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlLCBwcmljZSk7XG4gICAgICAgIGluZm9EaXYuYXBwZW5kKHRpdGxlRGl2LCBkZXNjKTtcbiAgICAgICAgcmlnaHQuYXBwZW5kKGluZm9EaXYpO1xuICAgICAgICBsZWZ0LmFwcGVuZChpbWFnZSk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==