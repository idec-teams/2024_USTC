"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["index"],{

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_index_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/pages/index/index.css */ "./src/pages/index/index.css");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_index_indextext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/pages/index/indextext.js */ "./src/pages/index/indextext.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/table/table.js */ "./src/table/table.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_table_tablecontrol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/table/tablecontrol.js */ "./src/table/tablecontrol.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_4__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_index_indextext_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
new C_Users_MuTur_Desktop_2024_USTC_src_table_table_js__WEBPACK_IMPORTED_MODULE_2__["default"](C_Users_MuTur_Desktop_2024_USTC_src_pages_index_indextext_js__WEBPACK_IMPORTED_MODULE_1__["default"]).$mount({
  target: document.body
});
$("#welcome").replaceWith('<div id="welcome"><div class="scroll-message">滚动条不在顶部时的文字</div><div class="scroll-message">滚动条不在顶部时的文字</div><div class="scroll-message">滚动条不在顶部时的文字</div></div>');
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
$(".next").attr('href', 'supplementary-information.html');

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
    mark: "test1"
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

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js","vendors-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/index/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map