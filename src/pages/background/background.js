
import text from "@pages/background/backgroundtext.js";
import textboxcreate from "@src/textbox/textbox.js";
import tableCreate from "@src/table/table.js";
import "@src/table/tablecontrol.js";
textboxcreate(text);
new tableCreate().$mount({ target: document.body });
$(".next").attr('href', './supplementary-information.html');