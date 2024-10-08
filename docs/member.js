"use strict";
(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["member"],{

/***/ "./src/memberbox/memberbox.js":
/*!************************************!*\
  !*** ./src/memberbox/memberbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberbox_eft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/memberbox/memberbox.eft */ "./src/memberbox/memberbox.eft");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_memberbox_individualbox_eft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/memberbox/individualbox.eft */ "./src/memberbox/individualbox.eft");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_eft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/textbox/textbox.eft */ "./src/textbox/textbox.eft");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberlist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/memberbox/memberlist.js */ "./src/memberbox/memberlist.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberbox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/memberbox/memberbox.css */ "./src/memberbox/memberbox.css");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





// class memberBoxCreate extends textbox {
//   constructor() {
//     super();
//     const memberBox = new memberbox();
//     memberBox.list.push(new individualbox());
//     this.memberlist = memberBox;
//   }
// }
// new memberBoxCreate().$mount({ target: document.body });
new C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_eft__WEBPACK_IMPORTED_MODULE_2__["default"]().$mount({
  target: document.body
});
console.log(1111);
var _loop = function _loop() {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
    key = _Object$entries$_i[0],
    value = _Object$entries$_i[1];
  // console.log(document.querySelector("div.container"));

  var memberBox = new C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberbox_eft__WEBPACK_IMPORTED_MODULE_0__["default"]({
    $data: {
      title: key
    }
  });
  var array = [];
  value.forEach(function (element) {
    array.push(new C_Users_MuTur_Desktop_2024_USTC_src_memberbox_individualbox_eft__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $data: {
        src: element.src,
        name: element.name,
        introduction: element.introduction
      }
    }));
  });
  memberBox["list"] = array;
  memberBox.$mount({
    target: document.querySelector(".textbox"),
    option: {
      append: true
    }
  });
};
for (var _i = 0, _Object$entries = Object.entries(C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberlist_js__WEBPACK_IMPORTED_MODULE_3__["default"]); _i < _Object$entries.length; _i++) {
  _loop();
}
$(".member-photo-container").hover(function () {
  $(this).css("transform", "scale(1.2)");
}, function () {
  $(this).css("transform", "scale(1)");
});
$(".member-photo").on("cilck", function () {
  console.log($(this));

  // $(this).siblings(".introduction").css("display", "block");
});
var $clickedElement = null; // 用于记录当前被放大的父元素

// 监听子元素的点击事件，并在事件中操作父元素
$(".member-container .member-photo-container").on("click", function (e) {
  e.stopPropagation(); // 阻止事件冒泡，防止触发 document 的点击事件

  var $parent = $(this).closest(".member-container"); // 找到子元素最近的 .member-container 父元素
  var $introduction = $parent.find(".introduction"); // 获取 .introduction 元素
  var $overlay = $(".overlay"); // 获取遮罩层

  // 如果点击的父元素已经被放大，再次点击则恢复原状
  if ($clickedElement && $clickedElement.is($parent)) {
    $parent.css({
      transform: "scale(1) translate(0px, 0px)",
      // 恢复原始大小和位置
      "z-index": 0
    });
    $introduction.removeClass("show").addClass("hide"); // 切换到隐藏动画
    setTimeout(function () {
      $introduction.removeClass("hide");
    }, 600); // 在动画完成后（600ms）重置状态

    // 隐藏遮罩层
    $overlay.removeClass("show");
    $clickedElement = null; // 重置点击状态
  } else {
    // 如果有其他父元素被放大，则先将其恢复原状
    if ($clickedElement) {
      var $prevIntroduction = $clickedElement.find(".introduction");
      $clickedElement.css({
        transform: "scale(1) translate(0px, 0px)",
        "z-index": 0
      });
      $prevIntroduction.removeClass("show").addClass("hide"); // 切换之前元素为隐藏状态
      setTimeout(function () {
        $prevIntroduction.removeClass("hide");
      }, 600); // 在动画完成后（600ms）重置状态
    }

    // 获取当前父元素的偏移量
    var top = $parent.offset().top;
    var left = $parent.offset().left;

    // 获取视口的高度和宽度
    var viewportHeight = $(window).height();
    var viewportWidth = $(window).width();

    // 获取页面滚动位置
    var scrollTop = $(window).scrollTop();

    // 计算元素居中视口的位置（考虑滚动条位置）
    var topPosition = (scrollTop + viewportHeight / 2 - top - $parent.outerHeight() * 1.5) / 2;
    var leftPosition = (viewportWidth / 2 - left) / 2;

    // 放大并移动父元素到视口中央位置
    $parent.css({
      transform: "scale(1.8) translate(".concat(leftPosition, "px, ").concat(topPosition, "px)"),
      "z-index": 30 // 设置 z-index 为较小的值
    });
    $introduction.removeClass("hide").addClass("show"); // 切换为显示状态的动画

    // 显示遮罩层，使其覆盖其他所有元素（除了当前放大元素和 .sidebar-for-window）
    $overlay.addClass("show");

    // 确保被放大的元素不会被变暗
    $parent.css({
      "z-index": 30 // 确保放大元素在遮罩层之上
    });
    $clickedElement = $parent; // 记录当前被放大的父元素
  }
});

