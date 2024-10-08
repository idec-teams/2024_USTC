const { renderToString } = require("katex");
import "./protocols.css"
import text from "@pages/protocols/protocolstext.js";
import textboxcreate from "@src/textbox/textbox.js";
textboxcreate(text);
const arr1 = ["p_0^k", "p_1^k", "q_0^k", "q_1^k"];
const renderedArray1 = arr1.map((element) => {
  return renderToString(element, {
    displayMode: false,  // 使用行内模式
  });
});
const arr2 = ["p_0^k", "p_1^k", "q_0^k", "q_1^k"];
const renderedArray2 = arr2.map((element) => {
  return renderToString(element, {
    // displayMode: false,  // 使用行内模式
  });
});
let i = 0;
$(".container span").each(function () {
  // 使用当前元素替换内容
  $(this).replaceWith(renderedArray1[i % renderedArray1.length]);
  i++;  // 递增索引
});
i=0;
$(".mark").each(function () {
  // 使用当前元素替换内容
  $(this).replaceWith(renderedArray2[i % renderedArray2.length]);
  i++;  // 递增索引
});
$(".next").attr('href', 'supplementary-information.html');