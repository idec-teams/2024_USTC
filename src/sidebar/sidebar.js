// import "src/themify-icons.css";
import "@src/nano.css";
import "@src/nanoscroller.css";
import "@src/jquery.nanoscroller.min.js";
import "./sidebar.css";
// import "@src/icons/themify-icons.css"
// import "@src/sidebar/themify-icons.css";
import Sidebar from "./sidebar.eft";
import Sidebarsubtoggle from "./sidebarsubtoggle.eft";
import Sidebaritem from "./sidebaritem.eft";
import sidebarlist from "./sidebarlist.json";
new Sidebar().$mount({ target: document.body });
for (let [key, value] of Object.entries(sidebarlist)) {
  let sidebarsubtoggle = null;
  if (value.link) {
    sidebarsubtoggle = new Sidebarsubtoggle({
      $data: {
        itemName: key,
        href: value.link.href,
        display: "none",
      },
    });
  } else {
    sidebarsubtoggle = new Sidebarsubtoggle({
      $data: {
        itemName: key,
      },
    });
  }
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
//angle-down path配置
$("svg.angle-down").attr({ viewbox: "0 0 23.55 11.67" }).find("path").attr({
  d: "M75.3,265c-2.53,2.22-5,4.44-7.51,6.72-.49.44-1,.89-1.45,1.34l-.38.34c-.31.3.17-.09,0,0s.7-.13.43-.11h-.21c.43.05.16,0,.51.14-.07,0-.14-.11-.21-.14.48.21.11.08-.1-.1L65.14,272c-2.66-2.41-5.4-4.72-8.16-7-1.47-1.22-3.6.89-2.12,2.13,2.67,2.22,5.33,4.46,7.91,6.78a14.34,14.34,0,0,0,2.4,2.07c1.67.93,2.92-.46,4.07-1.52,2.68-2.49,5.43-4.92,8.18-7.33,1.46-1.28-.67-3.39-2.12-2.13Z",
  fill: "#fff",
  transform: "scale(0.5) translate(-54.36 -264.62)",
});
$.fn.slideLeft = function (speed) {
  return this.animate({ width: "hide", opacity: "hide" }, speed);
};

$.fn.slideRight = function (speed) {
  return this.animate({ width: "show", opacity: "show" }, speed);
};
$(document).ready(function () {
  //侧边栏切换函数
  let changeWidth = 200;
  const widths = [200, 70];
  function updateSidebarWidth(width) {
    document.documentElement.style.setProperty("--sidebar-width", width + "px");
    const checkboxAngleDown = $(".checkbox .angle-down");
    checkboxAngleDown.css(
      "transform",
      width === widths[0] ? "rotate(90deg)" : "rotate(-90deg)"
    );
  }

  $(document).ready(function () {
    $(".checkbox .angle-down").css("transform", "rotate(90deg)");

    $(".angle-down").css("transform-origin", "center");
  });

  $(".checkbox").on("click", function () {
    if (changeWidth === widths[0]) {
      $(".sidebar-sub-toggle").removeClass("sidebar-sub-toggle-clicked");
      $(".sidebar-sub-toggle + .nav-bar").slideUp(() => {
        $(".angle-down")
          .not(".checkbox .angle-down")
          .css("transform", "rotate(0deg)");
      });
      changeWidth = widths[1]; //变瘦
      $(".angle-down").not(".checkbox .angle-down").fadeOut(300);
      $(".githubtext").slideLeft(200);
    } else {
      changeWidth = widths[0]; //变胖
      $(".angle-down").not(".checkbox .angle-down").fadeIn(100);
      $(".githubtext").slideRight(200);
    }
    updateSidebarWidth(changeWidth);
  });

  $(".sidebar-sub-toggle").on("click", function () {
    if (changeWidth === widths[1]) {
      changeWidth = widths[0];
      updateSidebarWidth(changeWidth); //变胖
      $(".angle-down").not(".checkbox .angle-down").fadeIn(100);
      $(".githubtext").slideRight(200);
    }

    $(this)
      .toggleClass("sidebar-sub-toggle-clicked")
      .next()
      .slideToggle(() => {
        const angleDown = $(this).children(".angle-down");
        if ($(this).next().is(":visible")) {
          angleDown.css("transform", "rotate(180deg)");
        } else {
          angleDown.css("transform", "rotate(0deg)");
        }
      });
  });

  //侧边栏hover
  $(".sidebar-sub-toggle").hover(
    function (event) {
      // console.log($(this));
      $(this).css("background", "var(--sidebar-color-light)");
      event.preventDefault();
    },
    function (event) {
      $(this).css("background", "var(--sidebar-color)");
      event.preventDefault();
    }
  );
  $(".sidebar-item").hover(
    function (event) {
      // console.log($(this));
      $(this).css("background", "var(--sidebar-item-color-light)");
      event.preventDefault();
    },
    function (event) {
      $(this).css("background", "var(--sidebar-item-color)");
      event.preventDefault();
    }
  );
  //侧边栏自动展开函数
  var currentPath = window.location.pathname;

  $(".sidebar-contain a")
    .filter(function () {
      var linkPath = $(this).attr("href");
      if (!linkPath) return false;
      var normalizedLinkPath = linkPath.replace(/^\//, "");
      var normalizedCurrentPath = currentPath.replace(/^\//, "");

      return normalizedLinkPath === normalizedCurrentPath;
    })
    .each(function () {
      $(this).find(".sidebar-item").addClass("sidebar-item-important");
      $(this).closest("ul.nav-bar").slideDown(300);
      const sidebarToggle = $(this)
        .closest("ul.nav-bar")
        .prev(".sidebar-sub-toggle");
      sidebarToggle.addClass("sidebar-sub-toggle-important");
      const angleDown = sidebarToggle.find(".angle-down");
      angleDown.css("transform", "rotate(180deg)");
    });

  $(".sidebar-sub-toggle")
    .closest("a")
    .filter(function () {
      var linkPath = $(this).attr("href");
      if (!linkPath) return false;
      var normalizedLinkPath = linkPath.replace(/^\//, "");
      var normalizedCurrentPath = currentPath.replace(/^\//, "");

      return normalizedLinkPath === normalizedCurrentPath;
    })
    .each(function () {
      $(this)
        .find(".sidebar-sub-toggle")
        .addClass("sidebar-sub-toggle-important");
    });
});
