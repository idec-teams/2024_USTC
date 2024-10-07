
import "@src/table/table.css";
$(document).ready(function () {
  $(document).on("scroll", function () {
    let scrollPosition = $(this).scrollTop();
    let windowHeight = $(window).height();
    $(".text h1, .text h2").each(function () {
      let elementOffset = $(this).position().top;
      let elementHeight = $(this).parent(".text").outerHeight();
      if (
        scrollPosition >= elementOffset-40 &&
        scrollPosition < elementOffset + elementHeight
      ) {
        let id = $(this).attr("id").trim();
        let matchingIndex = $(".table .table-title").filter(function () {
          return $(this).text().trim() === id;
        });
        $(".table .table-title").removeClass("enlarged");
        matchingIndex.addClass("enlarged");
      }
    });

    $(".text").each(function () {
      let textOffset = $(this).offset().top;
      let textHeight = $(this).outerHeight();
      if (
        textOffset + textHeight < scrollPosition ||
        textOffset > scrollPosition + windowHeight
      ) {
        $(this)
          .find("h1, h2")
          .each(function () {
            let id = $(this).attr("id").trim();
            let matchingIndex = $(".table .table-title").filter(function () {
              return $(this).text().trim() === id;
            });
            matchingIndex.removeClass("enlarged");
          });
      }
    });
  });
  $(".table-title").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "black");
    }
  );
});
