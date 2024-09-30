// import "src/themify-icons.css";
import "@src/nano.css";
import "@src/nanoscroller.css";
import "@src/jquery.nanoscroller.min.js";
import "@src/sidebar.css";
import "@src/themify-icons.css";
import Sidebar from "@src/sidebar.eft";
import Sidebaritem from "@src/sidebaritem.eft";

const sidebar = new Sidebar();
// sidebar.sidebarItem.push(
//   new Sidebaritem({
//     $data: { itemName: "Members" },
//   })
// );
const sidebarlist = {
  member: [{ itemName: "member", href: "home.html" }],
  future: [{ itemName: "future", href: "home.html" }],
};
for (let [key, value] of Object.entries(sidebarlist)) {
  let array = [];

  value.forEach(function (element) {
    array.push(
      new Sidebaritem({
        $data: {
          itemName: element.itemName,
          href: element.href,
        },
      })
    );
  });
  sidebar[key + "Item"] = array;
}
sidebar.$mount({ target: document.body });
//切换侧边栏开关
let changeWidth = 250;
$(".checkbox").on("click", function () {
  if (!$("#sidebar").hasClass("clicked")) {
    $(".sidebar-sub-toggle+.nav-bar").slideUp();
  }
  // 当前宽度
  const widths = [250, 70];
  changeWidth = changeWidth === widths[0] ? widths[1] : widths[0];
  document.documentElement.style.setProperty(
    "--sidebar-width",
    changeWidth + "px"
  );
});
//切换li开关
$(".sidebar-sub-toggle").on("click", function () {
  $("#sidebar").removeClass("clicked");
  $(this).next().slideToggle(); // 切换显示和隐藏，带有滑动效果
});
$(".sidebar-for-window li").hover(
  function (event) {
    // console.log($(this));
    $(this).css("background-color", "var(--toggle-color)");
    event.preventDefault();
  },
  function (event) {
    $(this).css("background-color", "var(--shell-color)");
    event.preventDefault();
  }
);
