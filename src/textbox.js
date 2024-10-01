import textbox from "@src/textbox.eft";
import "@src/textbox.css";

(new textbox()).$mount({target: document.body});
// for (let [key, value] of Object.entries(sidebarlist)) {
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