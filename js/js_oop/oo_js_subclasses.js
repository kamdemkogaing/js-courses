$(document).ready(function() {

	// Intro to Pseudoclassical Subclasses
	var Car = function(loc) {
		this.loc = loc;
		this.move = function() {
			this.loc++;
		};
	};

	var zed = new Car(3);
	zed.move();
	console.log(zed);

	// var amy = new Van(9);
	// amy.move();
	// amy.grab();

});