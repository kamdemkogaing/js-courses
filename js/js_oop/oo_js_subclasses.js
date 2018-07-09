$(document).ready(function() {

	// Intro to Pseudoclassical Subclasses
	// Building Out a Subclass
	(function () {
		var Car = function(loc) {
			this.loc = loc;
		};
		Car.prototype.move = function() {
			this.loc++;
		};

		var Van = function(loc) {
			this.loc =loc;
		};

		Van.prototype.move=function() {
			this.loc++;
		};

		var zed = new Car(3);
		zed.move();

		var amy = new Van(9);
		amy.move();
	})();
  
  //Quiz: this' in Superclass using 'new'
	(function(){
		var Car = function(loc) {
			this.loc = loc;
		};
		Car.prototype.move = function() {
			this.loc++;
		};

		var Van = function(loc) {
			new Car(loc);
		};
	})();

	//Using call() function
	(function() {
		var Car = function(loc) {
			this.loc = loc;
		};
		Car.prototype.move = function() {
			this.loc++;
		};

		var Van = function(loc){
			Car.call(this, loc);
		};

		var zed = new Car(3);
		zed.move();

		var amy = new Van(9);
		amy.move();
		amy.grab();
	})();

});