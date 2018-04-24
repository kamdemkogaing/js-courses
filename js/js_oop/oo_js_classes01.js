$(document).ready(function() {
	// js Patterns

	var Car = function (loc) {
		// var obj = Object.create(Car.prototype);
		// obj.loc = loc;
		// return obj;
		this.loc = loc;
	};

	Car.prototype.move = function() {
		this.loc++;
	};

	// var amy = Car(1);
	// amy.move();
	// console.log(amy);

	var amy = new Car(1);
	amy.move();
	console.log(amy);

	var ben = new Car(9);
	ben.move();
	console.log(ben);

	/*Learn how to utilize the this keyword in yout superclasses, set
	  properties on your classes using .call(), and delegate prototypes to subclasses.*/

	 

});