
$(document).ready(function () {

	var donutsLandingPages = ["baugewerbe-domains","bildungssektor-domains","finanzsektor-domains","essen-und-trinken-domains"];

	var dtmFloodlightFacebook = function (array) {

     for (var i = 0; i < array.length; i++) {

		  console.log (array.indexOf(array[i])+ "= " + array[i]);
	 }

	};

	 dtmFloodlightFacebook(donutsLandingPages);

	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $('.children').hide();
 
  $('.top-child').click(function () {

    $(this).siblings().toggle();
  
  });


});

 