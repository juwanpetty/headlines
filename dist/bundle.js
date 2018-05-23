/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/scss/application.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/scss/application.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://rsms.me/inter/inter-ui.css);", ""]);

// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers (opinionated).\n   */\nbody {\n  margin: 0; }\n\n/**\n   * Add the correct display in IE 9-.\n   */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n   * Add the correct margin in IE 8.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n   * Add the correct font style in Android 4.3-.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Add the correct background and color in IE 9-.\n   */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n   * Add the correct display in iOS 4-7.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Remove the border on images inside links in IE 10-.\n   */\nimg {\n  border-style: none; }\n\n/**\n   * Hide the overflow in IE.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Remove the default vertical scrollbar in IE.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\ndetails,\nmenu {\n  display: block; }\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item; }\n\n/* Scripting\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   */\ncanvas {\n  display: inline-block; }\n\n/**\n   * Add the correct display in IE.\n   */\ntemplate {\n  display: none; }\n\n/* Hidden\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10-.\n   */\n[hidden] {\n  display: none; }\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit; }\n\nhtml {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.20;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  letter-spacing: -0.72px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\nh2 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.20;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  letter-spacing: -0.72px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\nh3 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.20;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  letter-spacing: 0.00px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\np {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.60;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  letter-spacing: -0.30px;\n  word-spacing: -0.10px;\n  text-transform: none; }\n\nbody {\n  position: relative;\n  font-family: -apple-system, 'Inter UI', sans-serif;\n  color: #2B2B2B;\n  background: #f9f9fa; }\n\nmain {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  min-height: calc(100vh - 7rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\nsvg {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: #999999;\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round; }\n  svg.cursor {\n    cursor: pointer; }\n\nol, ul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\nbutton.btn {\n  background-color: #F9F9FA;\n  border: 1px solid #B1B1B3;\n  border-radius: 4px;\n  font-size: 14px;\n  color: inherit;\n  cursor: pointer;\n  margin-bottom: 15px;\n  padding: 10px 30px;\n  white-space: nowrap; }\n  button.btn.action {\n    background: #0060DF;\n    border: solid 1px #0060DF;\n    color: #FFF; }\n\nnav {\n  width: 100%;\n  height: 4rem;\n  padding: 0 1rem;\n  margin-bottom: 3rem;\n  pointer-events: none;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.js-menu {\n  width: 35px;\n  height: 36px;\n  padding: 0.5rem 0.5rem 0.25rem;\n  border-radius: 3px;\n  cursor: pointer;\n  pointer-events: visible; }\n  .js-menu:hover {\n    background: #EDEDF0; }\n  .js-menu .js-close {\n    display: none; }\n  .js-menu.sidebar-open .js-open {\n    display: none; }\n  .js-menu.sidebar-open .js-close {\n    display: block; }\n\n.js-sidebar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 400px;\n  height: 100vh;\n  padding: 40px;\n  overflow-y: scroll;\n  background: #FFFFFF;\n  border-left: 1px solid #D7D7DB;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: 0.1s cubic-bezier(0, 0, 0, 1);\n  transition-property: transform; }\n  .js-sidebar.hidden {\n    transform: translate(400px); }\n  .js-sidebar p {\n    font-size: 14px; }\n  .js-sidebar form {\n    position: relative;\n    padding-bottom: 5rem; }\n\n.sidebar__title {\n  font-size: 21px; }\n\n.sidebar__footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 399px;\n  height: 5rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  background: #F9F9FA;\n  border-top: 1px solid #D7D7DB;\n  padding: 1rem 40px;\n  transition: 0.1s cubic-bezier(0, 0, 0, 1);\n  transition-property: transform; }\n  .sidebar__footer.hidden {\n    transform: translate(400px); }\n\n.js-sources h3 {\n  margin: 0;\n  margin-bottom: 1rem;\n  font-size: 16px;\n  font-weight: 700; }\n\n.source__group {\n  margin-bottom: 2rem; }\n  .source__group input {\n    position: absolute;\n    opacity: 0; }\n    .source__group input:checked + label {\n      background: #0060DF;\n      border: solid 1px #0060DF;\n      color: #FFF; }\n  .source__group label {\n    display: block;\n    margin-bottom: 15px;\n    padding: 10px 30px;\n    font-size: 16px;\n    border: 1px solid #E6E6E6;\n    border-radius: 4px;\n    background-color: #F9F9FA;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently\n                                    supported by Chrome and Opera */ }\n\n.attribution {\n  color: #AEAEAE; }\n  .attribution a {\n    text-decoration: none;\n    color: #4188E5; }\n\n.search {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 900px; }\n  @media screen and (max-width: 750px) {\n    .search {\n      padding: 0 2.5rem; } }\n  .search form {\n    width: 100%; }\n    .search form:focus {\n      outline: none; }\n    .search form button {\n      position: absolute;\n      top: 1px;\n      right: 1px;\n      width: 40px;\n      height: 33.5px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: #FFFFFF;\n      cursor: pointer;\n      border: none;\n      border-radius: 0 3px 3px 0;\n      border-left: none; }\n      .search form button:hover {\n        background: #EDEDF0; }\n\n.searchbar {\n  width: 100%;\n  height: 36px;\n  padding: 0;\n  padding-left: 42px;\n  font-size: 16px;\n  color: inherit;\n  border-radius: 3px;\n  border: 1px solid rgba(12, 12, 13, 0.1);\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: box-shadow 75ms; }\n  .searchbar:focus {\n    box-shadow: 0 0 0 3px #007AFF; }\n\n.search__wrapper {\n  position: relative; }\n  .search__wrapper > svg {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    margin: 0.5rem 0.5rem 0.25rem; }\n\n.search__icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px 0 0 3px;\n  border-right: none; }\n\n.section {\n  width: 100%; }\n  .section__wrapper {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto; }\n\n.articles {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }\n  @media screen and (max-width: 750px) {\n    .articles {\n      padding-top: 5rem; } }\n\n.article__item {\n  width: 250px;\n  margin-bottom: 2.5rem;\n  justify-self: center;\n  border-radius: 3px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: box-shadow 150ms; }\n  .article__item * {\n    margin: 0; }\n  @media screen and (min-width: 750px) {\n    .article__item {\n      margin-bottom: 0; }\n      .article__item:first-child {\n        justify-self: left; }\n      .article__item:last-child {\n        justify-self: right; } }\n  .article__item a {\n    display: block;\n    height: 100%;\n    text-decoration: none; }\n    .article__item a:visited .article__title, .article__item a:visited .article__description {\n      color: #AEAEAE; }\n    .article__item a:hover .article__title {\n      color: #007AFF; }\n  .article__item:hover {\n    box-shadow: 0 0 0 5px #D7D7DB; }\n\n.article__image__container {\n  display: block;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 1rem; }\n\n.article__image {\n  width: 100%;\n  height: 100%;\n  border-radius: 3px 3px 0 0;\n  cursor: pointer;\n  object-fit: cover;\n  transition: box-shadow 150ms; }\n\n.article__details {\n  margin-bottom: 1rem; }\n\n.article__overflow {\n  overflow: hidden;\n  max-height: 95px;\n  padding: 0 1rem; }\n\n.article__description {\n  font-size: 14px;\n  color: #5E5E5E; }\n\n.article__title {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 140%;\n  color: #2B2B2B;\n  cursor: pointer;\n  margin: 0 0 1rem 0;\n  transition: color 100ms; }\n\n.article__description {\n  font-size: 14px;\n  line-height: 150%;\n  cursor: pointer;\n  margin: 0 0 2rem 0; }\n\n.article__social, .article__source {\n  color: #737373;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0;\n  padding-top: 1rem;\n  padding-left: 1rem; }\n  .article__social svg, .article__source svg {\n    margin-right: 0.5rem; }\n  .article__social p, .article__source p {\n    font-size: 14px; }\n\n.article__source {\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-top: 0;\n  margin-bottom: 0.5rem; }\n", "", {"version":3,"sources":["/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_normalize.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/application.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/application.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_typography.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_nav.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_sidebar.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_search.scss","/Users/juwanpetty/Documents/Code/headlines/src/scss/src/scss/_article.scss"],"names":[],"mappings":"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","file":"application.scss","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers (opinionated).\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Add the correct display in IE 9-.\n   */\n  \n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\n  \n  figcaption,\n  figure,\n  main { /* 1 */\n    display: block;\n  }\n  \n  /**\n   * Add the correct margin in IE 8.\n   */\n  \n  figure {\n    margin: 1em 40px;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\n  \n  a {\n    background-color: transparent; /* 1 */\n    -webkit-text-decoration-skip: objects; /* 2 */\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\n  \n  b,\n  strong {\n    font-weight: inherit;\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font style in Android 4.3-.\n   */\n  \n  dfn {\n    font-style: italic;\n  }\n  \n  /**\n   * Add the correct background and color in IE 9-.\n   */\n  \n  mark {\n    background-color: #ff0;\n    color: #000;\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 9-.\n   */\n  \n  audio,\n  video {\n    display: inline-block;\n  }\n  \n  /**\n   * Add the correct display in iOS 4-7.\n   */\n  \n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n  \n  /**\n   * Remove the border on images inside links in IE 10-.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /**\n   * Hide the overflow in IE.\n   */\n  \n  svg:not(:root) {\n    overflow: hidden;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: sans-serif; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  html [type=\"button\"], /* 1 */\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-cancel-button,\n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\n  \n  details, /* 1 */\n  menu {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Scripting\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 9-.\n   */\n  \n  canvas {\n    display: inline-block;\n  }\n  \n  /**\n   * Add the correct display in IE.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /* Hidden\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10-.\n   */\n  \n  [hidden] {\n    display: none;\n  }\n  ","/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n@import url(\"https://rsms.me/inter/inter-ui.css\");\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers (opinionated).\n   */\nbody {\n  margin: 0; }\n\n/**\n   * Add the correct display in IE 9-.\n   */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n   * Add the correct margin in IE 8.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n   * Add the correct font style in Android 4.3-.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Add the correct background and color in IE 9-.\n   */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n   * Add the correct display in iOS 4-7.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Remove the border on images inside links in IE 10-.\n   */\nimg {\n  border-style: none; }\n\n/**\n   * Hide the overflow in IE.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Remove the default vertical scrollbar in IE.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\ndetails,\nmenu {\n  display: block; }\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item; }\n\n/* Scripting\n     ========================================================================== */\n/**\n   * Add the correct display in IE 9-.\n   */\ncanvas {\n  display: inline-block; }\n\n/**\n   * Add the correct display in IE.\n   */\ntemplate {\n  display: none; }\n\n/* Hidden\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10-.\n   */\n[hidden] {\n  display: none; }\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit; }\n\nhtml {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nh1 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.20;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  letter-spacing: -0.72px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\nh2 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.20;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  letter-spacing: -0.72px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\nh3 {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.20;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  letter-spacing: 0.00px;\n  word-spacing: 0.00px;\n  text-transform: none; }\n\np {\n  font-family: -apple-system, \"Inter UI\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.60;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  letter-spacing: -0.30px;\n  word-spacing: -0.10px;\n  text-transform: none; }\n\nbody {\n  position: relative;\n  font-family: -apple-system, 'Inter UI', sans-serif;\n  color: #2B2B2B;\n  background: #f9f9fa; }\n\nmain {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  min-height: calc(100vh - 7rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\nsvg {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: #999999;\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round; }\n  svg.cursor {\n    cursor: pointer; }\n\nol, ul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\nbutton.btn {\n  background-color: #F9F9FA;\n  border: 1px solid #B1B1B3;\n  border-radius: 4px;\n  font-size: 14px;\n  color: inherit;\n  cursor: pointer;\n  margin-bottom: 15px;\n  padding: 10px 30px;\n  white-space: nowrap; }\n  button.btn.action {\n    background: #0060DF;\n    border: solid 1px #0060DF;\n    color: #FFF; }\n\nnav {\n  width: 100%;\n  height: 4rem;\n  padding: 0 1rem;\n  margin-bottom: 3rem;\n  pointer-events: none;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.js-menu {\n  width: 35px;\n  height: 36px;\n  padding: 0.5rem 0.5rem 0.25rem;\n  border-radius: 3px;\n  cursor: pointer;\n  pointer-events: visible; }\n  .js-menu:hover {\n    background: #EDEDF0; }\n  .js-menu .js-close {\n    display: none; }\n  .js-menu.sidebar-open .js-open {\n    display: none; }\n  .js-menu.sidebar-open .js-close {\n    display: block; }\n\n.js-sidebar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 400px;\n  height: 100vh;\n  padding: 40px;\n  overflow-y: scroll;\n  background: #FFFFFF;\n  border-left: 1px solid #D7D7DB;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: 0.1s cubic-bezier(0, 0, 0, 1);\n  transition-property: transform; }\n  .js-sidebar.hidden {\n    transform: translate(400px); }\n  .js-sidebar p {\n    font-size: 14px; }\n  .js-sidebar form {\n    position: relative;\n    padding-bottom: 5rem; }\n\n.sidebar__title {\n  font-size: 21px; }\n\n.sidebar__footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 399px;\n  height: 5rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  background: #F9F9FA;\n  border-top: 1px solid #D7D7DB;\n  padding: 1rem 40px;\n  transition: 0.1s cubic-bezier(0, 0, 0, 1);\n  transition-property: transform; }\n  .sidebar__footer.hidden {\n    transform: translate(400px); }\n\n.js-sources h3 {\n  margin: 0;\n  margin-bottom: 1rem;\n  font-size: 16px;\n  font-weight: 700; }\n\n.source__group {\n  margin-bottom: 2rem; }\n  .source__group input {\n    position: absolute;\n    opacity: 0; }\n    .source__group input:checked + label {\n      background: #0060DF;\n      border: solid 1px #0060DF;\n      color: #FFF; }\n  .source__group label {\n    display: block;\n    margin-bottom: 15px;\n    padding: 10px 30px;\n    font-size: 16px;\n    border: 1px solid #E6E6E6;\n    border-radius: 4px;\n    background-color: #F9F9FA;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently\n                                    supported by Chrome and Opera */ }\n\n.attribution {\n  color: #AEAEAE; }\n  .attribution a {\n    text-decoration: none;\n    color: #4188E5; }\n\n.search {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 900px; }\n  @media screen and (max-width: 750px) {\n    .search {\n      padding: 0 2.5rem; } }\n  .search form {\n    width: 100%; }\n    .search form:focus {\n      outline: none; }\n    .search form button {\n      position: absolute;\n      top: 1px;\n      right: 1px;\n      width: 40px;\n      height: 33.5px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: #FFFFFF;\n      cursor: pointer;\n      border: none;\n      border-radius: 0 3px 3px 0;\n      border-left: none; }\n      .search form button:hover {\n        background: #EDEDF0; }\n\n.searchbar {\n  width: 100%;\n  height: 36px;\n  padding: 0;\n  padding-left: 42px;\n  font-size: 16px;\n  color: inherit;\n  border-radius: 3px;\n  border: 1px solid rgba(12, 12, 13, 0.1);\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: box-shadow 75ms; }\n  .searchbar:focus {\n    box-shadow: 0 0 0 3px #007AFF; }\n\n.search__wrapper {\n  position: relative; }\n  .search__wrapper > svg {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    margin: 0.5rem 0.5rem 0.25rem; }\n\n.search__icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px 0 0 3px;\n  border-right: none; }\n\n.section {\n  width: 100%; }\n  .section__wrapper {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto; }\n\n.articles {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }\n  @media screen and (max-width: 750px) {\n    .articles {\n      padding-top: 5rem; } }\n\n.article__item {\n  width: 250px;\n  margin-bottom: 2.5rem;\n  justify-self: center;\n  border-radius: 3px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n  transition: box-shadow 150ms; }\n  .article__item * {\n    margin: 0; }\n  @media screen and (min-width: 750px) {\n    .article__item {\n      margin-bottom: 0; }\n      .article__item:first-child {\n        justify-self: left; }\n      .article__item:last-child {\n        justify-self: right; } }\n  .article__item a {\n    display: block;\n    height: 100%;\n    text-decoration: none; }\n    .article__item a:visited .article__title, .article__item a:visited .article__description {\n      color: #AEAEAE; }\n    .article__item a:hover .article__title {\n      color: #007AFF; }\n  .article__item:hover {\n    box-shadow: 0 0 0 5px #D7D7DB; }\n\n.article__image__container {\n  display: block;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 1rem; }\n\n.article__image {\n  width: 100%;\n  height: 100%;\n  border-radius: 3px 3px 0 0;\n  cursor: pointer;\n  object-fit: cover;\n  transition: box-shadow 150ms; }\n\n.article__details {\n  margin-bottom: 1rem; }\n\n.article__overflow {\n  overflow: hidden;\n  max-height: 95px;\n  padding: 0 1rem; }\n\n.article__description {\n  font-size: 14px;\n  color: #5E5E5E; }\n\n.article__title {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 140%;\n  color: #2B2B2B;\n  cursor: pointer;\n  margin: 0 0 1rem 0;\n  transition: color 100ms; }\n\n.article__description {\n  font-size: 14px;\n  line-height: 150%;\n  cursor: pointer;\n  margin: 0 0 2rem 0; }\n\n.article__social, .article__source {\n  color: #737373;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0;\n  padding-top: 1rem;\n  padding-left: 1rem; }\n  .article__social svg, .article__source svg {\n    margin-right: 0.5rem; }\n  .article__social p, .article__source p {\n    font-size: 14px; }\n\n.article__source {\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-top: 0;\n  margin-bottom: 0.5rem; }\n","$primary-text: #2B2B2B;\n$secondary-text: #999999;\n$border-color: #D7D7DB;\n$accent-color: #007AFF;\n\n@import 'normalize';\n\nhtml {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: inherit;\n    -moz-box-sizing: inherit;\n    box-sizing: inherit;\n}\n\n@import 'typography';\n\nbody {\n    position: relative;\n    font-family: -apple-system, 'Inter UI', sans-serif;\n    color: $primary-text;\n    background: #f9f9fa;\n}\n\nmain {\n    position: relative;\n\n    width: 100%;\n    max-width: 900px;\n    margin: 0 auto;\n    min-height: calc(100vh - 7rem);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\nsvg {\n    width: 20px;\n    height: 20px;\n\n    fill: none;\n\n    stroke: $secondary-text;\n    stroke-width: 2;\n    stroke-linejoin: round;\n    stroke-linecap: round;\n\n    &.cursor {\n        cursor: pointer;\n    }\n}\n\nol, ul, li {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nbutton.btn {\n    background-color: #F9F9FA;\n    border: 1px solid #B1B1B3;\n    border-radius: 4px;\n    font-size: 14px;\n    color: inherit;\n    cursor: pointer;\n    margin-bottom: 15px;\n    padding: 10px 30px;\n    white-space: nowrap;\n\n    &.action {\n        background: #0060DF;\n        border: solid 1px #0060DF;\n        color: #FFF;\n    }\n}\n\n@import 'nav';\n@import 'sidebar';\n@import 'search';\n@import 'article';","@import url('https://rsms.me/inter/inter-ui.css');\n\nhtml {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nh1 {\n    font-family: -apple-system, \"Inter UI\", sans-serif;\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 1.20;\n    margin-top: 0px;\n    margin-bottom: 10px;\n    letter-spacing: -0.72px;\n    word-spacing: 0.00px;\n    text-transform: none;\n}\n\nh2 {\n    font-family: -apple-system, \"Inter UI\", sans-serif;\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.20;\n    margin-top: 30px;\n    margin-bottom: 5px;\n    letter-spacing: -0.72px;\n    word-spacing: 0.00px;\n    text-transform: none;\n}\n\nh3 {\n    font-family: -apple-system, \"Inter UI\", sans-serif;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 1.20;\n    margin-top: 30px;\n    margin-bottom: 5px;\n    letter-spacing: 0.00px;\n    word-spacing: 0.00px;\n    text-transform: none;\n}\n\np {\n    font-family: -apple-system, \"Inter UI\", sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.60;\n    margin-top: 0px;\n    margin-bottom: 25px;\n    letter-spacing: -0.30px;\n    word-spacing: -0.10px;\n    text-transform: none;\n}\n\n","nav {\n    width: 100%;\n    height: 4rem;\n    padding: 0 1rem;\n    margin-bottom: 3rem;\n    pointer-events: none;\n\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}",".js-menu {\n    width: 35px;\n    height: 36px;\n\n    padding: 0.5rem 0.5rem 0.25rem;\n    border-radius: 3px;\n    cursor: pointer;\n    pointer-events: visible;\n\n    &:hover {\n        background: #EDEDF0;\n    }\n\n    .js-close {display: none;}\n\n    &.sidebar-open {\n        .js-open {display: none;}\n        .js-close {display: block;}\n    }\n}\n\n.js-sidebar {\n    position: fixed;\n    top: 0;\n    right: 0;\n\n    width: 400px;\n    height: 100vh;\n    padding: 40px;\n    overflow-y: scroll;\n\n    background: #FFFFFF;\n    border-left: 1px solid #D7D7DB;\n    box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n\n    transition: 0.1s cubic-bezier(0, 0, 0, 1);\n    transition-property: transform;\n\n    &.hidden {\n        transform: translate(400px);\n    }\n\n    p {font-size: 14px;}\n\n    form {\n        position: relative;\n        padding-bottom: 5rem;\n    }\n}\n\n.sidebar__title {\n    font-size: 21px;\n}\n\n.sidebar__footer {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n\n    width: 399px;\n    height: 5rem;\n\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n\n    background: #F9F9FA;\n    border-top: 1px solid #D7D7DB;\n    padding: 1rem 40px;\n\n    transition: 0.1s cubic-bezier(0, 0, 0, 1);\n    transition-property: transform;\n\n    &.hidden {\n        transform: translate(400px);\n    }\n}\n\n.js-sources {\n    h3 {\n        margin: 0;\n        margin-bottom: 1rem;\n\n        font-size: 16px;\n        font-weight: 700;\n    }\n}\n\n.source__group  {\n    margin-bottom: 2rem;\n\n    input {\n        position: absolute;\n        opacity: 0;\n\n        &:checked + label {\n            background: #0060DF;\n            border: solid 1px #0060DF;\n            color: #FFF;\n        }\n    }\n\n    label {\n        display: block;\n\n        margin-bottom: 15px;\n        padding: 10px 30px;\n\n        font-size: 16px;\n        border: 1px solid #E6E6E6;\n        border-radius: 4px;\n        background-color: #F9F9FA;\n        cursor: pointer;\n        \n        // no highlighting\n        -webkit-touch-callout: none; /* iOS Safari */\n        -webkit-user-select: none; /* Safari */\n        -khtml-user-select: none; /* Konqueror HTML */\n        -moz-user-select: none; /* Firefox */\n            -ms-user-select: none; /* Internet Explorer/Edge */\n                user-select: none; /* Non-prefixed version, currently\n                                    supported by Chrome and Opera */\n    }\n\n}\n\n.attribution {\n    color: #AEAEAE;\n\n    a {\n        text-decoration: none;\n        color: #4188E5;\n    }\n}",".search {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    max-width: 900px;\n\n    @media screen and (max-width: 750px) {\n        padding: 0 2.5rem; \n    }\n\n    form {\n        width: 100%;\n        \n        &:focus {\n            outline: none;\n        }\n\n        button {\n            position: absolute;\n            top: 1px;\n            right: 1px;\n\n            width: 40px;\n            height: 33.5px;\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            background: #FFFFFF;\n            cursor: pointer;\n\n            border: none;\n            border-radius: 0 3px 3px 0;\n            border-left: none;\n            \n            &:hover {\n                background: #EDEDF0;\n            }\n        }\n    }\n}\n\n.searchbar {\n    width: 100%;\n    height: 36px;\n\n    padding: 0;\n    padding-left: 42px;\n\n    font-size: 16px;\n    color: inherit;\n\n    border-radius: 3px;\n\n    border: 1px solid rgba(12, 12, 13, 0.1);\n    box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n\n    transition: box-shadow 75ms;\n\n    &:focus {\n        box-shadow: 0 0 0 3px #007AFF;\n    }\n}\n\n.search__wrapper {\n    position: relative;\n\n    & > svg {\n        position: absolute;\n        top: 2px;\n        left: 0;\n\n        margin: 0.5rem 0.5rem 0.25rem;\n    }\n}\n\n.search__icon {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 40px;\n    height: 36px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-radius: 3px 0 0 3px;\n    border-right: none;\n}",".section {\n    width: 100%;\n\n    &__wrapper {\n        width: 100%;\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n}\n\n.articles {\n    width: 100%;\n    max-width: 900px;\n    margin: 0 auto;\n\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));\n\n    @media screen and (max-width: 750px) {\n        padding-top: 5rem; \n    }\n}\n\n.article__item {\n    width: 250px;\n    margin-bottom: 2.5rem;\n\n    justify-self: center;\n\n    border-radius: 3px;\n    background: #FFFFFF;\n    box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);\n    transition: box-shadow 150ms; \n\n    * {margin: 0;}\n\n    @media screen and (min-width: 750px) {\n        margin-bottom: 0;\n\n        &:first-child {justify-self: left;}\n        &:last-child {justify-self: right;}\n    }\n    \n\n    a {\n        display: block;\n        height: 100%;\n        text-decoration: none;\n\n        &:visited {\n            .article__title, .article__description {\n                color: #AEAEAE;\n            }\n        }\n        \n        &:hover {\n            .article__title {\n                color: #007AFF;\n            }\n        }\n\n    }\n    \n    &:hover {\n        box-shadow: 0 0 0 5px #D7D7DB;\n    }\n}\n\n.article__image__container {\n    display: block;\n    width: 100%;\n    height: 150px;\n    margin-bottom: 1rem;\n}\n\n.article__image {\n    width: 100%;\n    height: 100%;\n\n    border-radius: 3px 3px 0 0;\n    cursor: pointer;\n\n    object-fit: cover;\n\n    transition: box-shadow 150ms; \n}\n\n.article__details {\n    margin-bottom: 1rem;\n}\n\n.article__overflow {\n    overflow: hidden;\n    max-height: 95px;\n    padding: 0 1rem;\n}\n\n.article__description {\n    font-size: 14px;\n    color: #5E5E5E;\n}\n\n.article__title {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 140%;\n    color: $primary-text;\n    cursor: pointer;\n\n    margin: 0 0 1rem 0;\n\n    transition: color 100ms; \n}\n\n.article__description {\n    font-size: 14px;\n    line-height: 150%;\n    cursor: pointer;\n\n    margin: 0 0 2rem 0;\n}\n\n.article__social, .article__source {\n    color: #737373;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    margin: 0;\n    padding-top: 1rem;\n    padding-left: 1rem;\n\n    svg {margin-right: 0.5rem;}\n    p {font-size: 14px;}\n}\n\n.article__source {\n    font-size: 12px;\n    text-transform: uppercase;\n    padding-top: 0;\n    margin-bottom: 0.5rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/application.scss */ "./src/scss/application.scss");
/* harmony import */ var _scss_application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_application_scss__WEBPACK_IMPORTED_MODULE_0__);


