"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["results"],{

/***/ "./src/pages/results/results.js":
/*!**************************************!*\
  !*** ./src/pages/results/results.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_results_resultstext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/results/resultstext.js */ "./src/pages/results/resultstext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_results_resultstext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
$(".next").attr('href', 'supplementary-information.html');

/***/ }),

/***/ "./src/pages/results/resultstext.js":
/*!******************************************!*\
  !*** ./src/pages/results/resultstext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image_results_results1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @image/results/results1.png */ "./src/image/results/results1.png");
/* harmony import */ var _image_results_results2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @image/results/results2.png */ "./src/image/results/results2.png");
/* harmony import */ var _image_results_results3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @image/results/results3.png */ "./src/image/results/results3.png");
/* harmony import */ var _image_results_results4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @image/results/results4.png */ "./src/image/results/results4.png");




var text = {
  title: [{
    title: "Results"
  }],
  text1: [{
    subtitle: "Plasmid construction for synthetic pathways",
    text: [{
      text: "To increase the protein expression level, we decided to employ T7 promoter to drive the expression of the enzymes. Considering that there's T7 RNA polymerase coding sequence in "
    }, {
      em: "V. natriegens' "
    }, {
      text: "genome and the relatively more complex method to modify its genome, we constructed a T7 RNAP expression cassette. When choosing the plasmid backbone, we found that"
    }, {
      em: "V. natriegens"
    }, {
      text: "can only recognize a few replication origins like f1-ori and p15A-ori, and plasmids with pMB1/pBR322/pUC origin cannot replicate in it. Due to plasmid incompatibility, we chose pETDuet-1 and pACYCDuet-1 as the backbone. The two plasmids have different origins of replication so they can co-exist in "
    }, {
      em: "V. natriegens."
    }, {
      text: "What's more, both of them have two expression cassettes driven by T7 RNAP and LacI/LacO so the expression of protein can be controlled by Isopropyl-beta-D-thiogalactopyranoside (IPTG). We replaced the first expression cassette on pETDuet-1 with T7 RNAP cassette driven by lac promoter, and inserted the 5 genes into remaining 3 expression cassettes. "
    }]
  }, {
    src: _Figure1,
    text: "Figure 1. The structure of pACYCDuet-1-TAL-4CL and pETDuet-1-OMT3-CHI-CHS"
  }, {
    text: "Ultimately, we successfully constructed the pETDuet-14CL-TAL and pACYCDuet-1-OMT3-CHI-CHS plasmids utilizing the AlTAL gene, At4CL gene, PfOMT3, EbCHI gene, and ErCHS gene."
  }, {
    src: _Figure2,
    text: [{
      text: "Figure 2. Electropherogram of colony PCR results. (A) Colony PCR result of "
    }, {
      em: "E. coli "
    }, {
      text: "clones containing pACYCDuet-OMT3-CHI-CHS. (B) Colony PCR result of "
    }, {
      em: "E. coli "
    }, {
      text: "clone containing pETDuet-T7RNAP-4CL-TAL"
    }]
  }, {
    text: "And we also constructed the pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP and pUC57-CHS(F153V/A82M) by means of single mutations."
  }, {
    src: _Figure3,
    text: [{
      text: "Figure 3. Electropherogram of colony PCR results. (A) Colony PCR result of "
    }, {
      em: "E. coli "
    }, {
      text: "clones containing pUC57-CHS(F153V/A82M). (B) Colony PCR result of "
    }, {
      em: "E. coli"
    }, {
      text: "clone containing pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP."
    }]
  }, {
    text: [{
      text: "We are still working on transforming these pathways plasmids into "
    }, {
      em: "V. natriegens"
    }, {
      text: " following culturing and the further product inspection."
    }]
  }],
  text2: [{
    subtitle: "Biosensor Validation",
    text: [{
      text: "It is noteworthy that naringenin itself, as a flavonoid, has an inhibitory effect on the growth of "
    }, {
      em: "V. natriegens. "
    }, {
      text: "This was found through the comparative graphs of growth curves, which may likewise affect the effect of protein expression."
    }]
  }, {
    src: _Figure5,
    text: [{
      text: "Figure 4. Verifying the effectivity of TtgR-GFP sensor. A. Growth curve of "
    }, {
      em: "V.natriegens "
    }, {
      text: "in different concentration of naringenin; B. Ratio of GFP fluorescence:OD600 (relative fluorescence intensity) under different concentration of naringenin; C. Relative fluorescence intensity under different concentration of naringenin.(B: 150min fitted curve R2 :0.775; 180min fitted curve R2 :0.943; 210min fitted curve R2 :0.782; 240min fitted curve R2"
    }]
  }, {
    text: "The GFP showed a certain fluorescence intensity without the addition of inducers, resulting in a certain fluorescence leakage. In the available data obtained, we get the expected, linear growth curve over a range of inducer concentrations. According to the fitted curve, the effect caused by background fluorescence gradually decreased with time, and the homogenized fluorescence intensity showed a relatively stable linear enhancement relationship with naringenin concentration after the incubation time reached 150 min. Although the homogenized relative fluorescence units (RFU) values do not show a clear multiplicative relationship, their stable linear relationship proves that they can be used to assist High-through screening for directed evolution."
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/image/results/results1.png":
/*!****************************************!*\
  !*** ./src/image/results/results1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/results1.png";

/***/ }),

/***/ "./src/image/results/results2.png":
/*!****************************************!*\
  !*** ./src/image/results/results2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/results2.png";

/***/ }),

/***/ "./src/image/results/results3.png":
/*!****************************************!*\
  !*** ./src/image/results/results3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/results3.png";

/***/ }),

/***/ "./src/image/results/results4.png":
/*!****************************************!*\
  !*** ./src/image/results/results4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/results4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js","vendors-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/results/results.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=results.js.map