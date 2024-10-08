
import text from "@pages/design/designtext.js";
import textboxcreate from "@src/textbox/textbox.js";
textboxcreate(text);
import tableCreate from "@src/table/table.js";
import "@src/table/tablecontrol.js";
new tableCreate(text).$mount({ target: document.body });