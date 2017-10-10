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

	 var elements = document.querySelectorAll('.spoiler');

	 var createSpoilerButton = function (element) {
	 	 var button = document.createElement('button');
	 	 button.textContent = 'Afficher le spoiler';
	 	 element.appendChild(button);
	 };

	 for (var i = 0; i < elements.length; i++) {
	 	createSpoilerButton(elements[i]);
	 }



});