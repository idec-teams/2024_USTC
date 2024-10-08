"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["index"],{

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_index_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/index/index.css */ "./src/pages/index/index.css");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_index_indextext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/pages/index/indextext.js */ "./src/pages/index/indextext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var _photo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo.png */ "./src/pages/index/photo.png");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_index_indextext_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
$("#welcome").replaceWith('<div id="welcome"><div class="scroll-message">Welcome to</div><div class="scroll-message">our Studies</div><div class="scroll-message">presented jointly by USTC</div></div>');
$("#picture").closest(".textbox").replaceWith("<img src=\"".concat(_photo_png__WEBPACK_IMPORTED_MODULE_3__, "\" class=\"photo\">"));
$(document).ready(function () {
  // 页面初始状态，检查滚动条是否在顶部并设置文字样式
  if ($(window).scrollTop() === 0) {
    $('.scroll-message').removeClass('blur-fade-out').addClass('clear-fade-in');
  } else {
    $('.scroll-message').removeClass('clear-fade-in').addClass('blur-fade-out');
  }

  // 监听滚动事件
  $(window).on('scroll', function () {
    if ($(window).scrollTop() === 0) {
      // 滚动条在顶部时，文字变为清晰状态
      $('.scroll-message').removeClass('blur-fade-out').addClass('clear-fade-in'); // 添加清晰恢复动画
    } else {
      // 开始滚动，启动模糊消失动画
      $('.scroll-message').removeClass('clear-fade-in').addClass('blur-fade-out'); // 添加模糊消失动画
    }
  });
});
$(".next").attr('href', 'members.html');

/***/ }),

/***/ "./src/pages/index/indextext.js":
/*!**************************************!*\
  !*** ./src/pages/index/indextext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  mark: "welcome",
  text1: [{
    subtitle: "Abstract",
    text: "The synthesis yield of sakuranetin, a compound with extensive medical applications and potential, is constrained by the condensation reaction mediated by chalcone synthase. In recent years, directed evolution has emerged as a promising approach for enhancing protein performance; however, traditional directed evolution techniques encounter challenges in high-throughput screening. By integrating rational design and protein structure analysis, we have modified chalcone synthase and the naringenin sensors TtgR transcriptional repressors. We selected Vibrio natriegens as the host organism due to its superior growth rate and exceptional protein expression capabilities, successfully establishing sensor engineering within this framework. Additionally, codon optimization has been employed to enhance protein expression. This study aims to develop synthetic platforms for naringenin and sakuranetin. Furthermore, we have made preliminary advancements in the development of biosensors capable of endogenous detection, thereby facilitating directed evolution pathways for substances that are difficult to detect, thus highlighting the significant potential of V. natriegens and biosensor technology."
  }],
  title3: [{
    mark: "picture"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/index/photo.png":
/*!***********************************!*\
  !*** ./src/pages/index/photo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/photo.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/index/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map