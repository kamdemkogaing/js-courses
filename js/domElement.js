$(document).ready(function () {
		// body... 

	  var p = document.querySelector('.paragraph');

	  window.setInterval(function() {
	  	p.classList.toggle('blue');
	  }, 1000);
	  
});