const body = document.querySelector('body');
const sidebar = document.querySelector('.js-sidebar');
const sidebarIcon = document.querySelector('.js-menu');
const sidebarFooter = document.querySelector('.sidebar__footer');
const doneButton = document.querySelector('.js-done');
const sourceContainer = document.querySelector('.js-sources');
const articlesContainer = document.querySelector('.js-articles');

let inputList;

feather.replace();

// adding click events to .js-menu and .js-done
let clickElements = document.querySelectorAll('.js-done, .js-menu');
for (let i = 0; i < clickElements.length; i++) {
  clickElements[i].addEventListener("click", function () {
    toggleSidebar();
  });
}

// this will only execute when the sidebar is open
body.addEventListener('click', () => {
  if (!sidebar.classList.contains('hidden')) {
    // toggle sidebar ONLY when it does not contain class of 'hidden'
    toggleSidebar();
  }
});

// this stops the event from bubbling up to the body
let sidebarElements = document.querySelectorAll('.js-sidebar, .js-menu');
for (let i = 0; i < sidebarElements.length; i++) {
  sidebarElements[i].addEventListener('click', function (e) {
    e.stopPropagation();
  });
}

function toggleSidebar() {
  sidebarIcon.classList.toggle("sidebar-open");
  sidebar.classList.toggle("hidden");
  sidebarFooter.classList.toggle("hidden");

  updateSources();
}

