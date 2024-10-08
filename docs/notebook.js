"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["notebook"],{

/***/ "./src/pages/notebook/notebook.js":
/*!****************************************!*\
  !*** ./src/pages/notebook/notebook.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_notebook_notebooktext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/notebook/notebooktext.js */ "./src/pages/notebook/notebooktext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/table/table.js */ "./src/table/table.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_tablecontrol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/table/tablecontrol.js */ "./src/table/tablecontrol.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_notebook_notebooktext_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
new C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__["default"](C_Users_MuTur_Desktop_2024_USTC_src_pages_notebook_notebooktext_js__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount({
  target: document.body
});
$(".next").attr('href', 'supplementary-information.html');

/***/ }),

/***/ "./src/pages/notebook/notebooktext.js":
/*!********************************************!*\
  !*** ./src/pages/notebook/notebooktext.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  title: [{
    title: "Notebook"
  }],
  text1: [{
    subtitle: "June"
  }, {
    ollist: [{
      text: "Preliminary research"
    }, {
      text: "Discuss about the direction and design of the subject"
    }]
  }],
  text2: [{
    subtitle: "July"
  }, {
    ollist: [{
      text: "Codon optimization model debugging"
    }, {
      text: "Gene synthesis"
    }, {
      text: "Plasmids construction for synthetic pathways"
    }, {
      text: [{
        text: "Investigation and optimization of culture conditions of "
      }, {
        em: "Vibrio natriegens "
      }]
    }, {
      text: "Preparation and Transformation of chemically competent cells"
    }, {
      text: "Colony PCR to check the result of transformation"
    }]
  }],
  text3: [{
    subtitle: "August"
  }, {
    ollist: [{
      text: "Preparation of electrocompetent cells and Electroporation"
    }, {
      text: [{
        text: "Electroporation of the "
      }, {
        em: "Vibrio natriegens"
      }]
    }, {
      text: "Colony PCR to check the result of transformation"
    }, {
      text: "Mutation library construction"
    }]
  }],
  text4: [{
    subtitle: "September-October"
  }, {
    ollist: [{
      text: "Biosensor Plasmids Construction and validation"
    }, {
      text: "Discuss about the direction and design of the subject"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/notebook/notebook.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=notebook.js.map