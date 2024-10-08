import "@src/pages/index/index.css";
import text from "@pages/index/indextext.js";
import textboxcreate from "@src/textbox/textbox.js";
import photo from "./photo.png"
textboxcreate(text);
$("#welcome").replaceWith('<div id="welcome"><div class="scroll-message">Welcome to</div><div class="scroll-message">our Studies</div><div class="scroll-message">presented jointly by USTC</div></div>');
$("#picture").closest(".textbox").replaceWith(`<img src="${photo}" class="photo">`);
$(document).ready(function () {
  // 页面初始状态，检查滚动条是否在顶部并设置文字样式
  if ($(window).scrollTop() === 0) {
    $('.scroll-message').removeClass('blur-fade-out').addClass('clear-fade-in');
  } else {
    $('.scroll-message').removeClass('clear-fade-in').addClass('blur-fade-out');
  }

  // 监听滚动事件
  $(window).on('scroll', function () {
    if ($(window).scrollTop() === 0) {
      // 滚动条在顶部时，文字变为清晰状态
      $('.scroll-message').removeClass('blur-fade-out')
        .addClass('clear-fade-in'); // 添加清晰恢复动画
    } else {
      // 开始滚动，启动模糊消失动画
      $('.scroll-message').removeClass('clear-fade-in')
        .addClass('blur-fade-out'); // 添加模糊消失动画
    }
  });
});

$(".next").attr('href', 'members.html');

