(self["webpackChunk_2024_ustc"] = self["webpackChunk_2024_ustc"] || []).push([["main"],{

/***/ "./src/effect/cursor-effects.js":
/*!**************************************!*\
  !*** ./src/effect/cursor-effects.js ***!
  \**************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Circle = /*#__PURE__*/function () {
  function Circle(_ref) {
    var origin = _ref.origin,
      speed = _ref.speed,
      color = _ref.color,
      angle = _ref.angle,
      context = _ref.context;
    _classCallCheck(this, Circle);
    this.origin = origin;
    this.position = _objectSpread({}, this.origin);
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.context = context;
    this.renderCount = 0;
  }
  return _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2);
      this.context.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.position.x = Math.sin(this.angle) * this.speed + this.position.x;
      this.position.y = Math.cos(this.angle) * this.speed + this.position.y + this.renderCount * 0.3;
      this.renderCount++;
    }
  }]);
}();
var Boom = /*#__PURE__*/function () {
  function Boom(_ref2) {
    var origin = _ref2.origin,
      context = _ref2.context,
      _ref2$circleCount = _ref2.circleCount,
      circleCount = _ref2$circleCount === void 0 ? 10 : _ref2$circleCount,
      area = _ref2.area;
    _classCallCheck(this, Boom);
    this.origin = origin;
    this.context = context;
    this.circleCount = circleCount;
    this.area = area;
    this.stop = false;
    this.circles = [];
  }
  return _createClass(Boom, [{
    key: "randomArray",
    value: function randomArray(range) {
      var length = range.length;
      var randomIndex = Math.floor(length * Math.random());
      return range[randomIndex];
    }
  }, {
    key: "randomColor",
    value: function randomColor() {
      var range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range);
    }
  }, {
    key: "randomRange",
    value: function randomRange(start, end) {
      return (end - start) * Math.random() + start;
    }
  }, {
    key: "init",
    value: function init() {
      for (var i = 0; i < this.circleCount; i++) {
        var circle = new Circle({
          context: this.context,
          origin: this.origin,
          color: this.randomColor(),
          angle: this.randomRange(Math.PI - 1, Math.PI + 1),
          speed: this.randomRange(1, 6)
        });
        this.circles.push(circle);
      }
    }
  }, {
    key: "move",
    value: function move() {
      var _this = this;
      this.circles.forEach(function (circle, index) {
        if (circle.position.x > _this.area.width || circle.position.y > _this.area.height) {
          return _this.circles.splice(index, 1);
        }
        circle.move();
      });
      if (this.circles.length == 0) {
        this.stop = true;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.circles.forEach(function (circle) {
        return circle.draw();
      });
    }
  }]);
}();
var CursorSpecialEffects = /*#__PURE__*/function () {
  function CursorSpecialEffects() {
    _classCallCheck(this, CursorSpecialEffects);
    this.computerCanvas = document.createElement('canvas');
    this.renderCanvas = document.createElement('canvas');
    this.computerContext = this.computerCanvas.getContext('2d');
    this.renderContext = this.renderCanvas.getContext('2d');
    this.globalWidth = window.innerWidth;
    this.globalHeight = window.innerHeight;
    this.booms = [];
    this.running = false;
  }
  return _createClass(CursorSpecialEffects, [{
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var boom = new Boom({
        origin: {
          x: e.clientX,
          y: e.clientY
        },
        context: this.computerContext,
        area: {
          width: this.globalWidth,
          height: this.globalHeight
        }
      });
      boom.init();
      this.booms.push(boom);
      this.running || this.run();
    }
  }, {
    key: "handlePageHide",
    value: function handlePageHide() {
      this.booms = [];
      this.running = false;
    }
  }, {
    key: "init",
    value: function init() {
      var style = this.renderCanvas.style;
      style.position = 'fixed';
      style.top = style.left = 0;
      style.zIndex = '999999999999999999999999999999999999999999';
      style.pointerEvents = 'none';
      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth;
      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight;
      document.body.append(this.renderCanvas);
      window.addEventListener('mousedown', this.handleMouseDown.bind(this));
      window.addEventListener('pagehide', this.handlePageHide.bind(this));
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;
      this.running = true;
      if (this.booms.length == 0) {
        return this.running = false;
      }
      requestAnimationFrame(this.run.bind(this));
      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight);
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight);
      this.booms.forEach(function (boom, index) {
        if (boom.stop) {
          return _this2.booms.splice(index, 1);
        }
        boom.move();
        boom.draw();
      });
      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight);
    }
  }]);
}();
var cursorSpecialEffects = new CursorSpecialEffects();
cursorSpecialEffects.init();

