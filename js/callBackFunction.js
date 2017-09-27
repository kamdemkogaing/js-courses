$(document).ready(function(){

	  //Le premier example d'une fonction CallBack
		var i = 0;

		var timer = setInterval(function () {
			i++;
			console.log(i);
			if (i === 10) {
				clearInterval(timer);
			}
		}, 1000);
		
});