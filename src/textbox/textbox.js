import Textbox from "@src/textbox/textbox.eft";
import ol from "@src/textbox/ol.eft";
import li from "@src/textbox/li.eft";
import pre from "@src/textbox/pre.eft";
import img from "@src/textbox/img.eft";
import h1 from "@src/textbox/h1.eft";
import h2 from "@src/textbox/h2.eft";
import mark from "@src/textbox/mark.eft";
import textboxcontainer from "@src/textbox/textboxcontainer.eft";
import ul from "@src/textbox/ul.eft";

// import textlist from "@pages/home/hometext.json";
// import "@src/textbox/textbox.css";

// (new textbox()).$mount({target: document.body});
// for (let [key, value] of Object.entries(text)) {
//   const sidebarsubtoggle = new Sidebarsubtoggle({
//     $data: {
//       itemName: key,
//       href: value.link.href,
//     },
//   });
//   let array = [];
//   value.item.forEach(function (element) {
//     array.push(
//       new Sidebaritem({
//         $data: {
//           itemName: element.itemName,
//           href: element.href,
//         },
//       })
//     );
//   });
//   sidebarsubtoggle["list"] = array;
//   sidebarsubtoggle.$mount({
//     target: document.querySelector(".sidebar-itembox> ul:first-of-type"),
//     option: {
//       append: true,
//     },
//   });
// }
function textboxcreate(textlist) {
  const TBC = new textboxcontainer();
  for (let [key, value] of Object.entries(textlist)) {
    if (key === "mark") {
      TBC.list.push(new mark({ $data: { mark: value } }));
    } else {
      const textbox = new Textbox({});
      value.forEach((element) => {
        const markpoint = element.mark !== undefined;
        const image = !markpoint && element.src !== undefined;
        const orderedlist = !markpoint && !image && element.ollist !== undefined;
        const unorderedlist = !orderedlist && !markpoint && !image && element.ullist !== undefined; 
        const preformattedtext = !unorderedlist && !markpoint && !image && !orderedlist;

        if (preformattedtext) {
          if (element.title) {
            textbox.textlist.push(new h1({ $data: { title: element.title } }));
          }
          if (element.subtitle) {
            textbox.textlist.push(
              new h2({ $data: { subtitle: element.subtitle } })
            );
          }
          if (element.text) {
            textbox.textlist.push(new pre({ $data: { text: element.text } }));
          }
        } else if (image) {
          textbox.textlist.push(
            new img({
              $data: {
                text: element.text,
                image_name: element.image_name,
                src: element.src,
              },
            })
          );
        } else if (orderedlist) {
          const ollist = new ol();
          element.ollist.forEach((lielement) => {
            ollist.ollist.push(new li({ $data: { text: lielement.text } }));
          });
          textbox.textlist.push(ollist);
        }else if (unorderedlist) {
          const ullist = new ul();
          element.ullist.forEach((lielement) => {
            ullist.ullist.push(new li({ $data: { text: lielement.text } }));
          });
          textbox.textlist.push(ullist);
        } else if (markpoint) {
          textbox.textlist.push(
            new mark({
              $data: {
                mark: element.mark,
              },
            })
          );
        }
      });
      TBC.list.push(textbox);
    }
  }
  TBC.$mount({ target: document.body });
}
export default textboxcreate;