// 处理点击页面其他位置时恢复放大的父元素
$(document).on("click", function () {
  if ($clickedElement) {
    var $introduction = $clickedElement.find(".introduction");
    var $overlay = $(".overlay"); // 获取遮罩层

    $clickedElement.css({
      transform: "scale(1) translate(0px, 0px)",
      // 恢复原始大小和位置
      "z-index": 0
    });
    $introduction.removeClass("show").addClass("hide"); // 切换为隐藏状态的动画
    setTimeout(function () {
      $introduction.removeClass("hide"); // 重置状态，确保后续正常显示
    }, 600);

    // 隐藏遮罩层
    $overlay.removeClass("show");
    $clickedElement = null;
  }
});

//防止.introduction缩小和消失
$(".member-container .introduction").on("click", function (e) {
  e.stopPropagation();
});

/***/ }),

/***/ "./src/memberbox/memberlist.js":
/*!*************************************!*\
  !*** ./src/memberbox/memberlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_AoqiZhang_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/image/member/AoqiZhang.jpg */ "./src/image/member/AoqiZhang.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_HanyiFu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/image/member/HanyiFu.jpg */ "./src/image/member/HanyiFu.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_HeyuanGao_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/image/member/HeyuanGao.jpg */ "./src/image/member/HeyuanGao.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiaminDong_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/image/member/JiaminDong.jpg */ "./src/image/member/JiaminDong.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiazheSun_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/image/member/JiazheSun.jpg */ "./src/image/member/JiazheSun.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_LehengLo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/image/member/LehengLo.jpg */ "./src/image/member/LehengLo.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_NanJiang_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/image/member/NanJiang.jpg */ "./src/image/member/NanJiang.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_ShengtengZhang_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/image/member/ShengtengZhang.jpg */ "./src/image/member/ShengtengZhang.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_TingxuanKong_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/image/member/TingxuanKong.jpg */ "./src/image/member/TingxuanKong.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_WenxinYi_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/image/member/WenxinYi.png */ "./src/image/member/WenxinYi.png");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_XuBao_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/image/member/XuBao.jpg */ "./src/image/member/XuBao.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_YihengFan_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/image/member/YihengFan.jpg */ "./src/image/member/YihengFan.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_YilingMa_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/image/member/YilingMa.jpg */ "./src/image/member/YilingMa.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_ZehuiYu_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/image/member/ZehuiYu.jpg */ "./src/image/member/ZehuiYu.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiongHong_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/image/member/JiongHong.jpg */ "./src/image/member/JiongHong.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_QianZhang_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/image/member/QianZhang.jpg */ "./src/image/member/QianZhang.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_FengyuanYang_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/image/member/FengyuanYang.jpeg */ "./src/image/member/FengyuanYang.jpeg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_YangzhiWang_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/image/member/YangzhiWang.jpg */ "./src/image/member/YangzhiWang.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_ZichongXu_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/image/member/ZichongXu.jpg */ "./src/image/member/ZichongXu.jpg");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_image_member_SiruiFu_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/image/member/SiruiFu.jpg */ "./src/image/member/SiruiFu.jpg");




















