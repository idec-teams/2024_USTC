
import text from "@pages/supplementary-information/supplementary-informationtext.js";
import textboxcreate from "@src/textbox/textbox.js";
textboxcreate(text);
import pdf from "@src/pdf/USTC-supplemantary-info.pdf";
import loadPDF from "@src/pdf/loadPDF.js";
loadPDF("pdf", pdf, 1.37);
$(".next").attr('href', 'Reference.html');