import table from "./table.eft";
import tableitem from "./tableitem.eft";
// import tablelist from "./tablelist.json";
class tableCreate {
  constructor(textlist) {
    const tableT = new table();
    for (let [key, value] of Object.entries(textlist)) {
      tableT.list.push(
        new tableitem({
          $data: { title: key, dif: key },
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
      value.forEach(function (element) {
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
    return tableT;
  }
}
export default tableCreate;
