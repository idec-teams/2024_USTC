import Textbox from "@src/textbox/textbox.eft";
import p from "@src/textbox/p.eft";
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
    const textbox = new Textbox({ $data: { title: key } });
    value.forEach((element) => {
      if (element.src === undefined) {
        textbox.textlist.push(
          new p({ $data: { text: element.text, subtitle: element.subtitle } })
        );
      } else {
        textbox.textlist.push(
          new img({
            $data: {
              text: element.text,
              image_name: element.image_name,
              src: element.src,
            },
          })
        );
      }
    });
    textbox.$mount({
      target: document.body,
    });
  }
}
export default textboxcreate;
