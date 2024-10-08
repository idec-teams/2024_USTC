const { renderToString } = require("katex");
import "./protocols.css";
import text from "@pages/protocols/protocolstext.js";
import textboxcreate from "@src/textbox/textbox.js";
textboxcreate(text);
const arr1 = [
  "p_0^k",
  "p_1^k",
  "q_0^k",
  "q_1^k",
  "(\\psi_{\\text{ICU1}}, \\psi _{\\text{CC2}}) ",
  " (\\psi_{\\text{ICU2}}, \\psi_{\\text{CC2}})",
];
const renderedArray1 = arr1.map((element) => {
  return renderToString(element, {
    displayMode: false, // 使用行内模式
  });
});
const arr2 = [
  "\\psi _{ICU}=-\\frac{\\sum_{k = 1}^{64} \\left\\lvert p^k_{0}-p^k_{1} \\right\\rvert  }{64}",
  " \\psi _{CC}=-\\frac{\\sum_{k = 1 }^{3904}\\left\\lvert q^k_0-q^k_1 \\right\\rvert   }{3904}",
  "\\textit{if } \\psi_{\\text{ICU1}} > \\psi_{\\text{ICU2}} \\text{ and } \\psi_{\\text{CC1}} \\geq \\psi_{\\text{CC2}}, \\text{ sequence 1 dominates sequence 2.}",
  "\\textit{if } \\psi_{\\text{ICU1}} \\geq \\psi_{\\text{ICU2}} \\text{ and } \\psi_{\\text{CC1}} > \\psi_{\\text{CC2}}, \\text{ sequence 1 dominates sequence 2.}",
  "\\textit{if } \\psi_{\\text{ICU1}} < \\psi_{\\text{ICU2}} \\text{ and } \\psi_{\\text{CC1}} \\leq \\psi_{\\text{CC2}}, \\text{ sequence 2 dominates sequence 1.}",
  "\\textit{if } \\psi_{\\text{ICU1}} \\leq \\psi_{\\text{ICU2}} \\text{ and } \\psi_{\\text{CC1}} < \\psi_{\\text{CC2}}, \\text{ sequence 2 dominates sequence 1.}",
];
const renderedArray2 = arr2.map((element) => {
  return renderToString(element, {
    // displayMode: false,  // 使用行内模式
  });
});
let i = 0;
$(".container span").each(function () {
  // 使用当前元素替换内容
  $(this).replaceWith(renderedArray1[i % renderedArray1.length]);
  i++; // 递增索引
});
i = 0;
$(".mark").each(function () {
  // 使用当前元素替换内容
  $(this).html(renderedArray2[i % renderedArray2.length]);
  i++; // 递增索引
});
$(".next").attr("href", "report.html");
