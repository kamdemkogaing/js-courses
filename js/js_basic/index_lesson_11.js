$(document).ready(function() {
	// body...

	// myFunction();
	// document.getElementById("workExperience").innerHTML = "The type of carName is " + typeof carName + " / " + carName;

	// var carName = "Volvo";

	// function myFunction() {

	//   carName = "Tucson 2015";

	// }

	//Automatically Global
	/* If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
   This code example will declare a global variable carName, even if the value is assigned inside a function.*/

   // myFunction();

	// code here can use carName as a global variable
	// document.getElementById("workExperience").innerHTML = "I can display " + carName;

	// function myFunction() {
	//     carName = "Tucson 2015";
	// }

	// JS Scope

	//Global variable
	var hero = "Batmann";

  //newSage is a global variable
	var newSaga = function() {
		// foil is a local variable
		var foil = "Drama";

		//saga is a local variable
		var saga = function() {

			//deed is a local variable
			var deed = "Somebody";
			console.log("this one:"+" "+hero+" "+deed+" "+foil);
		};

		saga(); // Batmann Somebody Drama
	};

	newSaga(); 
	newSaga(); 

});