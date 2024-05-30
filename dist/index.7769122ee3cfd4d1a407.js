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
    margin-left: 30px;
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
    color: var(--white-color);
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
}`, "",{"version":3,"sources":["webpack://./src/home/home-style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,oHAAoH;IACpH,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,4EAA4E;AAChF;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;;AAGA;IACI;QACI,iBAAiB;QACjB,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,sCAAsC;IAC1C;;IAEA;QACI,iCAAiC;IACrC;AACJ;;;AAGA;IACI;QACI,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,mBAAmB;QACnB,qFAAqF;QACrF,6BAA6B;QAC7B,oCAAoC;IACxC;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["main.home {\n    height: 75vw;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    margin-left: 30px;\n}\n\n.left-home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    animation: .3s ease-in-out 0s 1 simmer;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: 2px;\n    color: var(--white-color);\n}\n\nh2 {\n    font-size: 3rem;\n    line-height: 0.5;\n    letter-spacing: 5px;\n}\n\nbutton#order {\n    margin-top: auto;\n    background-size: 200% auto;\n    background-image: linear-gradient(to right, var(--licor-color) 0%, var(--khaki-color) 51%, var(--coffee-color) 100%);\n    padding: 15px 25px;\n    border-radius: var(--border-radius);\n    border: 2px solid var(--white-color);\n    font-size: 1.25rem;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    box-shadow: rgba(0, 0, 0, .25) 0px 14px 28px, rgba(0, 0, 0, .22) 0px 5px 5px;\n}\n\nbutton#order:hover {\n    transform: scale(1.05);\n    background-position: right center;\n}\n\n.right-home {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding-bottom: 150px;\n    height: 100%;\n}\n\nimg#mug {\n    width: 672px;\n    animation: growslide .5s;\n}\n\n\n@keyframes simmer {\n    0% {\n        filter: blur(3px);\n        transform: scale(0.95);\n    }\n\n    100% {\n        filter: blur(0px);\n        transform: scale(1);\n    }\n}\n\n@keyframes growslide {\n    0% {\n        transform: scale(0.9) translateX(100%);\n    }\n\n    100% {\n        transform: scale(1) translateX(0);\n    }\n}\n\n\n@media (max-width: 600px) {\n    main.home {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        padding: 0 0 0 20px;\n    }\n\n    .left-home {\n        height: 100%;\n    }\n\n    button#order {\n        margin-top: auto;\n        font-size: 2rem;\n    }\n\n    h1 {\n        font-size: 7rem;\n        letter-spacing: 2px;\n        background: linear-gradient(to right, var(--white-color) 0%, var(--khaki-color) 100%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n\n    h2 {\n        font-size: 3rem;\n        line-height: 0.5;\n        letter-spacing: 5px;\n        text-align: end;\n    }\n\n    .right-home {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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
    * {
        overflow-y: scroll;
    }

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
}`, "",{"version":3,"sources":["webpack://./src/index/index-style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,6DAAsD;AAC1D;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,qBAAqB;IACrB,6DAAgD;AACpD;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;;IAEf,uBAAuB;IACvB,iCAAiC;IACjC,oCAAoC;IACpC,4CAA4C;IAC5C,qCAAqC;IACrC,oCAAoC;IACpC,qCAAqC;IACrC,sBAAsB;;IAEtB,qBAAqB;AACzB;;AAEA;IACI,yDAAyC;IACzC,mCAAmC;IACnC,+BAA+B;IAC/B,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,WAAW;IACX,cAAc;IACd,6DAA6D;IAC7D,qCAAqC;IACrC,MAAM;IACN,UAAU;;IAEV,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI;QACI,aAAa;QACb;;;;;;;;;;0BAUkB;IACtB;;IAEA;QACI,YAAY;QACZ,iBAAiB;IACrB;AACJ;;;AAGA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,yBAAyB;QACzB,qBAAqB;QACrB,cAAc;IAClB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,UAAU;QACV,iBAAiB;QACjB,mBAAmB;QACnB,MAAM;IACV;;IAEA;QACI,eAAe;QACf,MAAM;QACN,OAAO;QACP,aAAa;QACb,UAAU;QACV,kBAAkB;QAClB,QAAQ;QACR,UAAU;QACV,aAAa;QACb,sBAAsB;IAC1B;;IAEA;QACI,iBAAiB;QACjB,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,0CAA0C;QAC1C,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,cAAc;QACd,sBAAsB;IAC1B;;IAEA;QACI,aAAa;QACb,oBAAoB;QACpB,iBAAiB;QACjB,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: 'Sundaycoffee';\n    src: url('../fonts/Sundaycoffee.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Quesha';\n    src: url('../fonts/Quesha.ttf') format(truetype);\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('../fonts/Roboto.ttf') format(truetype);\n}\n\n:root {\n    color: var(--white-color);\n    font-family: 'Roboto';\n    font-size: 16px;\n\n    /* HSL colors pallete */\n    --ash-color: hsla(68, 8%, 62%, 1);\n    --licor-color: hsla(23, 16%, 10%, 1);\n    --licor-color-trans: hsla(23, 16%, 10%, 0.9);\n    --coffee-color: hsla(25, 38%, 36%, 1);\n    --khaki-color: hsla(39, 31%, 64%, 1);\n    --dyke-color: hsla(27, 22%, 20%, 0.5);\n    --white-color: #FFFFFF;\n\n    --border-radius: 30px;\n}\n\nbody {\n    background-image: url('./background.jpg');\n    background-color: var(--dyke-color);\n    background-blend-mode: multiply;\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n}\n\nheader {\n    height: 15vh;\n}\n\nh3 {\n    font-family: 'Quesha';\n    font-size: 2rem;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 100px;\n    padding: 25px 50px 0 50px;\n}\n\n.logo {\n    order: 0;\n}\n\n.navbar {\n    order: 1;\n}\n\nbutton.burger-button {\n    background-color: transparent;\n    border: 10px;\n    color: black;\n    cursor: pointer;\n    font-size: 30px;\n    margin-left: 32px;\n    float: left;\n    line-height: 70px;\n    display: none;\n    outline: none;\n}\n\nnav ul#items {\n    display: flex;\n    gap: 25px;\n}\n\nli {\n    list-style-type: none;\n}\n\nbutton {\n    color: var(--white-color);\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nbutton.nav-item {\n    font-size: 1.5rem;\n}\n\nli.close {\n    display: none;\n}\n\n\nspan.home {\n    --offset: 2;\n    color: #ffcc00;\n    left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));\n    animation: flicker 3s linear infinite;\n    top: 0;\n    z-index: 1;\n\n    font-size: 5rem;\n    line-height: 1;\n}\n\na {\n    cursor: pointer;\n}\n\n@keyframes flicker {\n\n    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {\n        opacity: 0.99;\n        text-shadow:\n            -1px -1px 0 rgba(255, 255, 255, 0.4),\n            1px -1px 0 rgba(255, 255, 255, 0.4),\n            -1px 1px 0 rgba(255, 255, 255, 0.4),\n            1px 1px 0 rgba(255, 255, 255, 0.4),\n            0 -2px 8px,\n            0 0 2px,\n            0 0 5px #ff7e00,\n            0 0 15px #ff4444,\n            0 0 2px #ff7e00,\n            0 2px 3px #000;\n    }\n\n    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {\n        opacity: 0.4;\n        text-shadow: none;\n    }\n}\n\n\n@media (max-width: 600px) {\n    * {\n        overflow-y: scroll;\n    }\n\n    :root {\n        color: var(--white-color);\n        font-family: 'Roboto';\n        font-size: 8px;\n    }\n\n    header {\n        height: 10vh;\n    }\n\n    nav {\n        display: flex;\n        justify-content: space-between;\n        align-items: normal;\n        padding: 0;\n        padding-top: 20px;\n        padding-right: 20px;\n        gap: 0;\n    }\n\n    .navbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        height: 100vh;\n        z-index: 1;\n        overflow-x: hidden;\n        order: 0;\n        width: 50%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .logo {\n        margin-left: auto;\n        order: 1;\n    }\n\n    nav ul#items {\n        display: none;\n        flex-direction: column;\n        align-items: flex-start;\n        background-color: var(--licor-color-trans);\n        height: 100%;\n    }\n\n    nav ul#items.show {\n        display: flex;\n    }\n    \n    button.nav-item {\n        font-size: 3rem;\n        padding-left: 20px;\n    }\n\n    button.burger-button {\n        display: block;\n        align-self: flex-start;\n    }\n\n    li.close {\n        display: flex;\n        align-self: flex-end;\n        padding-top: 20px;\n        padding-right: 20px;\n        font-size: 3.5rem;\n    }\n\n    button.hidden {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSx1Q0FBdUMsb0JBQW9CLDhCQUE4QixtQkFBbUIsa0JBQWtCLGlCQUFpQixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLDZCQUE2Qix1QkFBdUIsMEJBQTBCLDBDQUEwQyxvQkFBb0IsOEJBQThCLGdCQUFnQixHQUFHLG1DQUFtQyw2QkFBNkIsbURBQW1ELHlCQUF5QixvQkFBb0IsNkJBQTZCLHFDQUFxQyxnQkFBZ0IsNkNBQTZDLG1CQUFtQixpQkFBaUIsNkNBQTZDLEdBQUcsb0JBQW9CLGlCQUFpQiw4Q0FBOEMsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcseUNBQXlDLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFFBQVEsc0JBQXNCLEdBQUcsV0FBVywyQ0FBMkMsaUNBQWlDLDBCQUEwQix1QkFBdUIsbUJBQW1CLEdBQUcsK0NBQStDLGlDQUFpQyxHQUFHLGNBQWMsaUNBQWlDLG1CQUFtQix1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLHdCQUF3Qix5QkFBeUIseUJBQXlCLDJDQUEyQyx5QkFBeUIsMENBQTBDLHNCQUFzQiwwQkFBMEIsbUZBQW1GLHVCQUF1QixHQUFHLDhCQUE4Qiw2QkFBNkIsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQiw4QkFBOEIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQixHQUFHLDBCQUEwQixVQUFVLGlEQUFpRCxxQkFBcUIsT0FBTyxjQUFjLDRDQUE0QyxxQkFBcUIsT0FBTyxHQUFHLDJCQUEyQixVQUFVLGlEQUFpRCxxQkFBcUIsT0FBTyxjQUFjLDRDQUE0QyxxQkFBcUIsT0FBTyxHQUFHLGlDQUFpQyxvQkFBb0IsdUJBQXVCLHVCQUF1QixvQ0FBb0MsaUNBQWlDLE9BQU8seUJBQXlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLE9BQU8sdUJBQXVCLDRCQUE0QiwrQkFBK0IsaUNBQWlDLHNCQUFzQixzQkFBc0Isd0JBQXdCLHlDQUF5QyxzQ0FBc0MsMkZBQTJGLG9CQUFvQixPQUFPLGFBQWEsbUJBQW1CLDJCQUEyQixPQUFPLHlCQUF5QixtQkFBbUIsNEJBQTRCLDZCQUE2QixPQUFPLHVCQUF1QixpQ0FBaUMsT0FBTyxhQUFhLG1CQUFtQiwyQkFBMkIsT0FBTywwQkFBMEIsMEJBQTBCLDJCQUEyQixPQUFPLHdCQUF3Qix1QkFBdUIsc0JBQXNCLGlDQUFpQyxtQkFBbUIsNEJBQTRCLCtCQUErQixpQ0FBaUMsY0FBYyxzQkFBc0IsT0FBTywrQ0FBK0MsMEJBQTBCLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLDRCQUE0QiwwQkFBMEIsMEJBQTBCLE9BQU8sR0FBRyxtQkFBbUI7QUFDcGlMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hOdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEZBQTBGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsY0FBYyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZ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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdUI7QUFDSTtBQUN3QjtBQUNBO0FBQ1M7QUFDTjs7O0FBR3REOztBQUVBLGlCQUFpQiw4REFBZTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLDhEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw4REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0VBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvRUFBa0I7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbkV5Qjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC9hYm91dC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC9hYm91dC1zdHlsZS5jc3M/YjU1NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1zdHlsZS5jc3M/ZDg5ZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUvaG9tZS1zdHlsZS5jc3M/YWNhNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzcz9mYWI1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS9tZW51LXN0eWxlLmNzcz8wNDRmIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQvYWJvdXQtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QvY29udGFjdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS9ob21lLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmFib3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24uYWJvdXQge1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xuICAgIHdpZHRoOiAzM3Z3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMnB4IHZhcigtLXdoaXRlLWNvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XG4gICAgYW5pbWF0aW9uOiAuM3MgZWFzZS1vdXQgMHMgMSBtb3ZldXA7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuaDIudGl0bGUtYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waWN0dXJlLWFib3V0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW1nLnBpYy1hYm91dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYWluLmFib3V0IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICBzZWN0aW9uLmFib3V0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICB9XG5cbiAgICBoMi50aXRsZS1hYm91dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICBwLnRleHQtYWJvdXQge1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYWJvdXQvYWJvdXQtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztRQUNyQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbi5hYm91dCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBicmlnaHRuZXNzKDEuMTUpO1xcbiAgICB3aWR0aDogMzN2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjUpIDIwcHggMjVweCA1cHg7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2Utb3V0IDBzIDEgbW92ZXVwO1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5oMi50aXRsZS1hYm91dCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGljdHVyZS1hYm91dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbWcucGljLWFib3V0IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZldXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIG1haW4uYWJvdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICAgIFxcbiAgICBzZWN0aW9uLmFib3V0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGgyLnRpdGxlLWFib3V0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICBwLnRleHQtYWJvdXQge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbnNlY3Rpb24uY29udGFjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmxlZnQtY29udGFjdCwgLnJpZ2h0LWNvbnRhY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA1MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKVxufVxuXG4ubGVmdC1jb250YWN0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGFuaW1hdGlvbjogMC4zcyBlYXNlLWluIDBzIDEgbGVmdHNsaWRlO1xufVxuXG4ucmlnaHQtY29udGFjdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIHJpZ2h0c2xpZGU7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5uYW1lLWRpdiwgLmVtYWlsLWRpdiwgLmNvbW1lbnQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2ZmZWUtY29sb3IpO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5idXR0b24uc3VibWl0LWZvcm0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAuMjIpIDBweCA1cHggNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmJ1dHRvbi5zdWJtaXQtZm9ybTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc29jaWFsLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgc2NhbGUoMC45KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTUlKSBzY2FsZSgwLjkpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4uY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHNlY3Rpb24uY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmxlZnQtY29udGFjdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiaW5mbzEgc29jaWFsXCJcbiAgICAgICAgICAgIFwiaW5mbzIgc29jaWFsXCI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAuaHEge1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMTtcbiAgICB9XG5cbiAgICAuc29jaWFsLWNvbnRhY3Qge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgZ3JpZC1hcmVhOiBzb2NpYWw7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuc3Age1xuICAgICAgICBvcmRlcjogMjtcbiAgICAgICAgZ3JpZC1hcmVhOiBpbmZvMjtcbiAgICB9XG5cbiAgICAubGVmdC1jb250YWN0IGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC5yaWdodC1jb250YWN0IHtcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbFxuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBmb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhLCBmb3JtIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5zdWJtaXQtZm9ybSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0L2NvbnRhY3Qtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDRFQUE0RTtJQUM1RSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0I7OzBCQUVrQjtRQUNsQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFFBQVE7UUFDUixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbi5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnNlY3Rpb24uY29udGFjdCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxlZnQtY29udGFjdCwgLnJpZ2h0LWNvbnRhY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcXG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpXFxufVxcblxcbi5sZWZ0LWNvbnRhY3Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIGxlZnRzbGlkZTtcXG59XFxuXFxuLnJpZ2h0LWNvbnRhY3Qge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1pbiAwcyAxIHJpZ2h0c2xpZGU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYW1lLWRpdiwgLmVtYWlsLWRpdiwgLmNvbW1lbnQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvZmZlZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBjb2xvcjogdmFyKC0tY29mZmVlLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5idXR0b24uc3VibWl0LWZvcm0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQtZm9ybTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5zb2NpYWwtY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxlZnRzbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUlKSBzY2FsZSgwLjkpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByaWdodHNsaWRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCsxNSUpIHNjYWxlKDAuOSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgbWFpbi5jb250YWN0IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb24uY29udGFjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtY29udGFjdCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAyNSU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaW5mbzEgc29jaWFsXFxcIlxcbiAgICAgICAgICAgIFxcXCJpbmZvMiBzb2NpYWxcXFwiO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5ocSB7XFxuICAgICAgICBvcmRlcjogMDtcXG4gICAgICAgIGdyaWQtYXJlYTogaW5mbzE7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbC1jb250YWN0IHtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzb2NpYWw7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbC1pY29ucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5zcCB7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgICAgIGdyaWQtYXJlYTogaW5mbzI7XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtY29udGFjdCBoNSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodC1jb250YWN0IHtcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGxcXG4gICAgfVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gaW5wdXQsIGZvcm0gdGV4dGFyZWEsIGZvcm0gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIGZvcm0gdGV4dGFyZWEge1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24uc3VibWl0LWZvcm0ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbi5ob21lIHtcbiAgICBoZWlnaHQ6IDc1dnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxlZnQtaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLWluLW91dCAwcyAxIHNpbW1lcjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG5idXR0b24jb3JkZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1saWNvci1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSA1MSUsIHZhcigtLWNvZmZlZS1jb2xvcikgMTAwJSk7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XG59XG5cbmJ1dHRvbiNvcmRlcjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5yaWdodC1ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcjbXVnIHtcbiAgICB3aWR0aDogNjcycHg7XG4gICAgYW5pbWF0aW9uOiBncm93c2xpZGUgLjVzO1xufVxuXG5cbkBrZXlmcmFtZXMgc2ltbWVyIHtcbiAgICAwJSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZ3Jvd3NsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1haW4uaG9tZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgICB9XG5cbiAgICAubGVmdC1ob21lIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIGJ1dHRvbiNvcmRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS13aGl0ZS1jb2xvcikgMCUsIHZhcigtLWtoYWtpLWNvbG9yKSAxMDAlKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5yaWdodC1ob21lIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsb0hBQW9IO0lBQ3BILGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxpQ0FBaUM7SUFDckM7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIscUZBQXFGO1FBQ3JGLDZCQUE2QjtRQUM3QixvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4uaG9tZSB7XFxuICAgIGhlaWdodDogNzV2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLmxlZnQtaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogLjNzIGVhc2UtaW4tb3V0IDBzIDEgc2ltbWVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcblxcbmJ1dHRvbiNvcmRlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWxpY29yLWNvbG9yKSAwJSwgdmFyKC0ta2hha2ktY29sb3IpIDUxJSwgdmFyKC0tY29mZmVlLWNvbG9yKSAxMDAlKTtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIC4yMikgMHB4IDVweCA1cHg7XFxufVxcblxcbmJ1dHRvbiNvcmRlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0LWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaW1nI211ZyB7XFxuICAgIHdpZHRoOiA2NzJweDtcXG4gICAgYW5pbWF0aW9uOiBncm93c2xpZGUgLjVzO1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIHNpbW1lciB7XFxuICAgIDAlIHtcXG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dzbGlkZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDApO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYWluLmhvbWUge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0LWhvbWUge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiNvcmRlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXdoaXRlLWNvbG9yKSAwJSwgdmFyKC0ta2hha2ktY29sb3IpIDEwMCUpO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0LWhvbWUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1N1bmRheWNvZmZlZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9RdWVzaGEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1N1bmRheWNvZmZlZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdRdWVzaGEnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG46cm9vdCB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLyogSFNMIGNvbG9ycyBwYWxsZXRlICovXG4gICAgLS1hc2gtY29sb3I6IGhzbGEoNjgsIDglLCA2MiUsIDEpO1xuICAgIC0tbGljb3ItY29sb3I6IGhzbGEoMjMsIDE2JSwgMTAlLCAxKTtcbiAgICAtLWxpY29yLWNvbG9yLXRyYW5zOiBoc2xhKDIzLCAxNiUsIDEwJSwgMC45KTtcbiAgICAtLWNvZmZlZS1jb2xvcjogaHNsYSgyNSwgMzglLCAzNiUsIDEpO1xuICAgIC0ta2hha2ktY29sb3I6IGhzbGEoMzksIDMxJSwgNjQlLCAxKTtcbiAgICAtLWR5a2UtY29sb3I6IGhzbGEoMjcsIDIyJSwgMjAlLCAwLjUpO1xuICAgIC0td2hpdGUtY29sb3I6ICNGRkZGRkY7XG5cbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1keWtlLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogJ1F1ZXNoYSc7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMDBweDtcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHggMCA1MHB4O1xufVxuXG4ubG9nbyB7XG4gICAgb3JkZXI6IDA7XG59XG5cbi5uYXZiYXIge1xuICAgIG9yZGVyOiAxO1xufVxuXG5idXR0b24uYnVyZ2VyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxubmF2IHVsI2l0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjVweDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5uYXYtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmxpLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbnNwYW4uaG9tZSB7XG4gICAgLS1vZmZzZXQ6IDI7XG4gICAgY29sb3I6ICNmZmNjMDA7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1vZmZzZXQpICogMWNoICsgY2FsYyh2YXIoLS1vZmZzZXQpICogMC4yY2gpKTtcbiAgICBhbmltYXRpb246IGZsaWNrZXIgM3MgbGluZWFyIGluZmluaXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG5cbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICAgIHRleHQtc2hhZG93OlxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICAgICAgICAgICAgMXB4IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAtMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAgICAgICAwIC0ycHggOHB4LFxuICAgICAgICAgICAgMCAwIDJweCxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcbiAgICAgICAgICAgIDAgMCAxNXB4ICNmZjQ0NDQsXG4gICAgICAgICAgICAwIDAgMnB4ICNmZjdlMDAsXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgKiB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG5cbiAgICA6cm9vdCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgfVxuXG4gICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGdhcDogMDtcbiAgICB9XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG4gICAgbmF2IHVsI2l0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpY29yLWNvbG9yLXRyYW5zKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIG5hdiB1bCNpdGVtcy5zaG93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgXG4gICAgYnV0dG9uLm5hdi1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLmJ1cmdlci1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICBsaS5jbG9zZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgfVxuXG4gICAgYnV0dG9uLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4L2luZGV4LXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkRBQXNEO0FBQzFEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7O0lBRWYsdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLHNCQUFzQjs7SUFFdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQXlDO0lBQ3pDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLDZEQUE2RDtJQUM3RCxxQ0FBcUM7SUFDckMsTUFBTTtJQUNOLFVBQVU7O0lBRVYsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJO1FBQ0ksYUFBYTtRQUNiOzs7Ozs7Ozs7OzBCQVVrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixNQUFNO0lBQ1Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87UUFDUCxhQUFhO1FBQ2IsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsVUFBVTtRQUNWLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsUUFBUTtJQUNaOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1N1bmRheWNvZmZlZSc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9TdW5kYXljb2ZmZWUudHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1F1ZXNoYS50dGYnKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLnR0ZicpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcblxcbjpyb290IHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIC8qIEhTTCBjb2xvcnMgcGFsbGV0ZSAqL1xcbiAgICAtLWFzaC1jb2xvcjogaHNsYSg2OCwgOCUsIDYyJSwgMSk7XFxuICAgIC0tbGljb3ItY29sb3I6IGhzbGEoMjMsIDE2JSwgMTAlLCAxKTtcXG4gICAgLS1saWNvci1jb2xvci10cmFuczogaHNsYSgyMywgMTYlLCAxMCUsIDAuOSk7XFxuICAgIC0tY29mZmVlLWNvbG9yOiBoc2xhKDI1LCAzOCUsIDM2JSwgMSk7XFxuICAgIC0ta2hha2ktY29sb3I6IGhzbGEoMzksIDMxJSwgNjQlLCAxKTtcXG4gICAgLS1keWtlLWNvbG9yOiBoc2xhKDI3LCAyMiUsIDIwJSwgMC41KTtcXG4gICAgLS13aGl0ZS1jb2xvcjogI0ZGRkZGRjtcXG5cXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWR5a2UtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVlc2hhJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggNTBweCAwIDUwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgb3JkZXI6IDA7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBvcmRlcjogMTtcXG59XFxuXFxuYnV0dG9uLmJ1cmdlci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5uYXYgdWwjaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5uYXYtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saS5jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbnNwYW4uaG9tZSB7XFxuICAgIC0tb2Zmc2V0OiAyO1xcbiAgICBjb2xvcjogI2ZmY2MwMDtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1vZmZzZXQpICogMWNoICsgY2FsYyh2YXIoLS1vZmZzZXQpICogMC4yY2gpKTtcXG4gICAgYW5pbWF0aW9uOiBmbGlja2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xcblxcbiAgICAwJSwgMTkuOSUsIDIyJSwgNjIuOSUsIDY0JSwgNjQuOSUsIDcwJSwgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjk5O1xcbiAgICAgICAgdGV4dC1zaGFkb3c6XFxuICAgICAgICAgICAgLTFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIDFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIC0xcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxcbiAgICAgICAgICAgIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXFxuICAgICAgICAgICAgMCAtMnB4IDhweCxcXG4gICAgICAgICAgICAwIDAgMnB4LFxcbiAgICAgICAgICAgIDAgMCA1cHggI2ZmN2UwMCxcXG4gICAgICAgICAgICAwIDAgMTVweCAjZmY0NDQ0LFxcbiAgICAgICAgICAgIDAgMCAycHggI2ZmN2UwMCxcXG4gICAgICAgICAgICAwIDJweCAzcHggIzAwMDtcXG4gICAgfVxcblxcbiAgICAyMCUsIDIxLjklLCA2MyUsIDYzLjklLCA2NSUsIDY5LjklIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAqIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICA6cm9vdCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgb3JkZXI6IDA7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwjaXRlbXMge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpY29yLWNvbG9yLXRyYW5zKTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBuYXYgdWwjaXRlbXMuc2hvdyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIFxcbiAgICBidXR0b24ubmF2LWl0ZW0ge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5idXJnZXItYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICBsaS5jbG9zZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgfVxcblxcbiAgICBidXR0b24uaGlkZGVuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbi5tZW51IHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcbiAgICB3aWR0aDogMzN2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAycHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuNSkgMjBweCAyNXB4IDVweDtcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcbn1cblxuLnRpdGxlLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5sZWZ0LW1lbnUsIC5yaWdodC1tZW51IHtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5sZWZ0LW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpLWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnJpZ2h0LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNzBweDtcbn1cblxuLmNvZmZlZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uY29mZmVlLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW1nLm11Z3Mge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuXG5cblxuQGtleWZyYW1lcyBtb3ZldXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSkgc2NhbGUoMC45KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYWluLm1lbnUge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLmxlZnQtbWVudSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgIGdhcDogMzVweDtcbiAgICB9XG5cbiAgICAucmlnaHQtbWVudSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS9tZW51LXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7OztBQUtBO0lBQ0k7UUFDSSxxQ0FBcUM7UUFDckMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLFVBQVU7SUFDZDtBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLm1lbnUge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgYnJpZ2h0bmVzcygxLjE1KTtcXG4gICAgd2lkdGg6IDMzdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAycHggdmFyKC0td2hpdGUtY29sb3IpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC41KSAyMHB4IDI1cHggNXB4O1xcbiAgICBhbmltYXRpb246IC4zcyBlYXNlLW91dCAwcyAxIG1vdmV1cDtcXG59XFxuXFxuLnRpdGxlLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxufVxcblxcbi5sZWZ0LW1lbnUsIC5yaWdodC1tZW51IHtcXG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xcbn1cXG5cXG4ubGVmdC1tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2ktY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCB2YXIoLS13aGl0ZS1jb2xvcikgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0LW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4uY29mZmVlLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb2ZmZWUtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmltZy5tdWdzIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIG1vdmV1cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpIHNjYWxlKDAuOSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgbWFpbi5tZW51IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb24ubWVudSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLmxlZnQtbWVudSB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICAgICAgZ2FwOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5yaWdodC1tZW51IHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Qtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJy4vYWJvdXQtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0Q29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBwaWMuY2xhc3NMaXN0LmFkZCgncGljdHVyZS1hYm91dCcpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtYWJvdXQnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPdXIgc3RvcnknO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgndGV4dC1hYm91dCcpO1xuICAgIHAuaW5uZXJIVE1MID0gJ1doYXQgc3RhcnRlZCBhcyBzaGFyZWQgaG9iYnkgc21hbGwgdGFsaywgdGhlIHRlYW0gYXQgQ09DTyBxdWlja2x5IGdyZXcgb2JzZXNzZWQgcGVyZmVjdGluZyB0aGUgdmFyaW91cyB3YXlzIHdlIGJyZXdlZCBjb2ZmZWUgYW5kIGRlY2lkZWQgdG8gZ28gYWxsIGluLiBPdmVyIHRoZSB5ZWFycywgd2XigJl2ZSBkZXZlbG9wZWQsIG1hc3MgcHJvZHVjZWQgYW5kIHNvbGQgb3VyIG93biBibGVuZHMgdG8gc2hhcmUgd2l0aCB0aGUgd29ybGQsIGFuZCB0aGF04oCZcyBob3cgQ09DTyBjYW1lIHRvIGJlLiA8YnI+PGJyPic7XG4gICAgcC5pbm5lckhUTUwgKz0gJ1dpdGggbW9yZSB0aGFuIDIwMCBzaG9wcyBhY3Jvc3MgVVMgYXMgb2YgMjAyMywgd2XigJlyZSBjb25zdGFudGx5IHdvcmtpbmcgaGFyZCBhbmQgaW5ub3ZhdGluZyB0byBicmluZyB0aGUgbmV4dCBjaGFwdGVyIG9mIENPQ08gdG8gYWxsIGNvZmZlZSBsb3ZlcnMuIEluIGZhY3QsIHdl4oCZcmUgZXhjaXRlZCB0byBzaGFyZSBhIGZldyBsYXJnZSBkZXZlbG9wbWVudHMgYXMgZWFybHkgYXMgdGhpcyB5ZWFyISA8YnI+IDxicj4nO1xuICAgIHAuaW5uZXJIVE1MICs9ICdVc2luZyBhbHdheXMgZnJlc2gsIDEwMCUgb3JnYW5pYyBpbmdyZWRpZW50cyBzb3VyY2VkIGZyb20gc3VzdGFpbmFibGUgdmVuZG9ycywgd2Ugc3RhbmQgYmVoaW5kIG91ciBjb2ZmZWUsIG91ciBpbmdyZWRpZW50cyBhbmQgb3VyIHRlY2huaXF1ZSAtIHRoYXTigJlzIENPQ08uJztcblxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdwaWMtYWJvdXQnKTtcbiAgICBpbWcuc3JjID0gJy4uL3NyYy9hYm91dC9vdXItc3RvcnkucG5nJztcbiAgICBpbWcuYWx0ID0gJ1BpY3R1cmUgb2YgYSBwZXJzb24gcG91cmluZyBjb2ZmZWUnO1xuXG4gICAgdGV4dC5hcHBlbmQodGl0bGUsIHApO1xuICAgIHBpYy5hcHBlbmQoaW1nKTtcbiAgICBzZWN0aW9uLmFwcGVuZCh0ZXh0LCBwaWMpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0ICcuL2NvbnRhY3Qtc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1jb250YWN0Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQtY29udGFjdCcpO1xuXG4gICAgY29uc3QgaHEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBocS5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhY3QnKTtcbiAgICBocS5jbGFzc0xpc3QuYWRkKCdocScpO1xuICAgIGNvbnN0IGg1XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoNV8xLnRleHRDb250ZW50ID0gJ2hlYWRxdWFydGVycyc7XG4gICAgcF8xLmlubmVySFRNTCA9ICcxMTMgTWljaGlnYW4gQXZlbnVlPGJyPkNoaWNhZ28sIElMIDYwNjYxJztcbiAgICBocS5hcHBlbmQoaDVfMSwgcF8xKTtcblxuICAgIGNvbnN0IHNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3AuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWN0Jyk7XG4gICAgc3AuY2xhc3NMaXN0LmFkZCgnc3AnKTtcbiAgICBjb25zdCBoNV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBjb25zdCBwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaDVfMi50ZXh0Q29udGVudCA9ICdzdXBwb3J0JztcbiAgICBwXzIuaW5uZXJIVE1MID0gJ2hlbHBAY2FmZS5jb208YnI+KzEgNzc3IDIyMiAxMjM0JztcbiAgICBzcC5hcHBlbmQoaDVfMiwgcF8yKTtcblxuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC1pY29ucycpO1xuICAgIGljb25zLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC1jb250YWN0Jyk7XG5cbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpY24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpY24xLmFsdCA9ICdGYWNlYm9vayBpY29uJztcbiAgICBpY24xLnNyYyA9ICcuLi9zcmMvY29udGFjdC9mYWNlYm9vay5zdmcnO1xuICAgIGljbjEuaGVpZ2h0ID0gJzI2JztcblxuICAgIGExLmFwcGVuZENoaWxkKGljbjEpO1xuXG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgaWNuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgaWNuMi5hbHQgPSAnSW5zdGFncmFtIGljb24nO1xuICAgIGljbjIuc3JjID0gJy4uL3NyYy9jb250YWN0L2luc3RhZ3JhbS5zdmcnO1xuICAgIGljbjIuaGVpZ2h0ID0gJzI2JztcblxuICAgIGEyLmFwcGVuZENoaWxkKGljbjIpO1xuICAgIGljby5hcHBlbmRDaGlsZChhMSk7XG4gICAgaWNvLmFwcGVuZENoaWxkKGEyKTtcbiAgICBpY29ucy5hcHBlbmQoaWNvKTtcbiAgICBsZWZ0LmFwcGVuZChocSwgc3AsIGljb25zKTtcblxuICAgIC8vIHJpZ2h0IHNpZGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFjdCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0xldHMgY2hhdC4nO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lLWRpdicpO1xuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDEuZm9yID0gJ25hbWUnO1xuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9ICduYW1lJ1xuICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0MS5wbGFjZWhvbGRlciA9ICdKb2huIERpYXonO1xuICAgIGlucHV0MS5uYW1lID0gJ25hbWUnO1xuICAgIG5hbWUuYXBwZW5kKGxhYmVsMSwgaW5wdXQxKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZW1haWwtZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMi5mb3IgPSAnZW1haWwnO1xuICAgIGxhYmVsMi50ZXh0Q29udGVudCA9ICdlbWFpbCc7XG4gICAgaW5wdXQyLnR5cGUgPSAnZW1haWwnO1xuICAgIGlucHV0Mi5wbGFjZWhvbGRlciA9ICdqb2huQGVtYWlsLmNvbSc7XG4gICAgaW5wdXQyLm5hbWUgPSAnZW1haWwnO1xuICAgIGVtYWlsLmFwcGVuZChsYWJlbDIsIGlucHV0Mik7XG5cbiAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWRpdicpO1xuICAgIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBsYWJlbDMuZm9yID0gJ2NvbW1lbnQnO1xuICAgIGxhYmVsMy50ZXh0Q29udGVudCA9ICdjb21tZW50JztcbiAgICBpbnB1dDMucGxhY2Vob2xkZXIgPSAnVHlwZSBoZXJlLi4uJztcbiAgICBpbnB1dDMubmFtZSA9ICdjb21tZW50JztcbiAgICBjb21tZW50LmFwcGVuZChsYWJlbDMsIGlucHV0Myk7XG5cbiAgICBmb3JtLmFwcGVuZChuYW1lLCBlbWFpbCwgY29tbWVudCk7XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWZvcm0nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIHJpZ2h0LmFwcGVuZCh0aXRsZSwgZm9ybSwgYnRuKTtcbiAgICBzZWN0aW9uLmFwcGVuZChsZWZ0LCByaWdodCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgJy4vaG9tZS1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNtb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdC1ob21lJyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQtaG9tZScpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyJyk7XG4gICAgc21va2UuY2xhc3NMaXN0LmFkZCgnc21va2UnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ211ZycpO1xuXG4gICAgaDEudGV4dENvbnRlbnQgPSAnQnJld2VkIHRvIHBlcmZlY3Rpb24uJztcbiAgICBoMi50ZXh0Q29udGVudCA9ICdFdmVyeSB0aW1lLic7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyc7XG4gICAgaW1hZ2Uuc3JjID0gJy4uL3NyYy9ob21lL211Zy5wbmcnO1xuXG4gICAgaGVhZGVyLmFwcGVuZChoMSwgaDIpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidG4pO1xuICAgIGxlZnQuYXBwZW5kKGhlYWRlciwgYnV0dG9uKTtcbiAgICByaWdodC5hcHBlbmQoc21va2UsIGltYWdlKTtcbiAgICBtYWluLmFwcGVuZChsZWZ0LCByaWdodCk7XG5cbiAgICByZXR1cm4gbWFpbjsgXG59IiwiaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRNYWluQ29udGVudCBmcm9tICcuLi9ob21lL2hvbWUtbG9hZC5qcyc7XG5pbXBvcnQgbG9hZE1lbnVDb250ZW50IGZyb20gJy4uL21lbnUvbWVudS1sb2FkLmpzJztcbmltcG9ydCBsb2FkQ29udGFjdENvbnRlbnQgZnJvbSAnLi4vY29udGFjdC9jb250YWN0LWxvYWQuanMnO1xuaW1wb3J0IGxvYWRBYm91dENvbnRlbnQgZnJvbSAnLi4vYWJvdXQvYWJvdXQtbG9hZC5qcyc7XG5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYm9keS5hcHBlbmRDaGlsZChsb2FkTWFpbkNvbnRlbnQoKSk7XG5cbmNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItYnV0dG9uXCIpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbXNcIik7XG5cbmNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbm5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUnLCAnbWVudScsICdhYm91dCcsICdjb250YWN0Jyk7XG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnMScpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgICAgICAgICBib2R5LmFwcGVuZChsb2FkTWFpbkNvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnMicpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKCk7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRNZW51Q29udGVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLmRhdGFzZXQuaW5kZXggPT09ICczJykge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKCk7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRBYm91dENvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5kYXRhc2V0LmluZGV4ID09PSAnNCcpIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKCk7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKGxvYWRDb250YWN0Q29udGVudCgpKTtcbiAgICAgICAgfTtcbiAgICB9KVxufSlcblxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5hdmJhcigpO1xufSk7XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5hdmJhcigpO1xufSk7XG5cbm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYobmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgIHRvZ2dsZU5hdmJhcigpO1xuICAgIH1cbn0pOyIsImltcG9ydCAnLi9tZW51LXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbWVudScpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LW1lbnUnKTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbXG4gICAgICAgICdNb2NoYScsXG4gICAgICAgICdMYXR0ZScsXG4gICAgICAgICdDYXBwdWNjaW5vJyxcbiAgICAgICAgJ0FtZXJpY2FubydcbiAgICBdXG5cbiAgICBjb25zdCBwcmljZUFycmF5ID0gWyckOScsICckOCcsICckOCcsICckNyddO1xuXG4gICAgY29uc3QgZGVzY0FycmF5ID0gW1xuICAgICAgICAnQnJld2VkIGZvciBjb3p5IGF0bW9zcGhlcmVzLCBvdXIgaGVhcnR5IGFuZCBydXN0aWMgYmxlbmQgaXMgcmVtaW5pc2NlbnQgb2YgYSBjYWJpbiBmaXJlcGxhY2UuJyxcbiAgICAgICAgJ0NyYWZ0ZWQgd2l0aCBwcmVjaXNpb24gdXNpbmcgYSBiYWxhbmNlZCBibGVuZCBvZiBjb2ZmZWUgYW5kIG1pbGssIGEgZmVhc3QgZm9yIHRoZSBzZW5zZXMuJyxcbiAgICAgICAgJ1BlcmZlY3QgYmFsYW5jZSBvZiBlc3ByZXNzbywgbWlsayBhbmQgYSBjaW5uYW1vbiB0d2lzdCwganVzdCBlbm91Z2ggdG8gd2FrZSB0aGUgdGFzdGUgYnVkcy4nLFxuICAgICAgICAnU29waGlzdGljYXRlZCB0YWtlIG9uIGEgY2xhc3NpYyBjb2ZmZWUgZXhwZXJpZW5jZSwgbWFkZSB3aXRoIHRoZSBmaW5lc3QgMTAwJSBvcmdhbmljIGJlYW5zLidcbiAgICBdXG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWluZm8nKTtcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXRpdGxlJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ211Z3MnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaV07XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gcHJpY2VBcnJheVtpXTtcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGRlc2NBcnJheVtpXTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYC4uL3NyYy9tZW51L2NvZmZlLW11Z3MgKCR7aSArIDF9KS5wbmdgO1xuXG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZSwgcHJpY2UpO1xuICAgICAgICBpbmZvRGl2LmFwcGVuZCh0aXRsZURpdiwgZGVzYyk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZChpbmZvRGl2KTtcbiAgICAgICAgbGVmdC5hcHBlbmQoaW1hZ2UpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZChsZWZ0LCByaWdodCk7XG4gICAgfVxuXG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=