var memberlist = {
  PI: [{
    name: "Jiong Hong",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiongHong_jpg__WEBPACK_IMPORTED_MODULE_14__,
    introduction: "hello"
  }, {
    name: "Qian Zhang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_QianZhang_jpg__WEBPACK_IMPORTED_MODULE_15__,
    introduction: "hello"
  }],
  Advisor: [{
    name: "Fengyuan Yang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_FengyuanYang_jpeg__WEBPACK_IMPORTED_MODULE_16__,
    introduction: "hello"
  }, {
    name: "Jiamin Dong",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiaminDong_jpg__WEBPACK_IMPORTED_MODULE_3__,
    introduction: "Jiamin Dong, a passionate undergraduate at the University of Science and Technology of China, who loves synthetic biology and has made contributions to the idec experiment in 2024. Through this experience, I have gained a deeper understanding of the responsibilities we bear and believe strongly in the significance of connecting research with society."
  }],
  "Team Leader": [{
    name: "Leheng Luo",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_LehengLo_jpg__WEBPACK_IMPORTED_MODULE_5__,
    introduction: "I am the leader of this team and this experience does benefit me a lot.I have a passion for the life sciences and i'm especially interested in memory and consciousness.\nMoreover ,I loves cats and books.Welcome to contact me!"
  }],
  Member: [{
    name: "Yiheng Fan",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_YihengFan_jpg__WEBPACK_IMPORTED_MODULE_11__,
    introduction: "Hello! I'm Fan Yiheng, a member of the team from the University of Science and Technology of China in the iDEC. With a keen interest in evolutionary techniques, I mainly participated in the construction of plasmids. Excited to collaborate and learn from everyone here!"
  }, {
    name: "Hanyi Fu",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_HanyiFu_jpg__WEBPACK_IMPORTED_MODULE_1__,
    introduction: "Hello, I'm Fu Hanyi. A bookworm with a passion for painting and a heart for anime and games."
  }, {
    name: "Xu Bao",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_XuBao_jpg__WEBPACK_IMPORTED_MODULE_10__,
    introduction: "My name is Bao Xu,from Lu an An hui.And I'm from University of Science and Technology of China. I am a team member of iDEC, involved in specific experimental work."
  }, {
    name: "Nan Jiang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_NanJiang_jpg__WEBPACK_IMPORTED_MODULE_6__,
    introduction: "Hello! I'm Nan Jiang, a student majoring in biology in USTC. My main task is experiment. I'm happy to be a part of our team and have already learned so much from this experience."
  }, {
    name: "Jiaze Sun",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_JiazheSun_jpg__WEBPACK_IMPORTED_MODULE_4__,
    introduction: "I'm Sun Jiazhe,a sophomore student from USTC.Interested in frontiers of biology,I'm now trying to be a qualified researcher.At the same time,I'm teaching severa junior high school students common sense in biology to stimulate their interest."
  }, {
    name: "Wenxin Yi",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_WenxinYi_png__WEBPACK_IMPORTED_MODULE_9__,
    introduction: "My name is Yi Wenxin and I am a sophomore in the School of Life Sciences, University of Science and Technology of China"
  }, {
    name: "Zehui Yu",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_ZehuiYu_jpg__WEBPACK_IMPORTED_MODULE_13__,
    introduction: "I'm in the experimental group. I believe that every operation, positive or negative, is a success"
  }, {
    name: "Aoqi Zhang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_AoqiZhang_jpg__WEBPACK_IMPORTED_MODULE_0__,
    introduction: "Hello,I'm Zhang Aoqi,a student majoring in bioscience at the University of Science and Technology of China. I'm interested in synthetic biology and genomics.As a member of IDEC,hope we can have an interesting time together and a sastsifying result."
  }, {
    name: "Shengteng Zhang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_ShengtengZhang_jpg__WEBPACK_IMPORTED_MODULE_7__,
    introduction: "Shengteng Zhang,21,a junior student.A lazy dog and a esports amateur. "
  }, {
    name: "Tingxuan Kong",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_TingxuanKong_jpg__WEBPACK_IMPORTED_MODULE_8__,
    introduction: "Hello, I am Kong Tingxuan, a member of the iDEC team this year.\nIn the team, I take part in the experiment and I also take charge of purchasing experimental materials."
  }, {
    name: "Heyuan Gao",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_HeyuanGao_jpg__WEBPACK_IMPORTED_MODULE_2__,
    introduction: "Hello everyone! I'm Heyuan Gao, a sophomore from USTC. I have strong passion for biology. In daily life,I'm easygoing and enthusiastic while in the lab I turn to be serious and hardworking. Hope our teamwork  could get a satisfying result!"
  }, {
    name: "Yangzhi Wang",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_YangzhiWang_jpg__WEBPACK_IMPORTED_MODULE_17__,
    introduction: "hello"
  }, {
    name: "Sirui Fu",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_SiruiFu_jpg__WEBPACK_IMPORTED_MODULE_19__,
    introduction: "My name is Fu Sirui, a sophomore student at the School of Life Sciences, University of Science and Technology of China. I am responsible for conducting experiments and computer modeling."
  }, {
    name: "Yiling Ma",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_YilingMa_jpg__WEBPACK_IMPORTED_MODULE_12__,
    introduction: "I'm Ma Yiling from USTC. I participated in all stages of our experiment this year. And the background part of our report was written by me.\nFor myself, iDEC is a perfect experience to learn knowledge in practice. And it arouses my enthusiasm about biology.\nIn daily life, I like reading, writing, drawing and travelling. I also love Chinese traditional culture, such as poetry."
  }, {
    name: "Zichong Xu",
    src: C_Users_MuTur_Desktop_2024_USTC_src_image_member_ZichongXu_jpg__WEBPACK_IMPORTED_MODULE_18__,
    introduction: "Hi,I'm Zichong Xu,an ordinary student in USTC. As a member of our IDEC team, I have had the privilege of contributing to the development of our wiki, using engaging page interactions to showcase our results. I am excited to present our work and learn from all of you at this year's competition."
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memberlist);

/***/ }),