/***/ }),

/***/ "./src/jquery.nanoscroller.min.js":
/*!****************************************!*\
  !*** ./src/jquery.nanoscroller.min.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! nanoScrollerJS - v0.8.6 - (c) 2015 James Florentino; Licensed MIT */

!function (a) {
  return  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (b) {
    return a(b, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a, b, c) {
  "use strict";

  var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
  z = {
    paneClass: "nano-pane",
    sliderClass: "nano-slider",
    contentClass: "nano-content",
    iOSNativeScrolling: !1,
    preventPageScrolling: !1,
    disableResize: !1,
    alwaysVisible: !1,
    flashDelay: 1500,
    sliderMinHeight: 20,
    sliderMaxHeight: null,
    documentContext: null,
    windowContext: null
  }, u = "scrollbar", t = "scroll", l = "mousedown", m = "mouseenter", n = "mousemove", p = "mousewheel", o = "mouseup", s = "resize", h = "drag", i = "enter", w = "up", r = "panedown", f = "DOMMouseScroll", g = "down", x = "wheel", j = "keydown", k = "keyup", v = "touchmove", d = "Microsoft Internet Explorer" === b.navigator.appName && /msie 7./i.test(b.navigator.appVersion) && b.ActiveXObject, e = null, D = b.requestAnimationFrame, y = b.cancelAnimationFrame, F = c.createElement("div").style, H = function () {
    var a, b, c, d, e, f;
    for (d = ["t", "webkitT", "MozT", "msT", "OT"], a = e = 0, f = d.length; f > e; a = ++e) if (c = d[a], b = d[a] + "ransform", b in F) return d[a].substr(0, d[a].length - 1);
    return !1;
  }(), G = function G(a) {
    return H === !1 ? !1 : "" === H ? a : H + a.charAt(0).toUpperCase() + a.substr(1);
  }, E = G("transform"), B = E !== !1, A = function A() {
    var a, b, d;
    return a = c.createElement("div"), b = a.style, b.position = "absolute", b.width = "100px", b.height = "100px", b.overflow = t, b.top = "-9999px", c.body.appendChild(a), d = a.offsetWidth - a.clientWidth, c.body.removeChild(a), d;
  }, C = function C() {
    var a, c, d;
    return c = b.navigator.userAgent, (a = /(?=.+Mac OS X)(?=.+Firefox)/.test(c)) ? (d = /Firefox\/\d{2}\./.exec(c), d && (d = d[0].replace(/\D+/g, "")), a && +d > 23) : !1;
  }, q = function () {
    function j(d, f) {
      this.el = d, this.options = f, e || (e = A()), this.$el = a(this.el), this.doc = a(this.options.documentContext || c), this.win = a(this.options.windowContext || b), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset();
    }
    return j.prototype.preventScrolling = function (a, b) {
      if (this.isActive) if (a.type === f) (b === g && a.originalEvent.detail > 0 || b === w && a.originalEvent.detail < 0) && a.preventDefault();else if (a.type === p) {
        if (!a.originalEvent || !a.originalEvent.wheelDelta) return;
        (b === g && a.originalEvent.wheelDelta < 0 || b === w && a.originalEvent.wheelDelta > 0) && a.preventDefault();
      }
    }, j.prototype.nativeScrolling = function () {
      this.$content.css({
        WebkitOverflowScrolling: "touch"
      }), this.iOSNativeScrolling = !0, this.isActive = !0;
    }, j.prototype.updateScrollValues = function () {
      var a, b;
      a = this.content, this.maxScrollTop = a.scrollHeight - a.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = a.scrollTop, b = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== b && this.$el.trigger("update", {
        position: this.contentScrollTop,
        maximum: this.maxScrollTop,
        direction: b
      }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop);
    }, j.prototype.setOnScrollStyles = function () {
      var a;
      B ? (a = {}, a[E] = "translate(0, " + this.sliderTop + "px)") : a = {
        top: this.sliderTop
      }, D ? (y && this.scrollRAF && y(this.scrollRAF), this.scrollRAF = D(function (b) {
        return function () {
          return b.scrollRAF = null, b.slider.css(a);
        };
      }(this))) : this.slider.css(a);
    }, j.prototype.createEvents = function () {
      this.events = {
        down: function (a) {
          return function (b) {
            return a.isBeingDragged = !0, a.offsetY = b.pageY - a.slider.offset().top, a.slider.is(b.target) || (a.offsetY = 0), a.pane.addClass("active"), a.doc.bind(n, a.events[h]).bind(o, a.events[w]), a.body.bind(m, a.events[i]), !1;
          };
        }(this),
        drag: function (a) {
          return function (b) {
            return a.sliderY = b.pageY - a.$el.offset().top - a.paneTop - (a.offsetY || .5 * a.sliderHeight), a.scroll(), a.contentScrollTop >= a.maxScrollTop && a.prevScrollTop !== a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"), !1;
          };
        }(this),
        up: function (a) {
          return function (b) {
            return a.isBeingDragged = !1, a.pane.removeClass("active"), a.doc.unbind(n, a.events[h]).unbind(o, a.events[w]), a.body.unbind(m, a.events[i]), !1;
          };
        }(this),
        resize: function (a) {
          return function (b) {
            a.reset();
          };
        }(this),
        panedown: function (a) {
          return function (b) {
            return a.sliderY = (b.offsetY || b.originalEvent.layerY) - .5 * a.sliderHeight, a.scroll(), a.events.down(b), !1;
          };
        }(this),
        scroll: function (a) {
          return function (b) {
            a.updateScrollValues(), a.isBeingDragged || (a.iOSNativeScrolling || (a.sliderY = a.sliderTop, a.setOnScrollStyles()), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, g), a.prevScrollTop !== a.maxScrollTop && a.$el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, w), 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"))));
          };
        }(this),
        wheel: function (a) {
          return function (b) {
            var c;
            if (null != b) return c = b.delta || b.wheelDelta || b.originalEvent && b.originalEvent.wheelDelta || -b.detail || b.originalEvent && -b.originalEvent.detail, c && (a.sliderY += -c / 3), a.scroll(), !1;
          };
        }(this),
        enter: function (a) {
          return function (b) {
            var c;
            if (a.isBeingDragged) return 1 !== (b.buttons || b.which) ? (c = a.events)[w].apply(c, arguments) : void 0;
          };
        }(this)
      };
    }, j.prototype.addEvents = function () {
      var a;
      this.removeEvents(), a = this.events, this.options.disableResize || this.win.bind(s, a[s]), this.iOSNativeScrolling || (this.slider.bind(l, a[g]), this.pane.bind(l, a[r]).bind("" + p + " " + f, a[x])), this.$content.bind("" + t + " " + p + " " + f + " " + v, a[t]);
    }, j.prototype.removeEvents = function () {
      var a;
      a = this.events, this.win.unbind(s, a[s]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + t + " " + p + " " + f + " " + v, a[t]);
    }, j.prototype.generate = function () {
      var a, c, d, f, g, h, i;
      return f = this.options, h = f.paneClass, i = f.sliderClass, a = f.contentClass, (g = this.$el.children("." + h)).length || g.children("." + i).length || this.$el.append('<div class="' + h + '"><div class="' + i + '" /></div>'), this.pane = this.$el.children("." + h), this.slider = this.pane.find("." + i), 0 === e && C() ? (d = b.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), c = {
        right: -14,
        paddingRight: +d + 14
      }) : e && (c = {
        right: -e
      }, this.$el.addClass("has-scrollbar")), null != c && this.$content.css(c), this;
    }, j.prototype.restore = function () {
      this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents();
    }, j.prototype.reset = function () {
      var a, b, c, f, g, h, i, j, k, l, m, n;
      return this.iOSNativeScrolling ? void (this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), a = this.content, f = a.style, g = f.overflowY, d && this.$content.css({
        height: this.$content.height()
      }), b = a.scrollHeight + e, l = parseInt(this.$el.css("max-height"), 10), l > 0 && (this.$el.height(""), this.$el.height(a.scrollHeight > l ? l : a.scrollHeight)), i = this.pane.outerHeight(!1), k = parseInt(this.pane.css("top"), 10), h = parseInt(this.pane.css("bottom"), 10), j = i + k + h, n = Math.round(j / b * i), n < this.options.sliderMinHeight ? n = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && n > this.options.sliderMaxHeight && (n = this.options.sliderMaxHeight), g === t && f.overflowX !== t && (n += e), this.maxSliderTop = j - n, this.contentHeight = b, this.paneHeight = i, this.paneOuterHeight = j, this.sliderHeight = n, this.paneTop = k, this.slider.height(n), this.events.scroll(), this.pane.show(), this.isActive = !0, a.scrollHeight === a.clientHeight || this.pane.outerHeight(!0) >= a.scrollHeight && g !== t ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === a.scrollHeight && g === t ? this.slider.hide() : this.slider.show(), this.pane.css({
        opacity: this.options.alwaysVisible ? 1 : "",
        visibility: this.options.alwaysVisible ? "visible" : ""
      }), c = this.$content.css("position"), ("static" === c || "relative" === c) && (m = parseInt(this.$content.css("right"), 10), m && this.$content.css({
        right: "",
        marginRight: m
      })), this);
    }, j.prototype.scroll = function () {
      return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0;
    }, j.prototype.scrollBottom = function (a) {
      return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - a).trigger(p), this.stop().restore(), this) : void 0;
    }, j.prototype.scrollTop = function (a) {
      return this.isActive ? (this.$content.scrollTop(+a).trigger(p), this.stop().restore(), this) : void 0;
    }, j.prototype.scrollTo = function (a) {
      return this.isActive ? (this.scrollTop(this.$el.find(a).get(0).offsetTop), this) : void 0;
    }, j.prototype.stop = function () {
      return y && this.scrollRAF && (y(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this;
    }, j.prototype.destroy = function () {
      return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), d && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({
        right: ""
      })), this;
    }, j.prototype.flash = function () {
      return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass("flashed"), setTimeout(function (a) {
        return function () {
          a.pane.removeClass("flashed");
        };
      }(this), this.options.flashDelay), this) : void 0;
    }, j;
  }(), a.fn.nanoScroller = function (b) {
    return this.each(function () {
      var c, d;
      if ((d = this.nanoscroller) || (c = a.extend({}, z, b), this.nanoscroller = d = new q(this, c)), b && "object" == _typeof(b)) {
        if (a.extend(d.options, b), null != b.scrollBottom) return d.scrollBottom(b.scrollBottom);
        if (null != b.scrollTop) return d.scrollTop(b.scrollTop);
        if (b.scrollTo) return d.scrollTo(b.scrollTo);
        if ("bottom" === b.scroll) return d.scrollBottom(0);
        if ("top" === b.scroll) return d.scrollTop(0);
        if (b.scroll && b.scroll instanceof a) return d.scrollTo(b.scroll);
        if (b.stop) return d.stop();
        if (b.destroy) return d.destroy();
        if (b.flash) return d.flash();
      }
      return d.reset();
    });
  }, a.fn.nanoScroller.Constructor = q;
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/sidebar/sidebar.js */ "./src/sidebar/sidebar.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_textbox_textbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/textbox/textbox.css */ "./src/textbox/textbox.css");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_effect_cursor_effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/effect/cursor-effects.js */ "./src/effect/cursor-effects.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_effect_cursor_effects_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_MuTur_Desktop_2024_USTC_src_effect_cursor_effects_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _next_eft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./next.eft */ "./src/next.eft");




