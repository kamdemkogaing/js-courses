$(document).ready(function () {

 /* Scopes */
 /* Example 1*/

  //what Variables are available from within the body of the newSaga function?
  //Answer: hero is in global scope, so it can be accessed inside newSaga, newSaga itself is also in global scope, foil is in the scope of the function body, so it can be accessed, too.

	var hero = aHero();

	var newSaga = function () {
		var foil = aFoil();

		console.log(foil);
	};

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/* Example 2*/
	//JavaScript allows you to assign to variables you've never even declared before. (Bad pratice)
  var hero = aHero();

  var newSaga = function () {
  	foil = afoil();
  };

  console.log(foil);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Example 3*/
  // looping constructs don't create new scopes
  var hero = aHero();

  if (checkSomething()) {
  	var foil = aFoil();
  }

  console.log(foil);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Example 4*/
  // Calling the functions
  var hero = "Gal";

  var newSaga = function () {
  	var foil = "Cow";
  	var saga = function () {
  		var deed = "Eyes";
  		console.log(hero+deed+foil);
  	};
  	saga();
  };
  newSaga();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
});