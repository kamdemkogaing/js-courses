$(document).ready(function(){

	  //Le premier example d'une fonction CallBack
		var i = 0;

		var timer = window.setInterval(function () {
			i++;
			console.log(i);
			if (i === 10) {
				window.clearInterval(timer);
			}
		}, 1000);

		//Le deuxieme exemple d'une fonction CallBack

});