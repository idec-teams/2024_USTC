import memberbox from "@src/memberbox/memberbox.eft";
import individualbox from "@src/memberbox/individualbox.eft";
import textbox from "@src/textbox/textbox.eft";
import memberlist from "@src/memberbox/memberlist.js";
import "@src/memberbox/memberbox.css";
// class memberBoxCreate extends textbox {
//   constructor() {
//     super();
//     const memberBox = new memberbox();
//     memberBox.list.push(new individualbox());
//     this.memberlist = memberBox;
//   }
// }
// new memberBoxCreate().$mount({ target: document.body });
new textbox().$mount({ target: document.body });
for (let [key, value] of Object.entries(memberlist)) {
  // console.log(document.querySelector("div.container"));

  const memberBox = new memberbox({
    $data: {
      title: key,
    },
  });
  let array = [];
  value.forEach(function (element) {
    array.push(
      new individualbox({
        $data: {
          src: element.src,
          name: element.name,
          introduction: element.introduction,
        },
      })
    );
  });
  memberBox["list"] = array;
  memberBox.$mount({
    target: document.querySelector(".textbox"),
    option: {
      append: true,
    },
  });
}
$(".member-photo-container").hover(
  function () {
    $(this).css("transform", "scale(1.2)");
  },
  function () {
    $(this).css("transform", "scale(1)");
  }
);
$(".member-photo").on("cilck", function () {
  console.log($(this));

  // $(this).siblings(".introduction").css("display", "block");
});
let $clickedElement = null; // 用于记录当前被放大的父元素

// 监听子元素的点击事件，并在事件中操作父元素
$(".member-container .member-photo-container").on("click", function (e) {
  e.stopPropagation(); // 阻止事件冒泡，防止触发 document 的点击事件

  const $parent = $(this).closest(".member-container"); // 找到子元素最近的 .member-container 父元素

  // 如果点击的父元素已经被放大，再次点击则恢复原状
  if ($clickedElement && $clickedElement.is($parent)) {
    $parent.css({
      transform: "scale(1) translate(0px, 0px)", // 恢复原始大小和位置
      "z-index": 0,
    });
    $clickedElement = null; // 重置点击状态
  } else {
    // 如果有其他父元素被放大，则先将其恢复原状
    if ($clickedElement) {
      $clickedElement.css({
        transform: "scale(1) translate(0px, 0px)",
        "z-index": 0,
      });
    }

    // 获取当前父元素的偏移量
    const top = $parent.offset().top;
    const left = $parent.offset().left;

    // 计算父元素居中的偏移量
    const topPosition = ($(window).height() / 2 - top) / 2 - ($parent.outerHeight() / 3) * 2;
    const leftPosition = ($(window).width() / 2 - left) / 2;

    // 放大并移动父元素到中心位置
    $parent.css({
      transform: `scale(2) translate(${leftPosition}px, ${topPosition}px)`,
      "z-index": 9,
    });

    $clickedElement = $parent; // 记录当前被放大的父元素
  }
});

// 处理点击页面其他位置时恢复放大的父元素
$(document).on("click", function () {
  if ($clickedElement) {
    $clickedElement.css({
      transform: "scale(1) translate(0px, 0px)", // 恢复原始大小和位置
      "z-index": 0,
    });
    $clickedElement = null; // 重置点击状态
  }
});
