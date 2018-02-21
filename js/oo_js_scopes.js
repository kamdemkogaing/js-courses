$(document).ready(function () {

 //Scopes and Closures
 /* Example 1*/

 //what Variables are available from within the body of the newSaga function?
 //Answer: hero is in global scope, so it can be accessed inside newSaga, newSaga itself is also in global scope, foil is in the scope of the function body, so it can be accessed, too.

	var hero = aHero();

	var newSaga = function () {
		var foil = aFoil();

		console.log(foil);
	};


	/* Example 2*/
	//JavaScript allows you to assign to variables you've
  var hero = aHero();

  var newSaga = function () {
  	foil = afoil();
  };

  console.log(foil);

});