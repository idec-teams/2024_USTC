(self.webpackChunk_2024_ustc=self.webpackChunk_2024_ustc||[]).push([["main"],{5373:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t,e,i){return(e=r(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}function s(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(e){var i=function(e,i){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,i||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"==t(i)?i:i+""}var l=function(){return s((function t(o){var s=o.origin,r=o.speed,l=o.color,a=o.angle,c=o.context;n(this,t),this.origin=s,this.position=function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},this.origin),this.color=l,this.speed=r,this.angle=a,this.context=c,this.renderCount=0}),[{key:"draw",value:function(){this.context.fillStyle=this.color,this.context.beginPath(),this.context.arc(this.position.x,this.position.y,2,0,2*Math.PI),this.context.fill()}},{key:"move",value:function(){this.position.x=Math.sin(this.angle)*this.speed+this.position.x,this.position.y=Math.cos(this.angle)*this.speed+this.position.y+.3*this.renderCount,this.renderCount++}}])}(),a=function(){return s((function t(e){var i=e.origin,o=e.context,s=e.circleCount,r=void 0===s?10:s,l=e.area;n(this,t),this.origin=i,this.context=o,this.circleCount=r,this.area=l,this.stop=!1,this.circles=[]}),[{key:"randomArray",value:function(t){var e=t.length;return t[Math.floor(e*Math.random())]}},{key:"randomColor",value:function(){var t=["8","9","A","B","C","D","E","F"];return"#"+this.randomArray(t)+this.randomArray(t)+this.randomArray(t)+this.randomArray(t)+this.randomArray(t)+this.randomArray(t)}},{key:"randomRange",value:function(t,e){return(e-t)*Math.random()+t}},{key:"init",value:function(){for(var t=0;t<this.circleCount;t++){var e=new l({context:this.context,origin:this.origin,color:this.randomColor(),angle:this.randomRange(Math.PI-1,Math.PI+1),speed:this.randomRange(1,6)});this.circles.push(e)}}},{key:"move",value:function(){var t=this;this.circles.forEach((function(e,i){if(e.position.x>t.area.width||e.position.y>t.area.height)return t.circles.splice(i,1);e.move()})),0==this.circles.length&&(this.stop=!0)}},{key:"draw",value:function(){this.circles.forEach((function(t){return t.draw()}))}}])}();(new(function(){return s((function t(){n(this,t),this.computerCanvas=document.createElement("canvas"),this.renderCanvas=document.createElement("canvas"),this.computerContext=this.computerCanvas.getContext("2d"),this.renderContext=this.renderCanvas.getContext("2d"),this.globalWidth=window.innerWidth,this.globalHeight=window.innerHeight,this.booms=[],this.running=!1}),[{key:"handleMouseDown",value:function(t){var e=new a({origin:{x:t.clientX,y:t.clientY},context:this.computerContext,area:{width:this.globalWidth,height:this.globalHeight}});e.init(),this.booms.push(e),this.running||this.run()}},{key:"handlePageHide",value:function(){this.booms=[],this.running=!1}},{key:"init",value:function(){var t=this.renderCanvas.style;t.position="fixed",t.top=t.left=0,t.zIndex="999999999999999999999999999999999999999999",t.pointerEvents="none",t.width=this.renderCanvas.width=this.computerCanvas.width=this.globalWidth,t.height=this.renderCanvas.height=this.computerCanvas.height=this.globalHeight,document.body.append(this.renderCanvas),window.addEventListener("mousedown",this.handleMouseDown.bind(this)),window.addEventListener("pagehide",this.handlePageHide.bind(this))}},{key:"run",value:function(){var t=this;if(this.running=!0,0==this.booms.length)return this.running=!1;requestAnimationFrame(this.run.bind(this)),this.computerContext.clearRect(0,0,this.globalWidth,this.globalHeight),this.renderContext.clearRect(0,0,this.globalWidth,this.globalHeight),this.booms.forEach((function(e,i){if(e.stop)return t.booms.splice(i,1);e.move(),e.draw()})),this.renderContext.drawImage(this.computerCanvas,0,0,this.globalWidth,this.globalHeight)}}])}())).init()},3636:(t,e,i)=>{var n,o;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)
/*! nanoScrollerJS - v0.8.6 - (c) 2015 James Florentino; Licensed MIT */}n=[i(4692)],void 0!==(o=function(t){return function(t,e,i){"use strict";var n,o,r,l,a,c,h,u,d,p,f,g,m,v,b,y,w,S,x,T,C,O,$,k,E,H,A,N;T={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},b="scroll",h="mousedown",u="mouseenter",d="mousemove",f="mousewheel",p="mouseup",v="resize",a="drag",c="enter",w="up",m="panedown",r="DOMMouseScroll",l="down",S="wheel",y="touchmove",n="Microsoft Internet Explorer"===e.navigator.appName&&/msie 7./i.test(e.navigator.appVersion)&&e.ActiveXObject,o=null,k=e.requestAnimationFrame,x=e.cancelAnimationFrame,H=i.createElement("div").style,N=function(){var t,e,i,n;for(t=i=0,n=(e=["t","webkitT","MozT","msT","OT"]).length;n>i;t=++i)if(e[t],e[t]+"ransform"in H)return e[t].substr(0,e[t].length-1);return!1}(),A=function(t){return!1!==N&&(""===N?t:N+t.charAt(0).toUpperCase()+t.substr(1))},E=A("transform"),O=!1!==E,C=function(){var t,e,n;return(e=(t=i.createElement("div")).style).position="absolute",e.width="100px",e.height="100px",e.overflow=b,e.top="-9999px",i.body.appendChild(t),n=t.offsetWidth-t.clientWidth,i.body.removeChild(t),n},$=function(){var t,i,n;return i=e.navigator.userAgent,!!(t=/(?=.+Mac OS X)(?=.+Firefox)/.test(i))&&((n=/Firefox\/\d{2}\./.exec(i))&&(n=n[0].replace(/\D+/g,"")),t&&+n>23)},g=function(){function s(n,s){this.el=n,this.options=s,o||(o=C()),this.$el=t(this.el),this.doc=t(this.options.documentContext||i),this.win=t(this.options.windowContext||e),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return s.prototype.preventScrolling=function(t,e){if(this.isActive)if(t.type===r)(e===l&&t.originalEvent.detail>0||e===w&&t.originalEvent.detail<0)&&t.preventDefault();else if(t.type===f){if(!t.originalEvent||!t.originalEvent.wheelDelta)return;(e===l&&t.originalEvent.wheelDelta<0||e===w&&t.originalEvent.wheelDelta>0)&&t.preventDefault()}},s.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},s.prototype.updateScrollValues=function(){var t,e;t=this.content,this.maxScrollTop=t.scrollHeight-t.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=t.scrollTop,e=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==e&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:e}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},s.prototype.setOnScrollStyles=function(){var t;O?(t={})[E]="translate(0, "+this.sliderTop+"px)":t={top:this.sliderTop},k?(x&&this.scrollRAF&&x(this.scrollRAF),this.scrollRAF=k(function(e){return function(){return e.scrollRAF=null,e.slider.css(t)}}(this))):this.slider.css(t)},s.prototype.createEvents=function(){this.events={down:function(t){return function(e){return t.isBeingDragged=!0,t.offsetY=e.pageY-t.slider.offset().top,t.slider.is(e.target)||(t.offsetY=0),t.pane.addClass("active"),t.doc.bind(d,t.events[a]).bind(p,t.events[w]),t.body.bind(u,t.events[c]),!1}}(this),drag:function(t){return function(e){return t.sliderY=e.pageY-t.$el.offset().top-t.paneTop-(t.offsetY||.5*t.sliderHeight),t.scroll(),t.contentScrollTop>=t.maxScrollTop&&t.prevScrollTop!==t.maxScrollTop?t.$el.trigger("scrollend"):0===t.contentScrollTop&&0!==t.prevScrollTop&&t.$el.trigger("scrolltop"),!1}}(this),up:function(t){return function(e){return t.isBeingDragged=!1,t.pane.removeClass("active"),t.doc.unbind(d,t.events[a]).unbind(p,t.events[w]),t.body.unbind(u,t.events[c]),!1}}(this),resize:function(t){return function(e){t.reset()}}(this),panedown:function(t){return function(e){return t.sliderY=(e.offsetY||e.originalEvent.layerY)-.5*t.sliderHeight,t.scroll(),t.events.down(e),!1}}(this),scroll:function(t){return function(e){t.updateScrollValues(),t.isBeingDragged||(t.iOSNativeScrolling||(t.sliderY=t.sliderTop,t.setOnScrollStyles()),null!=e&&(t.contentScrollTop>=t.maxScrollTop?(t.options.preventPageScrolling&&t.preventScrolling(e,l),t.prevScrollTop!==t.maxScrollTop&&t.$el.trigger("scrollend")):0===t.contentScrollTop&&(t.options.preventPageScrolling&&t.preventScrolling(e,w),0!==t.prevScrollTop&&t.$el.trigger("scrolltop"))))}}(this),wheel:function(t){return function(e){var i;if(null!=e)return(i=e.delta||e.wheelDelta||e.originalEvent&&e.originalEvent.wheelDelta||-e.detail||e.originalEvent&&-e.originalEvent.detail)&&(t.sliderY+=-i/3),t.scroll(),!1}}(this),enter:function(t){return function(e){var i;if(t.isBeingDragged)return 1!==(e.buttons||e.which)?(i=t.events)[w].apply(i,arguments):void 0}}(this)}},s.prototype.addEvents=function(){var t;this.removeEvents(),t=this.events,this.options.disableResize||this.win.bind(v,t[v]),this.iOSNativeScrolling||(this.slider.bind(h,t[l]),this.pane.bind(h,t[m]).bind(f+" "+r,t[S])),this.$content.bind(b+" "+f+" "+r+" "+y,t[b])},s.prototype.removeEvents=function(){var t;t=this.events,this.win.unbind(v,t[v]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(b+" "+f+" "+r+" "+y,t[b])},s.prototype.generate=function(){var t,i,n,s,r;return s=(i=this.options).paneClass,r=i.sliderClass,i.contentClass,(n=this.$el.children("."+s)).length||n.children("."+r).length||this.$el.append('<div class="'+s+'"><div class="'+r+'" /></div>'),this.pane=this.$el.children("."+s),this.slider=this.pane.find("."+r),0===o&&$()?t={right:-14,paddingRight:+e.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,"")+14}:o&&(t={right:-o},this.$el.addClass("has-scrollbar")),null!=t&&this.$content.css(t),this},s.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},s.prototype.reset=function(){var t,e,i,s,r,l,a,c,h,u,d;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),r=(s=(t=this.content).style).overflowY,n&&this.$content.css({height:this.$content.height()}),e=t.scrollHeight+o,(h=parseInt(this.$el.css("max-height"),10))>0&&(this.$el.height(""),this.$el.height(t.scrollHeight>h?h:t.scrollHeight)),a=(l=this.pane.outerHeight(!1))+(c=parseInt(this.pane.css("top"),10))+parseInt(this.pane.css("bottom"),10),(d=Math.round(a/e*l))<this.options.sliderMinHeight?d=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&d>this.options.sliderMaxHeight&&(d=this.options.sliderMaxHeight),r===b&&s.overflowX!==b&&(d+=o),this.maxSliderTop=a-d,this.contentHeight=e,this.paneHeight=l,this.paneOuterHeight=a,this.sliderHeight=d,this.paneTop=c,this.slider.height(d),this.events.scroll(),this.pane.show(),this.isActive=!0,t.scrollHeight===t.clientHeight||this.pane.outerHeight(!0)>=t.scrollHeight&&r!==b?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===t.scrollHeight&&r===b?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),("static"===(i=this.$content.css("position"))||"relative"===i)&&(u=parseInt(this.$content.css("right"),10))&&this.$content.css({right:"",marginRight:u}),this)},s.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},s.prototype.scrollBottom=function(t){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-t).trigger(f),this.stop().restore(),this):void 0},s.prototype.scrollTop=function(t){return this.isActive?(this.$content.scrollTop(+t).trigger(f),this.stop().restore(),this):void 0},s.prototype.scrollTo=function(t){return this.isActive?(this.scrollTop(this.$el.find(t).get(0).offsetTop),this):void 0},s.prototype.stop=function(){return x&&this.scrollRAF&&(x(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},s.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),n&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass("has-scrollbar")&&(this.$el.removeClass("has-scrollbar"),this.$content.css({right:""})),this},s.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass("flashed"),setTimeout(function(t){return function(){t.pane.removeClass("flashed")}}(this),this.options.flashDelay),this):void 0},s}(),t.fn.nanoScroller=function(e){return this.each((function(){var i,n;if((n=this.nanoscroller)||(i=t.extend({},T,e),this.nanoscroller=n=new g(this,i)),e&&"object"==s(e)){if(t.extend(n.options,e),null!=e.scrollBottom)return n.scrollBottom(e.scrollBottom);if(null!=e.scrollTop)return n.scrollTop(e.scrollTop);if(e.scrollTo)return n.scrollTo(e.scrollTo);if("bottom"===e.scroll)return n.scrollBottom(0);if("top"===e.scroll)return n.scrollTop(0);if(e.scroll&&e.scroll instanceof t)return n.scrollTo(e.scroll);if(e.stop)return n.stop();if(e.destroy)return n.destroy();if(e.flash)return n.flash()}return n.reset()}))},t.fn.nanoScroller.Constructor=g}(t,window,document)}.apply(e,n))&&(t.exports=o)},5984:(t,e,i)=>{"use strict";i(3636);var n=i(898);class o extends((0,n.vt)([{t:"nav",a:{class:"sidebar-for-window",id:"sidebar"}},[{t:"div",a:{class:"checkbox"}},[{t:"svg",a:{class:"angle-down svg"}},[{t:"path",a:{fill:"#ffffff"}}]]],[{t:"div",a:{class:"logo"}},[{t:"a",a:{href:"index.html"}},[{t:"div",a:{class:"USTC"}}],"USTC 2024 "]],[{t:"div",a:{class:"search-box"}}],[{t:"div",a:{class:"nano sidebar-contain"}},[{t:"div",a:{class:"nano-content sidebar-itembox"}},[{t:"ul"}]]],[{t:"div",a:{class:"bottom-contain"}},[{t:"a",a:{href:"https://github.com/idec-teams/2024_USTC/tree/gh-pages"}},[{t:"img",a:{class:"github",src:[0,[["src"]]]}}],[{t:"span",a:{class:"githubtext"}},"iDEC"]]]])){}class s extends((0,n.vt)([{t:"a",p:[[["href"],[0,[["href"]]]]]},[{t:"li",a:{class:[["sidebar-sub-toggle ",""],[["itemName"]]]}},[{t:"i",a:{class:[["","icon"],[["itemName"]]]}}],[{t:"span",a:{class:"text"}},[["itemName"],"Team"]],[{t:"svg",a:{class:[["angle-down ",""],[["display"]]]}},[{t:"path"}]]],[{t:"ul",a:{class:"nav-bar"}},{n:"list",t:1}]])){}class r extends((0,n.vt)([{t:"a",p:[[["href"],[0,[["href"]]]]]},[{t:"li",a:{class:[["sidebar-item ",""],[["itemName"]]]}},[{t:"i",a:{class:"iconfont icon"}}],[{t:"span",a:{class:"text"}}],[["itemName"]]]])){}const l=JSON.parse('{"Team":{"item":[{"itemName":"members","href":"members.html"},{"itemName":"attribution","href":"attribution.html"}]},"Project":{"item":[{"itemName":"background","href":"background.html"},{"itemName":"design","href":"design.html"},{"itemName":"results","href":"results.html"},{"itemName":"discussion","href":"discussion.html"},{"itemName":"safety","href":"safety.html"}]},"Documentation":{"item":[{"itemName":"notebook","href":"notebook.html"},{"itemName":"protocols","href":"protocols.html"},{"itemName":"report","href":"report.html"},{"itemName":"supplementary information","href":"supplementary-information.html"}]},"Reference":{"link":{"href":"Reference.html"},"item":[]}}'),a=i.p+"images/img.png";var c=i(4692);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,o,s,r,l=[],a=!0,c=!1;try{if(s=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;a=!1}else for(;!(a=(n=s.call(i)).done)&&(l.push(n.value),l.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(c)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}new o({$data:{src:a}}).$mount({target:document.body});for(var d=function(){var t=h(f[p],2),e=t[0],i=t[1],n=null;n=i.link?new s({$data:{itemName:e,href:i.link.href,display:"none"}}):new s({$data:{itemName:e}});var o=[];i.item.forEach((function(t){o.push(new r({$data:{itemName:t.itemName,href:t.href}}))})),n.list=o,n.$mount({target:document.querySelector(".sidebar-itembox> ul:first-of-type"),option:{append:!0}})},p=0,f=Object.entries(l);p<f.length;p++)d();c("svg.angle-down").attr({viewbox:"0 0 23.55 11.67"}).find("path").attr({d:"M75.3,265c-2.53,2.22-5,4.44-7.51,6.72-.49.44-1,.89-1.45,1.34l-.38.34c-.31.3.17-.09,0,0s.7-.13.43-.11h-.21c.43.05.16,0,.51.14-.07,0-.14-.11-.21-.14.48.21.11.08-.1-.1L65.14,272c-2.66-2.41-5.4-4.72-8.16-7-1.47-1.22-3.6.89-2.12,2.13,2.67,2.22,5.33,4.46,7.91,6.78a14.34,14.34,0,0,0,2.4,2.07c1.67.93,2.92-.46,4.07-1.52,2.68-2.49,5.43-4.92,8.18-7.33,1.46-1.28-.67-3.39-2.12-2.13Z",fill:"#fff",transform:"scale(0.5) translate(-54.36 -264.62)"}),c.fn.slideLeft=function(t){return this.animate({width:"hide",opacity:"hide"},t)},c.fn.slideRight=function(t){return this.animate({width:"show",opacity:"show"},t)},c(document).ready((function(){var t=200,e=[200,70];function i(t){document.documentElement.style.setProperty("--sidebar-width",t+"px"),c(".checkbox .angle-down").css("transform",t===e[0]?"rotate(90deg)":"rotate(-90deg)")}c(document).ready((function(){c(".checkbox .angle-down").css("transform","rotate(90deg)"),c(".angle-down").css("transform-origin","center")})),c(".checkbox").on("click",(function(){t===e[0]?(c(".sidebar-sub-toggle").removeClass("sidebar-sub-toggle-clicked"),c(".sidebar-sub-toggle + .nav-bar").slideUp((function(){c(".angle-down").not(".checkbox .angle-down").css("transform","rotate(0deg)")})),t=e[1],c(".angle-down").not(".checkbox .angle-down").fadeOut(300),c(".githubtext").slideLeft(200)):(t=e[0],c(".angle-down").not(".checkbox .angle-down").fadeIn(100),c(".githubtext").slideRight(200)),i(t)})),c(".sidebar-sub-toggle").on("click",(function(){var n=this;t===e[1]&&(i(t=e[0]),c(".angle-down").not(".checkbox .angle-down").fadeIn(100),c(".githubtext").slideRight(200)),c(this).toggleClass("sidebar-sub-toggle-clicked").next().slideToggle((function(){var t=c(n).children(".angle-down");c(n).next().is(":visible")?t.css("transform","rotate(180deg)"):t.css("transform","rotate(0deg)")}))})),c(".sidebar-sub-toggle").hover((function(t){c(this).css("background","var(--sidebar-color-light)"),t.preventDefault()}),(function(t){c(this).css("background","var(--sidebar-color)"),t.preventDefault()})),c(".sidebar-item").hover((function(t){c(this).css("background","var(--sidebar-item-color-light)"),t.preventDefault()}),(function(t){c(this).css("background","var(--sidebar-item-color)"),t.preventDefault()}));var n=window.location.pathname;c(".sidebar-contain a").filter((function(){var t=c(this).attr("href");return!!t&&t.replace(/^\//,"").split("/").pop().replace(/\.html$/,"")===n.replace(/^\//,"").split("/").pop().replace(/\.html$/,"")})).each((function(){c(this).find(".sidebar-item").addClass("sidebar-item-important"),c(this).closest("ul.nav-bar").slideDown(300);var t=c(this).closest("ul.nav-bar").prev(".sidebar-sub-toggle");t.addClass("sidebar-sub-toggle-important"),t.find(".angle-down").css("transform","rotate(180deg)")})),c(".sidebar-sub-toggle").closest("a").filter((function(){var t=c(this).attr("href");return!!t&&t.replace(/^\//,"")===n.replace(/^\//,"")})).each((function(){c(this).find(".sidebar-sub-toggle").addClass("sidebar-sub-toggle-important")}))}));i(5373);class g extends((0,n.vt)([{t:"a",a:{class:"next",href:"#"}},[{t:"div"},"NEXT"]])){}(new g).$mount({target:document.body,option:"append"})}},t=>{t.O(0,["vendors-node_modules_ef-core_src_ef-core_js-node_modules_jquery_dist_jquery_js"],(()=>{return e=5984,t(t.s=e);var e}));t.O()}]);