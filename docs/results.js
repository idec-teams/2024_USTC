"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["results"],{

/***/ "./src/pages/results/results.js":
/*!**************************************!*\
  !*** ./src/pages/results/results.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_results_resultstext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/results/resultstext.js */ "./src/pages/results/resultstext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/table/table.js */ "./src/table/table.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_tablecontrol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/table/tablecontrol.js */ "./src/table/tablecontrol.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_results_resultstext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


new C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__["default"](C_Users_MuTur_Desktop_2024_USTC_src_pages_results_resultstext_js__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount({
  target: document.body
});
$(".next").attr('href', 'discussion.html');

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
      text: "genome and the relatively more complex method to modify its genome, we constructed a T7 RNAP expression cassette. When choosing the plasmid backbone, we found that "
    }, {
      em: "V. natriegens"
    }, {
      text: " can only recognize a few replication origins like f1-ori and p15A-ori, and plasmids with pMB1/pBR322/pUC origin cannot replicate in it. Due to plasmid incompatibility, we chose pETDuet-1 and pACYCDuet-1 as the backbone. The two plasmids have different origins of replication so they can co-exist in "
    }, {
      em: "V. natriegens."
    }, {
      text: "What's more, both of them have two expression cassettes driven by T7 RNAP and LacI/LacO so the expression of protein can be controlled by Isopropyl-beta-D-thiogalactopyranoside (IPTG). We replaced the first expression cassette on pETDuet-1 with T7 RNAP cassette driven by lac promoter, and inserted the 5 genes into remaining 3 expression cassettes. "
    }]
  }, {
    src: _image_results_results1_png__WEBPACK_IMPORTED_MODULE_0__,
    text: "Figure 1. The structure of pACYCDuet-1-TAL-4CL and pETDuet-1-OMT3-CHI-CHS"
  }, {
    text: "Ultimately, we successfully constructed the pETDuet-14CL-TAL and pACYCDuet-1-OMT3-CHI-CHS plasmids utilizing the AlTAL gene, At4CL gene, PfOMT3, EbCHI gene, and ErCHS gene."
  }, {
    src: _image_results_results2_png__WEBPACK_IMPORTED_MODULE_1__,
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
    src: _image_results_results3_png__WEBPACK_IMPORTED_MODULE_2__,
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
    src: _image_results_results4_png__WEBPACK_IMPORTED_MODULE_3__,
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

/***/ "./src/table/table.js":
/*!****************************!*\
  !*** ./src/table/table.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _table_eft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.eft */ "./src/table/table.eft");
/* harmony import */ var _tableitem_eft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableitem.eft */ "./src/table/tableitem.eft");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }


// import tablelist from "./tablelist.json";
var tableCreate = /*#__PURE__*/_createClass(function tableCreate() {
  _classCallCheck(this, tableCreate);
  var tableT = new _table_eft__WEBPACK_IMPORTED_MODULE_0__["default"]();
  $(".textbox-container").find("h1, h2").each(function () {
    var id = $(this).attr("id");
    if (id) {
      if ($(this).is("h1")) {
        tableT.list.push(new _tableitem_eft__WEBPACK_IMPORTED_MODULE_1__["default"]({
          $data: {
            title: id,
            dif: "title"
          },
          $methods: {
            scroll: function scroll(_ref) {
              var state = _ref.state;
              var safeTitle = state.$data.title.replace(/ /g, "\\ ");
              var $target = $("#" + safeTitle);
              $("html, body").animate({
                scrollTop: $target.offset().top
              }, 800);
            }
          }
        }));
      } else if ($(this).is("h2")) {
        tableT.list.push(new _tableitem_eft__WEBPACK_IMPORTED_MODULE_1__["default"]({
          $data: {
            title: id
          },
          $methods: {
            scroll: function scroll(_ref2) {
              var state = _ref2.state;
              var safeTitle = state.$data.title.replace(/ /g, "\\ ");
              var $target = $("#" + safeTitle);
              $("html, body").animate({
                scrollTop: $target.offset().top
              }, 800);
            }
          }
        }));
      }
    }
  });
  return tableT;
}); // class tableCreate {
//   constructor(textlist) {
//     const tableT = new table();
//     for (let [key, value] of Object.entries(textlist)) {
//       if (key !== "mark") {
//         value.forEach(function (element) {
//           if (element.title) {
//           }
//           if (element.subtitle) {
//           }
//         });
//       }
//     }
//     return tableT;
//   }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableCreate);

/***/ }),

/***/ "./src/table/tablecontrol.js":
/*!***********************************!*\
  !*** ./src/table/tablecontrol.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_table_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/table/table.css */ "./src/table/table.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
  $(document).on("scroll", function () {
    var scrollPosition = $(this).scrollTop();
    var windowHeight = $(window).height();
    $(".text h1, .text h2").each(function () {
      var elementOffset = $(this).position().top;
      var elementHeight = $(this).parent(".text").outerHeight();
      if (scrollPosition >= elementOffset - 40 && scrollPosition < elementOffset + elementHeight) {
        var id = $(this).attr("id").trim();
        var matchingIndex = $(".table .table-title").filter(function () {
          return $(this).text().trim() === id;
        });
        $(".table .table-title").removeClass("enlarged");
        matchingIndex.addClass("enlarged");
      }
    });
    $(".text").each(function () {
      var textOffset = $(this).offset().top;
      var textHeight = $(this).outerHeight();
      if (textOffset + textHeight < scrollPosition || textOffset > scrollPosition + windowHeight) {
        $(this).find("h1, h2").each(function () {
          var id = $(this).attr("id").trim();
          var matchingIndex = $(".table .table-title").filter(function () {
            return $(this).text().trim() === id;
          });
          matchingIndex.removeClass("enlarged");
        });
      }
    });
  });
  $(".table-title").hover(function () {
    $(this).css("color", "red");
  }, function () {
    $(this).css("color", "black");
  });
});

/***/ }),

/***/ "./src/table/table.eft":
/*!*****************************!*\
  !*** ./src/table/table.eft ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Table extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'div',a:{class:'table-container'}},[{t:'div',a:{class:'table'}},{n:'list',t:1}]]) {
};


/***/ }),

/***/ "./src/table/tableitem.eft":
/*!*********************************!*\
  !*** ./src/table/tableitem.eft ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tableitem)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Tableitem extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'div',a:{class:[['table-title ',''],[['dif']]]},e:[{l:'click',m:'scroll'}]},[['title']]]) {
};


/***/ }),

/***/ "./src/table/table.css":
/*!*****************************!*\
  !*** ./src/table/table.css ***!
  \*****************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/results/results.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=results.js.map