/***/ "./src/pages/member/member.js":
/*!************************************!*\
  !*** ./src/pages/member/member.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_memberbox_memberbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/memberbox/memberbox.js */ "./src/memberbox/memberbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.js */ "./src/textbox/textbox.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_pages_member_membertext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/pages/member/membertext.js */ "./src/pages/member/membertext.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



(0,C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(C_Users_MuTur_Desktop_2024_USTC_src_pages_member_membertext_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
$(".next").attr('href', 'attribution.html');

/***/ }),

/***/ "./src/pages/member/membertext.js":
/*!****************************************!*\
  !*** ./src/pages/member/membertext.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var text = {
  text: [{
    subtitle: "Acknowledgements",
    text: "We would like to thank Synthetic Biology Lab of USTC, Qian Zhang and Dongmei Wang from National Training Center for Laboratory Techniques of Life Science for their discussions and support. We sincerely thank the USTC Academic Affairs Office, USTC Department of Life Sciences and Medicine, Core Facility Center for Life Sciences of USTC, and National Training Center for Laboratory Techniques of Life Science of USTC for their tremendous support of this project. Thanks to the University of Science and Technology of China Initiative Foundationfor the supports."
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);

/***/ }),

/***/ "./src/memberbox/individualbox.eft":
/*!*****************************************!*\
  !*** ./src/memberbox/individualbox.eft ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Individualbox)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Individualbox extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'div',a:{class:'member-container'}},[{t:'div',a:{class:'member-photo-container'}},[{t:'img',a:{class:'member-photo',id:[0,[['name']]],src:[0,[['src']]]}}]],[{t:'div',a:{class:'member-name'}},[['name']]],[{t:'div',a:{class:'introduction'}},[['introduction']]]]) {
};


/***/ }),

/***/ "./src/memberbox/memberbox.eft":
/*!*************************************!*\
  !*** ./src/memberbox/memberbox.eft ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Memberbox)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Memberbox extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:0},[{t:'div',a:{class:'memberbox'}},[{t:'div',a:{class:'title'}},[['title']]],{n:'list',t:1}],[{t:'div',a:{class:'overlay'}}]]) {
};


/***/ }),

