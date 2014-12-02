$(document).ready(function() {
  $(".slashed").each(function(){
    var splitted = $(this).text().split(" ");
    // clear text so we'll use the javascript generated string
    $(this).text("");
    for (i = 0; i < splitted.length; i++) {
      // we'll use :before (through the attribute "data-text" on the span) to make the magic happen
      $(this).append("<span data-text='" + splitted[i] + "&nbsp;'><em>" + splitted[i] + "&nbsp;</em> </span>");
    }
  });
});