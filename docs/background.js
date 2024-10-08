"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["background"],{

/***/ "./src/pages/background/background.js":
/*!********************************************!*\
  !*** ./src/pages/background/background.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_background_backgroundtext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/background/backgroundtext.js */ "./src/pages/background/backgroundtext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/table/table.js */ "./src/table/table.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_tablecontrol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/table/tablecontrol.js */ "./src/table/tablecontrol.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_background_backgroundtext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
new C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__["default"]().$mount({
  target: document.body
});
$(".next").attr('href', './supplementary-information.html');

/***/ }),

/***/ "./src/pages/background/backgroundtext.js":
/*!************************************************!*\
  !*** ./src/pages/background/backgroundtext.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  title: [{
    title: "Background"
  }],
  text1: [{
    subtitle: "Sakuranetin and Naringenin",
    text: "Sakuranetin (4,5-dihydroxy-7-methoxyflavanone) is a compound that belongs to dihydroflavonoid. In plants, it is synthesized from the precursor substance naringenin and exists as a phenolic plant antitoxin. In recent years, sakuranetin have been widely reported for its multiple pharmacological benefits, including antioxidant, anti-inflammatory, antimycobacterial, anti-viral, anti-fungal, anti-Leishmania protozoan, anti-trypanosomal, glucose uptake stimulation, neuroprotective, antiretroviral generation, and antitumor properties. Today, most flavonoids are synthesized either by direct extraction from plants or by chemical synthesis methods. However, direct extraction is limited by plant growth conditions and the unstable biomass supply for continuous production of flavonoids is unstable. Moreover, the two existing methods of extraction are costly and cannot meet the requirements of industrialized production. "
  }, {
    text: [{
      text: "Biosynthesis, as a highly potential production method, has been reported in articles using chassis such as"
    }, {
      em: " Escherichia coli (E. coli)"
    }, {
      text: "And"
    }, {
      em: " Saccharomyces cerevisiae "
    }, {
      text: "as model organisms, but the yield is still a long way from reaching the large scale. As reported, this pathway is limited by the condensation reaction of p-coumaroyl coenzyme A with three molecules of malonyl-CoA, which is catalyzed by chalcone synthase. Optimization of the enzymatic profile of chalcone synthase becomes critical for improving yield. When considering how to optimized the pathway to maximize the output, we use several methods in our design: to use the enzyme in the pathway with high catalytic activity, to get better chalcone synthase and to increase the protein expression level by using codon optimized coding sequence and high-efficient promoters."
    }]
  }],
  text2: [{
    subtitle: [{
      em: "Vibrio natriegens"
    }],
    text: [{
      em: "Vibrio natriegens"
    }, {
      text: " is a Gram-negative marine bacterium with a fast growth rate of 15.61 ± 0.18 min in the logarithmic phase, compared with 27.23 ± 0.69 min for "
    }, {
      em: "E. coli"
    }, {
      text: " cells. Compared with common chassis organisms such as yeast and "
    }, {
      em: "E. coli"
    }, {
      text: ", "
    }, {
      em: "V. natriegens"
    }, {
      text: " has a faster growth rate, a broader substrate spectrum, superior substrate uptake and an abundant number of ribosomes in the cell, which contributes to its excellent exogenous protein expression ability, so V. natriegens is a new type of chassis cell that has been developed in the field of biotechnology and synthetic biology in recent years. Based on its excellent biological properties, a variety of natural products and proteins, such as L-DOPA"
    }, {
      citation: {
        text: "1",
        href: "./Reference.html?citation=1"
      }
    }, {
      text: ", melanin"
    }, {
      citation: {
        text: "2",
        href: "./Reference.html?citation=2"
      }
    }, {
      text: ", c-type cytochromes"
    }, {
      citation: {
        text: "3",
        href: "./Reference.html?citation=3"
      }
    }, {
      text: " and other substances, have been efficiently biosynthesized in "
    }, {
      em: "V. natriegens"
    }, {
      text: ". Moreover, Vibrio exhibits robust applicability to commonly used synthetic biology parts. The synthetic biology tools for the "
    }, {
      em: "V. natriegens"
    }, {
      text: " are maturing, which shows further promises. "
    }]
  }],
  text3: [{
    subtitle: "Biosensor",
    text: [{
      text: "In the directed evolution process, high-throughput screening is the main bottleneck. Biosensors offer the benefits of high sensitivity, real-time monitoring, and efficiency properties. Previous flavonoid product assays have relied on high performance liquid chromatography (HPLC), which requires much time and effort. Due to the relative stability of the intracellular environment, biosensors are highly resistant to interference without the need of complex sample preprocessing, which means it can eliminate the need for purification of cultures as well as enrichment. In the process of directed evolution, it offers an excellent way to characterize signals. What’s more, a variety of genetic engineering tools, such as different promoters, RBS, circuits and CDSs can further alter the sensitivity of biosensors by modulating protein expression, indicating finer detection. In our study, we choose to express the TtgABC-TtgR system derived from "
    }, {
      em: "Pseudomonas putida "
    }, {
      text: "DOT-T1E in "
    }, {
      em: "V. natriegens, "
    }, {
      text: "and it can reflect the product concentration in real time and efficiently."
    }]
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/background/background.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=background.js.map