function loadPDF(id, url,n) {
  const $target = $(`#${id}`);
  const __pdfPath ="./pdfjs/web/viewer.html?file=" + url;
  $target.html(
    `<iframe  width="100%" height="800vh" frameborder="0" />`
  );
  $target.find("iframe").attr("src", __pdfPath);
  // function viewboxchange() {
  //   let times=n*$target.find("iframe").width();
  //   $target.find("iframe").css("height",times+"px");}
  // $(window).on('resize',viewboxchange() );
  // viewboxchange();
}
export default loadPDF;