new _next_eft__WEBPACK_IMPORTED_MODULE_3__["default"]().$mount({
  target: document.body,
  option: "append"
});

/***/ }),

/***/ "./src/sidebar/sidebar.js":
/*!********************************!*\
  !*** ./src/sidebar/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_nano_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/nano.css */ "./src/nano.css");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_nanoscroller_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/nanoscroller.css */ "./src/nanoscroller.css");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_jquery_nanoscroller_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/jquery.nanoscroller.min.js */ "./src/jquery.nanoscroller.min.js");
/* harmony import */ var C_Users_MuTur_Desktop_2024_USTC_src_jquery_nanoscroller_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_MuTur_Desktop_2024_USTC_src_jquery_nanoscroller_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.css */ "./src/sidebar/sidebar.css");
/* harmony import */ var _sidebar_eft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.eft */ "./src/sidebar/sidebar.eft");
/* harmony import */ var _sidebarsubtoggle_eft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebarsubtoggle.eft */ "./src/sidebar/sidebarsubtoggle.eft");
/* harmony import */ var _sidebaritem_eft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebaritem.eft */ "./src/sidebar/sidebaritem.eft");
/* harmony import */ var _sidebarlist_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebarlist.json */ "./src/sidebar/sidebarlist.json");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import "src/themify-icons.css";




