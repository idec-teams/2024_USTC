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
console.log(1111);

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
  const $introduction = $parent.find(".introduction"); // 获取 .introduction 元素
  const $overlay = $(".overlay"); // 获取遮罩层

  // 如果点击的父元素已经被放大，再次点击则恢复原状
  if ($clickedElement && $clickedElement.is($parent)) {
    $parent.css({
      transform: "scale(1) translate(0px, 0px)", // 恢复原始大小和位置
      "z-index": 0,
    });
    $introduction.removeClass("show").addClass("hide"); // 切换到隐藏动画
    setTimeout(() => {
      $introduction.removeClass("hide");
    }, 600); // 在动画完成后（600ms）重置状态

    // 隐藏遮罩层
    $overlay.removeClass("show");
    $clickedElement = null; // 重置点击状态
  } else {
    // 如果有其他父元素被放大，则先将其恢复原状
    if ($clickedElement) {
      const $prevIntroduction = $clickedElement.find(".introduction");
      $clickedElement.css({
        transform: "scale(1) translate(0px, 0px)",
        "z-index": 0,
      });
      $prevIntroduction.removeClass("show").addClass("hide"); // 切换之前元素为隐藏状态
      setTimeout(() => {
        $prevIntroduction.removeClass("hide");
      }, 600); // 在动画完成后（600ms）重置状态
    }

    // 获取当前父元素的偏移量
    const top = $parent.offset().top;
    const left = $parent.offset().left;

    // 获取视口的高度和宽度
    const viewportHeight = $(window).height();
    const viewportWidth = $(window).width();

    // 获取页面滚动位置
    const scrollTop = $(window).scrollTop();

    // 计算元素居中视口的位置（考虑滚动条位置）
    const topPosition =(scrollTop + viewportHeight / 2 - top - $parent.outerHeight()*2)/2;
    const leftPosition = (viewportWidth / 2 - left) / 2;

    // 放大并移动父元素到视口中央位置
    $parent.css({
      transform: `scale(2) translate(${leftPosition}px, ${topPosition}px)`,
      "z-index": 30, // 设置 z-index 为较小的值
    });

    $introduction.removeClass("hide").addClass("show"); // 切换为显示状态的动画

    // 显示遮罩层，使其覆盖其他所有元素（除了当前放大元素和 .sidebar-for-window）
    $overlay.addClass("show");

    // 确保被放大的元素不会被变暗
    $parent.css({
      "z-index": 30, // 确保放大元素在遮罩层之上
    });

    $clickedElement = $parent; // 记录当前被放大的父元素
  }
});

// 处理点击页面其他位置时恢复放大的父元素
$(document).on("click", function () {
  if ($clickedElement) {
    const $introduction = $clickedElement.find(".introduction");
    const $overlay = $(".overlay"); // 获取遮罩层

    $clickedElement.css({
      transform: "scale(1) translate(0px, 0px)", // 恢复原始大小和位置
      "z-index": 0,
    });

    $introduction.removeClass("show").addClass("hide"); // 切换为隐藏状态的动画
    setTimeout(() => {
      $introduction.removeClass("hide"); // 重置状态，确保后续能正常显示
    }, 600); // 在动画完成后（600ms）重置状态

    // 隐藏遮罩层
    $overlay.removeClass("show");
    $clickedElement = null; // 重置点击状态
  }
});

// 为 .introduction 添加点击事件，防止缩小和消失
$(".member-container .introduction").on("click", function (e) {
  e.stopPropagation(); // 阻止事件冒泡
});