// limit the number of checkboxes that can be checked (limit = 20)
sourceContainer.addEventListener('change', e => {
  const limit = 20;
  let counter = 0;
  let element = e.target; // get the element that was clicked inside the form
  let inputList = document.querySelectorAll('.source__input');

  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].checked === true) {
      counter++;
    }
  }

  if (counter > limit) {
    element.checked = false;
  }
});

function apiString(string) {
  let apiKey;

  if (string == 'sources') {
    apiKey = `https://newsapi.org/v2/${string}?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`;
  } else {
    apiKey = `https://newsapi.org/v2/top-headlines?sources=${string}&apiKey=9e0f251af2d2433793804d01f677f4ba`;
  }

  return apiKey;
}

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

request.open('GET', apiString('sources'), true);
request.onload = function () {

  //categories to sift through
  const categories = ['business', 'entertainment', 'technology', 'general', 'science', 'sports', 'health'];

  // Begin accessing JSON data 
  let data = JSON.parse(this.response);
  let sources = data.sources;

  for (let i = 0; i < categories.length; i++) {
    let filteredArray = sources.filter(sources => {
      return sources.category == categories[i];
    });

    const h3 = document.createElement('h3');

    // To capitalize the first letter of the category
    let category = categories[i].split("");
    category[0] = category[0].toUpperCase();
    category = category.join("");

    h3.textContent = category;

    const sourceGroup = document.createElement('div');
    sourceGroup.setAttribute('class', 'source__group');

    for (let j = 0; j < filteredArray.length; j++) {
      let arraySource = filteredArray[j];

      const div = document.createElement('div');

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', `${arraySource.id}`);
      input.setAttribute('name', 'source');
      input.setAttribute('value', `${arraySource.id}`);
      input.setAttribute('class', 'source__input');

      const label = document.createElement('label');
      label.setAttribute('for', `${arraySource.id}`);
      label.textContent = arraySource.name;

      sourceContainer.appendChild(h3);
      sourceContainer.appendChild(sourceGroup);
      sourceGroup.appendChild(div);
      div.appendChild(input);
      div.appendChild(label);
    }
  }

  inputList = document.querySelectorAll('.source__input');

  if (!localStorage.getItem('sources')) {
    populateStorage();
  } else {
    setSources();
  }
};
request.send();

