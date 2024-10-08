
import text from "@pages/notebook/notebooktext.js";
import textboxcreate from "@src/textbox/textbox.js";
import tableCreate from "@src/table/table.js";
import "@src/table/tablecontrol.js";
textboxcreate(text);
new tableCreate(text).$mount({ target: document.body });
$(".next").attr('href', 'supplementary-information.html');