$(document).ready(function() {

	// global Scope.
	var outsideExample = "First string";

  // Function-Level Scope.
	function example() {
	  var outsideExample = "Second string";
	}

	example();
	console.log(outsideExample);

	///////////////////////////////////////////////////////////////

  // global Scope.
	var outsideExample = "First string";

  // Function-Level Scope.
	function example() {
	  outsideExample = "Second string";
	}

	example();
	console.log(outsideExample);

	////////////////////////////////////////////////////////////////

	//Block Level Scope
	var outsideExample = "First string";

  /* if statements do not create their own scope.the if statement does not create a new variable. It simply overwrites the value of outsideExample to "Second string".*/
	if (true) {
	    var outsideExample = "Second string";
	    console.log(outsideExample);
	}

	console.log(outsideExample);

	////////////////////////////////////////////////////////////////
  /* Function Declaration Syntax */
  example1();
  function example1() {
  	console.log("Ran the example");
  }

  example2();
	var example2 = function() {
	  console.log("Ran the example");
	}

});