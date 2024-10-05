import table from "./table.eft";
import tableitem from "./tableitem.eft";
// import tablelist from "./tablelist.json";
class tableCreate {
  constructor(textlist) {
    const tableT = new table();
    for (let [key, value] of Object.entries(textlist)) {
      if (key !== "mark") {
        value.forEach(function (element) {
          if (element.title) {
            tableT.list.push(
              new tableitem({
                $data: {
                  title: element.title,
                  // href: element.subtitle,
                },
                $methods: {
                  scroll({ state }) {
                    var $target = $("#" + state.$data.title);
                    $("html, body").animate(
                      {
                        scrollTop: $target.offset().top,
                      },
                      800
                    );
                  },
                  hover({ state }) {
                    console.log(11111);
                    
                    // state.$refs.title.style.color = "red";
                    console.log(state.$refs);
                    
                  },
                },
              })
            );
          }
          if (element.subtitle) {
            tableT.list.push(
              new tableitem({
                $data: {
                  title: element.subtitle,
                  // href: element.subtitle,
                },
                $methods: {
                  scroll({ state }) {
                    var $target = $("#" + state.$data.title);
                    $("html, body").animate(
                      {
                        scrollTop: $target.offset().top,
                      },
                      800
                    );
                  },
                  hover({ state }) {},
                },
              })
            );
          }
        });
      }
    }
    return tableT;
  }
}
export default tableCreate;
