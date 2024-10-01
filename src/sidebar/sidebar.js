// import "src/themify-icons.css";
import "@src/nano.css";
import "@src/nanoscroller.css";
import "@src/jquery.nanoscroller.min.js";
import "./sidebar.css";
// import "@src/sidebar/themify-icons.css";
import Sidebar from "./sidebar.eft";
import Sidebarsubtoggle from "./sidebarsubtoggle.eft";
import Sidebaritem from "./sidebaritem.eft";
import sidebarlist from "./sidebarlist.json";
new Sidebar().$mount({ target: document.body });
for (let [key, value] of Object.entries(sidebarlist)) {
  const sidebarsubtoggle = new Sidebarsubtoggle({
    $data: {
      itemName: key,
      href: value.link.href,
    },
  });
  let array = [];
  value.item.forEach(function (element) {
    array.push(
      new Sidebaritem({
        $data: {
          itemName: element.itemName,
          href: element.href,
        },
      })
    );
  });
  sidebarsubtoggle["list"] = array;
  sidebarsubtoggle.$mount({
    target: document.querySelector(".sidebar-itembox> ul:first-of-type"),
    option: {
      append: true,
    },
  });
}

//切换侧边栏开关
let changeWidth = 250;
$(".checkbox").on("click", function () {
  if (changeWidth === 250) {
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
  changeWidth = 250;
  document.documentElement.style.setProperty(
    "--sidebar-width",
    "250px"
  );
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
