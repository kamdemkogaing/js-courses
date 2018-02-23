
$(document).ready(function () {

	// var donutsLandingPages = ["baugewerbe-domains","bildungssektor-domains","finanzsektor-domains","essen-und-trinken-domains"];

	// var dtmFloodlightFacebook = function (array) {

 //     for (var i = 0; i < array.length; i++) {

	// 	  console.log (array.indexOf(array[i])+ "= " + array[i]);
	//  }

	// };

	//  dtmFloodlightFacebook(donutsLandingPages);

	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $('.children').hide();
 
  $('.top-child').click(function () {

    $(this).siblings().toggle();
  
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  var testObject = [
  { 
   usecase: "DEFAULT", 
   welcomeOffer: false, 
   normalPriceOutput: true, 
   normalPrice: 1.99, 
   grossNormalPriceOutput: true, 
   grossNormalPrice: 1.99, 
   actionPriceOutput: true, 
   actionPrice: 0.99, 
   grossActionPriceOutput: true, 
   grossActionPrice: 0.99 
  },
  { 
   usecase: "DEFAULT", 
   welcomeOffer: false, 
   normalPriceOutput: true, 
   normalPrice: 1.99, 
   grossNormalPriceOutput: true, 
   grossNormalPrice: 1.99, 
   actionPriceOutput: true, 
   actionPrice:1.99, 
   grossActionPriceOutput: true, 
   grossActionPrice: 0.99 
  }]

   // console.log(testObject[1].actionPrice);

   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


   /*var domainNames = ["kamdem.de","kamdem.africa","kamdem.org","kamdem.life"];

   var domainNamesList = function (item, index) {
   		console.log("'domain[" + index + "]:'" + item + "," + " " + "'tld[" + index + "]:'" + item);
   };

   domainNames.forEach(domainNamesList);*/

   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   var tldsArray = [];


   var domainListLengthInCart = 10;

   var testFunction = function () {
       for (var i = 0; i < domainListLengthInCart; i++) {
            tldsArray.push(i);
        }
      return tldsArray;
   };


   var domainTest = { content_type: 'Domains', 
                      content: [{'domain': testFunction()}], 
                      value: 'cartTotalPrice',
                      currency: 'USD'
                   };

   console.log(domainTest);

  // var testDomain = function() {
  //   for (var i = 0; i<testFunction().length; i++) {
  //     console.log('domain:'+ testFunction()[i]);
  //   }
  // };

});

 