function populateArticles(sources) {
  request = new XMLHttpRequest();

  request.open('GET', apiString(sources), true);
  request.onload = function () {
    // Begin accessing JSON data 
    let data = JSON.parse(this.response);
    let articles = data.articles;

    for (let i = 0; i < 3; i++) {

      let articleItem = document.createElement('li');
      articleItem.setAttribute('class', 'article__item');

      let articleLink = document.createElement('a');
      articleLink.setAttribute('href', `${articles[i].url}`);

      let imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'article__image__container');

      let img = document.createElement('img');
      img.src = articles[i].urlToImage;

      if (articles[i].urlToImage == null) {
        img.src = "assets/placeholder.jpg";
      } // placeholder if no image path exists

      // waits to load image to check its attributes
      img.addEventListener("load", () => {
        if (img.naturalWidth <= 1) {
          img.src = "assets/placeholder.jpg";
        } // displays placeholder if img is 1px (IGN)
      });

      img.setAttribute('class', 'article__image');
      img.setAttribute('alt', `image for "${articles[i].title}"`);

      let articleDetails = document.createElement('div');
      articleDetails.setAttribute('class', 'article__details');

      let articleSource = document.createElement('p');
      articleSource.setAttribute('class', 'article__source');
      articleSource.textContent = articles[i].source.name;

      if (articles[i].source.name === null) {
        articleSource.textContent = "";
      }

      let articleOverflow = document.createElement('div');
      articleOverflow.setAttribute('class', 'article__overflow');

      let articleTitle = document.createElement('h3');
      articleTitle.setAttribute('class', 'article__title');
      articleTitle.innerHTML = articles[i].title;

      let articleDescription = document.createElement('p');
      articleDescription.setAttribute('class', 'article__description');
      articleDescription.innerHTML = articles[i].description;

      articlesContainer.appendChild(articleItem);
      articleItem.appendChild(articleLink);
      articleLink.appendChild(imageContainer);
      imageContainer.appendChild(img);
      articleLink.appendChild(articleDetails);
      articleDetails.appendChild(articleSource);
      articleDetails.appendChild(articleOverflow);
      articleOverflow.appendChild(articleTitle);
      articleOverflow.appendChild(articleDescription);
    }
  };

  request.send();
}