// import "@src/icons/themify-icons.css"
// import "@src/sidebar/themify-icons.css";




new _sidebar_eft__WEBPACK_IMPORTED_MODULE_4__["default"]().$mount({
  target: document.body
});
var _loop = function _loop() {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
    key = _Object$entries$_i[0],
    value = _Object$entries$_i[1];
  var sidebarsubtoggle = null;
  if (value.link) {
    sidebarsubtoggle = new _sidebarsubtoggle_eft__WEBPACK_IMPORTED_MODULE_5__["default"]({
      $data: {
        itemName: key,
        href: value.link.href,
        display: "none"
      }
    });
  } else {
    sidebarsubtoggle = new _sidebarsubtoggle_eft__WEBPACK_IMPORTED_MODULE_5__["default"]({
      $data: {
        itemName: key
      }
    });
  }
  var array = [];
  value.item.forEach(function (element) {
    array.push(new _sidebaritem_eft__WEBPACK_IMPORTED_MODULE_6__["default"]({
      $data: {
        itemName: element.itemName,
        href: element.href
      }
    }));
  });
  sidebarsubtoggle["list"] = array;
  sidebarsubtoggle.$mount({
    target: document.querySelector(".sidebar-itembox> ul:first-of-type"),
    option: {
      append: true
    }
  });
};
for (var _i = 0, _Object$entries = Object.entries(_sidebarlist_json__WEBPACK_IMPORTED_MODULE_7__); _i < _Object$entries.length; _i++) {
  _loop();
}
//angle-down path配置
$("svg.angle-down").attr({
  viewbox: "0 0 23.55 11.67"
}).find("path").attr({
  d: "M75.3,265c-2.53,2.22-5,4.44-7.51,6.72-.49.44-1,.89-1.45,1.34l-.38.34c-.31.3.17-.09,0,0s.7-.13.43-.11h-.21c.43.05.16,0,.51.14-.07,0-.14-.11-.21-.14.48.21.11.08-.1-.1L65.14,272c-2.66-2.41-5.4-4.72-8.16-7-1.47-1.22-3.6.89-2.12,2.13,2.67,2.22,5.33,4.46,7.91,6.78a14.34,14.34,0,0,0,2.4,2.07c1.67.93,2.92-.46,4.07-1.52,2.68-2.49,5.43-4.92,8.18-7.33,1.46-1.28-.67-3.39-2.12-2.13Z",
  fill: "#fff",
  transform: "scale(0.5) translate(-54.36 -264.62)"
});
$.fn.slideLeft = function (speed) {
  return this.animate({
    width: "hide",
    opacity: "hide"
  }, speed);
};
$.fn.slideRight = function (speed) {
  return this.animate({
    width: "show",
    opacity: "show"
  }, speed);
};
$(document).ready(function () {
  //侧边栏切换函数
  var changeWidth = 200;
  var widths = [200, 70];
  function updateSidebarWidth(width) {
    document.documentElement.style.setProperty("--sidebar-width", width + "px");
    var checkboxAngleDown = $(".checkbox .angle-down");
    checkboxAngleDown.css("transform", width === widths[0] ? "rotate(90deg)" : "rotate(-90deg)");
  }
  $(document).ready(function () {
    $(".checkbox .angle-down").css("transform", "rotate(90deg)");
    $(".angle-down").css("transform-origin", "center");
  });
  $(".checkbox").on("click", function () {
    if (changeWidth === widths[0]) {
      $(".sidebar-sub-toggle").removeClass("sidebar-sub-toggle-clicked");
      $(".sidebar-sub-toggle + .nav-bar").slideUp(function () {
        $(".angle-down").not(".checkbox .angle-down").css("transform", "rotate(0deg)");
      });
      changeWidth = widths[1]; //变瘦
      $(".angle-down").not(".checkbox .angle-down").fadeOut(300);
      $(".githubtext").slideLeft(200);
    } else {
      changeWidth = widths[0]; //变胖
      $(".angle-down").not(".checkbox .angle-down").fadeIn(100);
      $(".githubtext").slideRight(200);
    }
    updateSidebarWidth(changeWidth);
  });
  $(".sidebar-sub-toggle").on("click", function () {
    var _this = this;
    if (changeWidth === widths[1]) {
      changeWidth = widths[0];
      updateSidebarWidth(changeWidth); //变胖
      $(".angle-down").not(".checkbox .angle-down").fadeIn(100);
      $(".githubtext").slideRight(200);
    }
    $(this).toggleClass("sidebar-sub-toggle-clicked").next().slideToggle(function () {
      var angleDown = $(_this).children(".angle-down");
      if ($(_this).next().is(":visible")) {
        angleDown.css("transform", "rotate(180deg)");
      } else {
        angleDown.css("transform", "rotate(0deg)");
      }
    });
  });

  //侧边栏hover
  $(".sidebar-sub-toggle").hover(function (event) {
    // console.log($(this));
    $(this).css("background", "var(--sidebar-color-light)");
    event.preventDefault();
  }, function (event) {
    $(this).css("background", "var(--sidebar-color)");
    event.preventDefault();
  });
  $(".sidebar-item").hover(function (event) {
    // console.log($(this));
    $(this).css("background", "var(--sidebar-item-color-light)");
    event.preventDefault();
  }, function (event) {
    $(this).css("background", "var(--sidebar-item-color)");
    event.preventDefault();
  });
  //侧边栏自动展开函数
  var currentPath = window.location.pathname;
  $(".sidebar-contain a").filter(function () {
    var linkPath = $(this).attr("href");
    if (!linkPath) return false;
    var normalizedLinkPath = linkPath.replace(/^\//, "").split("/").pop().replace(/\.html$/, "");
    var normalizedCurrentPath = currentPath.replace(/^\//, "").split("/").pop().replace(/\.html$/, "");
    return normalizedLinkPath === normalizedCurrentPath;
  }).each(function () {
    $(this).find(".sidebar-item").addClass("sidebar-item-important");
    $(this).closest("ul.nav-bar").slideDown(300);
    var sidebarToggle = $(this).closest("ul.nav-bar").prev(".sidebar-sub-toggle");
    sidebarToggle.addClass("sidebar-sub-toggle-important");
    var angleDown = sidebarToggle.find(".angle-down");
    angleDown.css("transform", "rotate(180deg)");
  });
  $(".sidebar-sub-toggle").closest("a").filter(function () {
    var linkPath = $(this).attr("href");
    if (!linkPath) return false;
    var normalizedLinkPath = linkPath.replace(/^\//, "");
    var normalizedCurrentPath = currentPath.replace(/^\//, "");
    return normalizedLinkPath === normalizedCurrentPath;
  }).each(function () {
    $(this).find(".sidebar-sub-toggle").addClass("sidebar-sub-toggle-important");
  });
});

/***/ }),

/***/ "./src/next.eft":
/*!**********************!*\
  !*** ./src/next.eft ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Next)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Next extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'a',a:{class:'next',href:'#'}},[{t:'div'},'NEXT']]) {
};


/***/ }),

