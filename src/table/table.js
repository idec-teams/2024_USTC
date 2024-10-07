import table from "./table.eft";
import tableitem from "./tableitem.eft";
// import tablelist from "./tablelist.json";

class tableCreate {
  constructor() {
    const tableT = new table();
    $(".textbox-container")
      .find("h1, h2")
      .each(function () {
        var id = $(this).attr("id");
        if (id) {
          if ($(this).is("h1")) {
            tableT.list.push(
              new tableitem({
                $data: {
                  title: id,
                  dif: "title",
                },
                $methods: {
                  scroll({ state }) {
                    var safeTitle = state.$data.title.replace(/ /g, "\\ ");
                    var $target = $("#" + safeTitle);
                    $("html, body").animate(
                      {
                        scrollTop: $target.offset().top,
                      },
                      800
                    );
                  },
                },
              })
            );
          } else if ($(this).is("h2")) {
            tableT.list.push(
              new tableitem({
                $data: {
                  title: id,
                },
                $methods: {
                  scroll({ state }) {
                    var safeTitle = state.$data.title.replace(/ /g, "\\ ");
                    var $target = $("#" + safeTitle);
                    $("html, body").animate(
                      {
                        scrollTop: $target.offset().top,
                      },
                      800
                    );
                  },
                },
              })
            );
          }
        }
      });
    return tableT;
  }
}

// class tableCreate {
//   constructor(textlist) {
//     const tableT = new table();
//     for (let [key, value] of Object.entries(textlist)) {
//       if (key !== "mark") {
//         value.forEach(function (element) {
//           if (element.title) {
//           }
//           if (element.subtitle) {
//           }
//         });
//       }
//     }
//     return tableT;
//   }
// }
export default tableCreate;
