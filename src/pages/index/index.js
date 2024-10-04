import "@src/pages/index/index.css";
import textboxcreate from "@src/textbox/textbox.js";
import indextext from "@pages/index/indextext.js";
import tableCreate from "@src/table/table.js";
import "@src/table/table.css";
textboxcreate(indextext);
new tableCreate(indextext).$mount({ target: document.body });
// $("a[href^='#']").on("click", function (event) {
//   event.preventDefault(); // 阻止默认的跳转行为

//   // 获取 href 的值，即目标元素的 ID
//   var target = this.hash;
//   var $target = $(target);

//   // 执行动画，滚动到目标元素的位置
//   $("html, body").animate(
//     {
//       scrollTop: $target.offset().top,
//     },
//     800
//   );
// });
