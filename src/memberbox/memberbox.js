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
// $(".member-photo").on("cilck", function () {
//   console.log( $(this));

//   // $(this).siblings(".introduction").css("display", "block");
// });
// let clickedElement=null;
// $(".member-container").on("click", function () {
//   // clickedElement=$(this);
//   const topPosition = $(window).height() / 2 - $(this).outerHeight() / 2;
//   const leftPosition = $(window).width() / 2 - $(this).outerWidth() / 2;
//   $(this).addClass("expanded").animate(
//     {
//       top: topPosition,
//       left: leftPosition,
//     },
//     500);
// });

// // 点击其他区域时，缩小放大的元素
// $(document).on('click', function() {
//   if (clickedElement) {
//       clickedElement.removeClass('expanded');
//       clickedElement = null;
//   }
// });