/***/ "./src/memberbox/memberbox.css":
/*!*************************************!*\
  !*** ./src/memberbox/memberbox.css ***!
  \*************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/image/member/AoqiZhang.jpg":
/*!****************************************!*\
  !*** ./src/image/member/AoqiZhang.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/AoqiZhang.jpg";

/***/ }),

/***/ "./src/image/member/FengyuanYang.jpeg":
/*!********************************************!*\
  !*** ./src/image/member/FengyuanYang.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/FengyuanYang.jpeg";

/***/ }),

/***/ "./src/image/member/HanyiFu.jpg":
/*!**************************************!*\
  !*** ./src/image/member/HanyiFu.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/HanyiFu.jpg";

/***/ }),

/***/ "./src/image/member/HeyuanGao.jpg":
/*!****************************************!*\
  !*** ./src/image/member/HeyuanGao.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/HeyuanGao.jpg";

/***/ }),

/***/ "./src/image/member/JiaminDong.jpg":
/*!*****************************************!*\
  !*** ./src/image/member/JiaminDong.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/JiaminDong.jpg";

/***/ }),

/***/ "./src/image/member/JiazheSun.jpg":
/*!****************************************!*\
  !*** ./src/image/member/JiazheSun.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/JiazheSun.jpg";

/***/ }),

/***/ "./src/image/member/JiongHong.jpg":
/*!****************************************!*\
  !*** ./src/image/member/JiongHong.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/JiongHong.jpg";

/***/ }),

/***/ "./src/image/member/LehengLo.jpg":
/*!***************************************!*\
  !*** ./src/image/member/LehengLo.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/LehengLo.jpg";

/***/ }),

/***/ "./src/image/member/NanJiang.jpg":
/*!***************************************!*\
  !*** ./src/image/member/NanJiang.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/NanJiang.jpg";

/***/ }),

/***/ "./src/image/member/QianZhang.jpg":
/*!****************************************!*\
  !*** ./src/image/member/QianZhang.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/QianZhang.jpg";

/***/ }),

/***/ "./src/image/member/ShengtengZhang.jpg":
/*!*********************************************!*\
  !*** ./src/image/member/ShengtengZhang.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ShengtengZhang.jpg";

/***/ }),

/***/ "./src/image/member/SiruiFu.jpg":
/*!**************************************!*\
  !*** ./src/image/member/SiruiFu.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/SiruiFu.jpg";

/***/ }),

/***/ "./src/image/member/TingxuanKong.jpg":
/*!*******************************************!*\
  !*** ./src/image/member/TingxuanKong.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/TingxuanKong.jpg";

/***/ }),

/***/ "./src/image/member/WenxinYi.png":
/*!***************************************!*\
  !*** ./src/image/member/WenxinYi.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/WenxinYi.png";

/***/ }),

/***/ "./src/image/member/XuBao.jpg":
/*!************************************!*\
  !*** ./src/image/member/XuBao.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/XuBao.jpg";

/***/ }),

/***/ "./src/image/member/YangzhiWang.jpg":
/*!******************************************!*\
  !*** ./src/image/member/YangzhiWang.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/YangzhiWang.jpg";

/***/ }),

/***/ "./src/image/member/YihengFan.jpg":
/*!****************************************!*\
  !*** ./src/image/member/YihengFan.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/YihengFan.jpg";

/***/ }),

/***/ "./src/image/member/YilingMa.jpg":
/*!***************************************!*\
  !*** ./src/image/member/YilingMa.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/YilingMa.jpg";

/***/ }),

/***/ "./src/image/member/ZehuiYu.jpg":
/*!**************************************!*\
  !*** ./src/image/member/ZehuiYu.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ZehuiYu.jpg";

/***/ }),

/***/ "./src/image/member/ZichongXu.jpg":
/*!****************************************!*\
  !*** ./src/image/member/ZichongXu.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ZichongXu.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js","src_textbox_textbox_js"], () => (__webpack_exec__("./src/pages/member/member.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=member.js.map