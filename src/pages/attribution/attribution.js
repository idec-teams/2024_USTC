import text from "@pages/attribution/attributiontext.js";
import textboxcreate from "@src/textbox/textbox.js";
import table from "./table.eft";
import "./attribution.css";
textboxcreate(text);
new table().$mount({ target: document.querySelector("#table") });
$(".next").attr('href', './supplementary-information.html');
