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
	// console.log(amy);

	var ben = new Car(9);
	ben.move();
	// console.log(ben);


	/*Learn how to utilize the this keyword in yout superclasses, set
	  properties on your classes using .call(), and delegate prototypes to subclasses.*/
 
  var Car1 = function(loc1) {
  	var obj = {loc1: loc1};
  	obj.move1 = function() {
  			obj.loc1++;
  		};
  	return obj;
  };

  var amy1 = Car1(1);
  amy1.move1();
  console.log(amy1);

  var ben1 = Car1(9);
  ben1.move1();
  console.log(ben1);

  var cal = Car1(2)
  cal.move1();
  console.log(cal);
});