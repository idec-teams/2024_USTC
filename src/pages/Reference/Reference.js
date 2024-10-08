import text from "@pages/Reference/Referencetext.js";
import textboxcreate from "@src/textbox/textbox.js";
import "./Reference.css";
textboxcreate(text);
$(document).ready(function () {
  // 获取网址中的citation参数
  const params = new URLSearchParams(window.location.search);
  const citation = parseInt(params.get("citation"), 10);

  // 如果citation有效，则调用highlightCitation函数
  if (!isNaN(citation)) {
    highlightCitation(citation);
  }
});

function highlightCitation(citation) {
  const $li = $("ol li").eq(citation - 1); // 获取对应的li元素
  console.log($li.length);

  if ($li.length) {
    setTimeout(function () {
      $li.addClass("highlight");
    }, 500);
    const offset =
      $li.offset().top - ($(window).height() / 2 - $li.outerHeight() / 2);
    $("html, body").animate({ scrollTop: offset }, 500);
  }
}
$(".next").attr('href', 'index.html');
