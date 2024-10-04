import Textbox from "@src/textbox/textbox.eft";
import ol from "@src/textbox/ol.eft";
import li from "@src/textbox/li.eft";
import pre from "@src/textbox/pre.eft";
import img from "@src/textbox/img.eft";

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
  for (let [key, value] of Object.entries(textlist)) {
    const textbox = new Textbox({ $data: { title: "" + key } });
    value.forEach((element) => {
      const image = element.src !== undefined;
      const orderedlist = !image && element.ollist !== undefined;
      const preformattedtext = !image && !orderedlist;
      console.log(orderedlist);
      
      if (preformattedtext) {
        textbox.textlist.push(
          new pre({ $data: { text: element.text, subtitle: element.subtitle } })
        );
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
          ollist.ollist.push(
            new li({ $data: { text: lielement.text } })
          );
        })
        textbox.textlist.push(ollist);
      }
    });
    textbox.$mount({
      target: document.body,
    });
  }
}
export default textboxcreate;
