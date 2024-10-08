
import text from "@pages/report/reporttext.js";
import textboxcreate from "@src/textbox/textbox.js";
import "./report.css";
textboxcreate(text);

import pdf from "@src/pdf/2024-USTCiDEC-report.pdf";
import loadPDF from "@src/pdf/loadPDF.js";
loadPDF("pdf", pdf, 1.37);
$(".next").attr('href', 'supplementary-information.html');