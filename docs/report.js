"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["report"],{

/***/ "./src/pages/report/report.js":
/*!************************************!*\
  !*** ./src/pages/report/report.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_report_reporttext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/report/reporttext.js */ "./src/pages/report/reporttext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pdf_USTC_supplemantary_info_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/pdf/USTC-supplemantary-info.pdf */ "./src/pdf/USTC-supplemantary-info.pdf");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pdf_loadPDF_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pdf/loadPDF.js */ "./src/pdf/loadPDF.js");
/* harmony import */ var _report_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report.css */ "./src/pages/report/report.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_report_reporttext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,C_Users_MuTur_Desktop_2024_USTC_src_pdf_loadPDF_js__WEBPACK_IMPORTED_MODULE_3__["default"])("pdf", C_Users_MuTur_Desktop_2024_USTC_src_pdf_USTC_supplemantary_info_pdf__WEBPACK_IMPORTED_MODULE_2__, 1.37);
$(".next").attr('href', 'supplementary-information.html');

/***/ }),

/***/ "./src/pages/report/reporttext.js":
/*!****************************************!*\
  !*** ./src/pages/report/reporttext.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  text1: [{
    mark: "pdf"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/pdf/loadPDF.js":
/*!****************************!*\
  !*** ./src/pdf/loadPDF.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function loadPDF(id, url, n) {
  var $target = $("#".concat(id));
  var __pdfPath = "./pdfjs/web/viewer.html?file=" + url;
  $target.html("<iframe  width=\"100%\" height=\"800vh\" frameborder=\"0\" />");
  $target.find("iframe").attr("src", __pdfPath);
  function viewboxchange() {
    var times = n * $target.find("iframe").width();
    times = times >= .8 * window.innerHeight ? .8 * window.innerHeight : times;
    $target.find("iframe").css("height", times + "px");
  }
  $(window).on("resize", function () {
    viewboxchange();
  });
  viewboxchange();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPDF);

/***/ }),

/***/ "./src/pages/report/report.css":
/*!*************************************!*\
  !*** ./src/pages/report/report.css ***!
  \*************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pdf/USTC-supplemantary-info.pdf":
/*!*********************************************!*\
  !*** ./src/pdf/USTC-supplemantary-info.pdf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pdfs/USTC-supplemantary-info.pdf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js","vendors-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/report/report.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=report.js.map