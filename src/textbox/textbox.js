import Textbox from "./textbox.eft";
import ol from "./ol.eft";
import li from "./li.eft";
import pre from "./pre.eft";
import img from "./img.eft";
import h1 from "./h1.eft";
import h2 from "./h2.eft";
import mark from "./mark.eft";
import textboxcontainer from "./textboxcontainer.eft";
import ul from "./ul.eft";
import em from "./em.eft";
import chunk from "./chunk.eft";
import span from "./span.eft";
import strong from "./strong.eft";
import citation from "./citation.eft";
import sub from "./sub.eft";
import sup from "./sup.eft";
//输入textobj，挂载用的list，实例化的挂载对象
function textcreate(obj, list, text) {
  obj.forEach((element) => {
    if (element.strong) {
      text.list.push(new strong({ $data: { text: element.strong } }));
    } else if (element.em) {
      text.list.push(new em({ $data: { text: element.em } }));
    } else if (element.span) {
      text.list.push(new span({ $data: { text: element.span } }));
    }else if (element.sup) {
      text.list.push(new sup({ $data: { text: element.sup } }));
    }else if (element.sub) {
      text.list.push(new sub({ $data: { text: element.sub } }));
    } else if (element.citation) {
      text.list.push(
        new citation({
          $data: { text: element.citation.text, href: element.citation.href },
        })
      );
    } else {
      text.list.push(new chunk({ $data: { text: element.text } }));
    }
  });
  list.push(text);
}
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
        const orderedlist =
          !markpoint && !image && element.ollist !== undefined;
        const unorderedlist =
          !orderedlist && !markpoint && !image && element.ullist !== undefined;
        const preformattedtext =
          !unorderedlist && !markpoint && !image && !orderedlist;

        if (preformattedtext) {
          if (element.title) {
            if (typeof element.title === "string") {
              textbox.textlist.push(
                new h1({ $data: { title: element.title, id: element.title } })
              );
            } else {
              let id = "";
              element.title.forEach((element) => {
                for (let [a, b] of Object.entries(element)) {
                  id += b;
                }
              });
              const h1text = new h1({ $data: { id: id } });
              textcreate(element.title, textbox.textlist, h1text);
            }
          }
          if (element.subtitle) {
            if (typeof element.subtitle === "string") {
              textbox.textlist.push(
                new h2({
                  $data: { subtitle: element.subtitle, id: element.subtitle },
                })
              );
            } else {
              let id = "";
              element.subtitle.forEach((element) => {
                for (let [a, b] of Object.entries(element)) {
                  id += b;
                }
              });
              const h2text = new h2({ $data: { id: id } });
              textcreate(element.subtitle, textbox.textlist, h2text);
            }
          }
          if (element.text) {
            if (typeof element.text === "string") {
              textbox.textlist.push(new pre({ $data: { text: element.text } }));
            } else {
              let title = "";
              for (let [a, b] of Object.entries(element.text)) {
                title = title + b;
              }
              const pretext = new pre();
              textcreate(element.text, textbox.textlist, pretext);
            }
          }
        } else if (image) {
          if (typeof element.text === "string") {
            textbox.textlist.push(
              new img({
                $data: {
                  text: element.text,
                  image_name: element.image_name,
                  src: element.src,
                },
              })
            );
          } else {
            const imgtext = new img({
              $data: { image_name: element.image_name, src: element.src },
            });
            textcreate(element.text, textbox.textlist, imgtext);
          }
        } else if (orderedlist) {
          const ollist = new ol();
          element.ollist.forEach((lielement) => {
            if (typeof lielement.text === "string") {
              ollist.ollist.push(new li({ $data: { text: lielement.text } }));
            } else {
              const lilist = new li();
              textcreate(lielement.text, ollist.ollist, lilist);
            }
          });
          textbox.textlist.push(ollist);
        } else if (unorderedlist) {
          const ullist = new ul();
          element.ullist.forEach((lielement) => {
            if (typeof lielement.text === "string") {
              ullist.ullist.push(new li({ $data: { text: lielement.text } }));
            } else {
              const lilist = new li();
              textcreate(lielement.text, ullist.ullist, lilist);
            }
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