function setSources() {
  let currentSources = localStorage.getItem('sources');

  let sources = currentSources.split(',');

  // compare sources array items with the array 'inputList'
  for (let i = 0; i < sources.length; i++) {
    for (let j = 0; j < inputList.length; j++) {

      // if there is a match (id) set checked=true and break
      if (sources[i] == inputList[j].id) {
        inputList[j].checked = true;
        break;
      }
    }
  }

  populateArticles(currentSources);
}

function updateSources() {
  let formSourcesArray = [];
  let storedSources = localStorage.getItem('sources');
  inputList = document.querySelectorAll('.source__input');

  // gather a list of all the checked sources
  for (let i = 0; i < inputList.length; i++) {
    // if there is a match (id) set checked=true and break
    if (inputList[i].checked == true) {
      formSourcesArray.push(inputList[i].id);
    }
  }

  // there is more or less sources checked in the form
  if (formSourcesArray.length != storedSources.split(',').length) {
    storedSources = formSourcesArray.join(',');
    update(storedSources);
  } else {
    // check to see if the saved string contains sources from the checked form
    for (let i = 0; i < formSourcesArray.length; i++) {
      // if any checkbox checked on the form is not in the key/value in localstorage 
      if (!storedSources.includes(formSourcesArray[i])) {
        storedSources = formSourcesArray.join(',');
        update(storedSources);
      }
    }
  }

  function update(sources) {
    localStorage.setItem('sources', sources);
    articlesContainer.innerHTML = "";
    populateArticles(sources);
  }
}

function populateStorage() {
  let sources = [];

  // get a list of all the the sources
  for (i = 0; i < inputList.length; i++) {
    sources.push(inputList[i].id);
  }

  // shuffle the array
  sources.shuffle();

  // grabs the first three indexes from the random array of sources
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputList.length; j++) {
      // if the one of the first three sources matches a source, set its checked to true on the page
      if (inputList[j].id == sources[i]) {
        inputList[j].checked = true;
        break;
      }
    }
  }

  // grap random sources from sidebar (3 max)
  newSources = `${sources[0]},${sources[1]},${sources[2]}`;

  // set the localstorage sources key/value pair
  localStorage.setItem('sources', newSources);

  populateArticles(newSources);
}

Array.prototype.shuffle = function () {
  var input = this;

  for (var i = input.length - 1; i >= 0; i--) {

    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};

/***/ }),

/***/ "./src/scss/application.scss":
/*!***********************************!*\
  !*** ./src/scss/application.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/sass-loader/lib/loader.js??ref--5-2!./application.scss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/scss/application.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map