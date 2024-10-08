
import text from "@pages/report/reporttext.js";
import textboxcreate from "@src/textbox/textbox.js";
import pdf from "@src/pdf/USTC-supplemantary-info.pdf";
import loadPDF from "@src/pdf/loadPDF.js";
import "./report.css";
textboxcreate(text);

loadPDF("pdf", pdf, 1.37);
$(".next").attr('href', 'supplementary-information.html');