/***/ "./src/sidebar/sidebar.eft":
/*!*********************************!*\
  !*** ./src/sidebar/sidebar.eft ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Sidebar extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'nav',a:{class:'sidebar-for-window',id:'sidebar'}},[{t:'div',a:{class:'checkbox'}},[{t:'svg',a:{class:'angle-down svg'}},[{t:'path',a:{fill:'#ffffff'}}]]],[{t:'div',a:{class:'logo'}},[{t:'a',a:{href:'index.html'}},[{t:'div',a:{class:'USTC'}}],'USTC 2024 ']],[{t:'div',a:{class:'search-box'}}],[{t:'div',a:{class:'nano sidebar-contain'}},[{t:'div',a:{class:'nano-content sidebar-itembox'}},[{t:'ul'}]]],[{t:'div',a:{class:'bottom-contain'}},[{t:'a',a:{href:'https://github.com/idec-teams/2024_USTC/tree/gh-pages'}},[{t:'svg',a:{class:'github',xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 448 512'}},[{t:'path',a:{d:'M439.55 236.05 244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z',fill:'#f5f5f5'}}]],[{t:'span',a:{class:'githubtext'}},'Github']]]]) {
};


/***/ }),

/***/ "./src/sidebar/sidebaritem.eft":
/*!*************************************!*\
  !*** ./src/sidebar/sidebaritem.eft ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebaritem)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Sidebaritem extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'a',p:[[['href'],[0,[['href']]]]]},[{t:'li',a:{class:[['sidebar-item ',''],[['itemName']]]}},[{t:'i',a:{class:'iconfont icon'}}],[{t:'span',a:{class:'text'}}],[['itemName']]]]) {
};


/***/ }),

