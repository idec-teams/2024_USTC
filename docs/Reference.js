"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["Reference"],{

/***/ "./src/pages/Reference/Reference.js":
/*!******************************************!*\
  !*** ./src/pages/Reference/Reference.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_Reference_Referencetext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/Reference/Referencetext.js */ "./src/pages/Reference/Referencetext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var _Reference_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference.css */ "./src/pages/Reference/Reference.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_Reference_Referencetext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
$(document).ready(function () {
  // 获取网址中的citation参数
  var params = new URLSearchParams(window.location.search);
  var citation = parseInt(params.get("citation"), 10);

  // 如果citation有效，则调用highlightCitation函数
  if (!isNaN(citation)) {
    highlightCitation(citation);
  }
});
function highlightCitation(citation) {
  var $li = $("ol li").eq(citation - 1); // 获取对应的li元素
  console.log($li.length);
  if ($li.length) {
    setTimeout(function () {
      $li.addClass("highlight");
    }, 500);
    var offset = $li.offset().top - ($(window).height() / 2 - $li.outerHeight() / 2);
    $("html, body").animate({
      scrollTop: offset
    }, 500);
  }
}
$(".next").attr('href', 'supplementary-information.html');

/***/ }),

/***/ "./src/pages/Reference/Referencetext.js":
/*!**********************************************!*\
  !*** ./src/pages/Reference/Referencetext.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  title1: [{
    title: "Reference"
  }],
  text1: [{
    ollist: [{
      text: "Liu X, Han X, Rapid production of l-DOPA by Vibrio natriegens, an emerging next-generation whole-cell catalysis chassis. Thematic Issue: Microbial Biotechnology for Food Production 15, 1610-1621 (2022). DOI: https://doi.org/10.1111/1751-7915.14001"
    }, {
      text: "Smith AD, Tschirhart T, Rapid, high-titer biosynthesis of melanin using the marine bacterium Vibrio natriegens, Front Bioeng Biotechnol 11, 1239756 (2023). DOI: https://doi.org/10.3389/fbioe.2023.1239756"
    }, {
      text: "Fuchs H, Ullrich S, Vibrio natriegens as a superior host for the production of c-type cytochromes and difficult-to-express redox proteins. Sci Rep 14, 6093 (2024). DOI: https://doi.org/10.1038/s41598-024-54097-7"
    }, {
      text: "Wang Y, Chen S, Yu O, Metabolic engineering of flavonoids in plants and microorganisms. Appl Microbiol Biotechnol 91, 949–956 (2011). DOI: https://doi.org/10.1007/s00253-011-3449-2"
    }, {
      text: "Chung BKS, Lee DY, Computational codon optimization of synthetic gene for protein expression. BMC Syst Biol 6, 134 (2012). DOI: https://doi.org/10.1186/1752-0509-6-134"
    }, {
      text: "Tu S, Xiao F, Mei C, De novo biosynthesis of sakuranetin from glucose by engineered Saccharomyces cerevisiae. Appl Microbiol Biotechnol 107, 3899–3909 (2023). DOI: https://doi.org/10.1007/s00253-023-12564-7"
    }, {
      text: "Xiong D, Lu S, Wu J, Improving key enzyme activity in phenylpropanoid pathway with a designed biosensor. Metabolic Engineering 40, 115-123 (2017). DOI: https://doi.org/10.1016/j.ymben.2017.01.006"
    }, {
      text: "Espinosa-Urgel Serrano, Engineering Biological Approaches for Detection of Toxic Compounds: A New Microbial Biosensor Based on the Pseudomonas putida TtgR Repressor. Mol Biotechnol 57, 558–564 (2015). DOI: https://doi.org/10.1007/s12033-015-9849-2"
    }, {
      text: "Daniels Craig, Domain Cross-talk during Effector Binding to the Multidrug Binding TTGR Regulator. Journal of Biological Chemistry 285, 21372–21381 (2010). DOI: https://doi.org/10.1074/jbc.M110.113282"
    }, {
      text: "Stompor M, A Review on Sources and Pharmacological Aspects of Sakuranetin. Nutrients 2020, 513 (2020). DOI: https://doi.org/10.3390/nu12020513"
    }, {
      text: "Fernandez-Escamilla AM, Fernandez-Ballester G, Molecular Binding Mechanism of TtgR Repressor to Antibiotics and Antimicrobials. PLoS ONE 10, 9 (2015). DOI: https://doi.org/10.1371/journal.pone.0138469"
    }, {
      text: "Alguel Y, Meng C, Crystal structures of multidrug binding protein TtgR in complex with antibiotics and plant antimicrobials. J Mol Biol 369, 829-840 (2007). DOI: https://doi.org/10.1016/j.jmb.2007.03.062"
    }, {
      text: "Xiang, Zhang X, Designing a highly efficient type III polyketide whole-cell catalyst with minimized byproduct formation. Biotechnology for Biofuels and Bioproducts 17, 93 (2024). DOI: https://doi.org/10.1186/s13068-024-02545-x"
    }, {
      text: "Aiswarya G, Mallika, Ectopic expression and functional characterization of type III polyketide synthase mutants from Emblica officinalis Gaertn. Plant Cell Rep 35, 2077–2090 (2016). DOI: https://doi.org/10.1007/s00299-016-2020-0"
    }, {
      text: "Tong Y, Li N, Improvement of Chalcone Synthase Activity and High-Efficiency Fermentative Production of (2S)-Naringenin via In Vivo Biosensor-Guided Directed Evolution. ACS Synthetic Biology 13 (2024). DOI: https://doi.org/10.1021/acssynbio.3c00570"
    }, {
      text: "Tschirhart T, Shukla V, Synthetic Biology Tools for the Fast-Growing Marine Bacterium Vibrio natriegens. ACS Synthetic Biology 8, 2069-2079 (2019). DOI: https://doi.org/10.1021/acssynbio.9b00176"
    }, {
      text: "Hoff J, Daniel B, Vibrio natriegens: an ultrafast-growing marine bacterium as emerging synthetic biology chassis. Environmental Microbiology 22, 4394-4408 (2020). DOI: https://doi.org/10.1111/1462-2920.15128"
    }, {
      text: "Park HL, Lee JC, Biochemical Characterization of a Flavonoid O-methyltransferase from Perilla Leaves and Its Application in 7-Methoxyflavonoid Production. Molecules 25, 4455 (2020). DOI: https://doi.org/10.3390/molecules25194455"
    }, {
      text: "Weinstock M, Hesek, Vibrio natriegens as a fast-growing host for molecular biology. Nat Methods 13, 849–851 (2016). DOI: https://doi.org/10.1038/nmeth.3970"
    }, {
      text: "Liu X, Han X, Rapid production of l-DOPA by Vibrio natriegens, an emerging next-generation whole-cell catalysis chassis. Thematic Issue: Microbial Biotechnology for Food Production 15, 1610-1621 (2022). DOI: https://doi.org/10.1111/1751-7915.14001"
    }, {
      text: "Alguel Y, Meng C, Crystal structures of multidrug binding protein TtgR in complex with antibiotics and plant antimicrobials. J Mol Biol 36, 829-840 (2007). DOI: https://doi.org/10.1016/j.jmb.2007.03.062"
    }]
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/pages/Reference/Reference.css":
/*!*******************************************!*\
  !*** ./src/pages/Reference/Reference.css ***!
  \*******************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/Reference/Reference.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=Reference.js.map