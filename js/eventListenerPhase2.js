$(document).ready(function () {

  function handler(event) {

    var target = $(event.target);

    if ( target.is("li") ) {

      target.children().toggle();
      target.siblings().children().hide();
    }
  }

  $("ul").click(handler).find("ul").hide();
});