/***/ "./src/sidebar/sidebarsubtoggle.eft":
/*!******************************************!*\
  !*** ./src/sidebar/sidebarsubtoggle.eft ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebarsubtoggle)
/* harmony export */ });
/* harmony import */ var ef_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ef-core */ "./node_modules/ef-core/src/ef-core.js");

class Sidebarsubtoggle extends (0,ef_core__WEBPACK_IMPORTED_MODULE_0__.create)([{t:'a',p:[[['href'],[0,[['href']]]]]},[{t:'li',a:{class:[['sidebar-sub-toggle ',''],[['itemName']]]}},[{t:'i',a:{class:[['','icon'],[['itemName']]]}}],[{t:'span',a:{class:'text'}},[['itemName'],'Team']],[{t:'svg',a:{class:[['angle-down ',''],[['display']]]}},[{t:'path'}]]],[{t:'ul',a:{class:'nav-bar'}},{n:'list',t:1}]]) {
};


/***/ }),

/***/ "./src/nano.css":
/*!**********************!*\
  !*** ./src/nano.css ***!
  \**********************/
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/nanoscroller.css":
/*!******************************!*\
  !*** ./src/nanoscroller.css ***!
  \******************************/
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sidebar/sidebar.css":
/*!*********************************!*\
  !*** ./src/sidebar/sidebar.css ***!
  \*********************************/
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/textbox/textbox.css":
/*!*********************************!*\
  !*** ./src/textbox/textbox.css ***!
  \*********************************/
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sidebar/sidebarlist.json":
/*!**************************************!*\
  !*** ./src/sidebar/sidebarlist.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Team":{"item":[{"itemName":"members","href":"members.html"},{"itemName":"attribution","href":"attribution.html"}]},"Project":{"item":[{"itemName":"background","href":"background.html"},{"itemName":"design","href":"design.html"},{"itemName":"results","href":"results.html"},{"itemName":"discussion","href":"discussion.html"},{"itemName":"safety","href":"safety.html"}]},"Documentation":{"item":[{"itemName":"notebook","href":"notebook.html"},{"itemName":"protocols","href":"protocols.html"},{"itemName":"report","href":"report.html"},{"itemName":"supplementary information","href":"supplementary-information.html"}]},"Reference":{"link":{"href":"Reference.html"},"item":[]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./src/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map