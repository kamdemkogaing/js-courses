$(document).ready(function () {
	/**
		LORSQUE JE clique sur le boutton dans .spolier
		ALORS
		   j'ajoute la classe .visible á l'element suivant
	**/

	// var button = document.querySelector('.spoiler button');

	// button.addEventListener('click', function () {
	// 	this.nextElementSibling.classList.add('visible');
	// 	this.parentNode.removeChild(this);
	// });

	//+++++++++++++++++++++++++++++++++++++++++++++++++++

  //  //Select all element with Class .spoiler in to an array
	 // var elements = document.querySelectorAll('.spoiler');

  //  //element = some className like  ".spoiler"
	 // var createSpoilerButton = function (element) {

  //    //Button Element created
	 // 	 var button = document.createElement('button');
	 // 	 button.innerHTML = 'Afficher le spoiler';

  //    //Span Element created
	 // 	 var span = document.createElement('span');
	 // 	 span.className = 'spoiler-content';
	 // 	 span.innerHTML = element.innerHTML;

  //     //Elements added to DOM
  //     element.innerHTML = '';
	 // 	  element.appendChild(button);
	 // 	  element.appendChild(span);

	 // 	  //Click Event added to Button Element
	 // 	  button.addEventListener('click', function () {
	 // 	  	button.parentNode.removeChild(button);
	 // 	  	span.classList.add('visible');
	 // 	  });
	 // };

	 // for (var i = 0; i < elements.length; i++) {
	 // 	  createSpoilerButton(elements[i]);
	 // }

 //+++++++++++++++++++++++++++++++++++++++++++++++++++

	  
	  var body = document.querySelector('body.top-content');

	  var ias = function () {
	    var a = document.createElement('script');
	    a.type = "text/javascript";
	    a.async = true;
	    a.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";

	    console.log(a);

	    var b = document.getElementsByTagName("script")[0];

	    console.log(b);

	    b.parentNode.insertBefore(a, b);

	    console.log(b.parentNode);
	  };

	  body.append(ias());

});