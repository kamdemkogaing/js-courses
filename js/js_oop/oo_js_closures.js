$(document).ready(function() {

  /* the 'this' keyword */
  /* Example 1 */

	var r= {}, g={g:1}, b={b:2};

	var fn = function (one, two) {
		console.log(one, two);
	};

	fn(g, b); // {g:1}, b={b:2}

  /////////////////////////////////////////////////////////////////////////
  // Example 2
	var fn = function (one, two) {
		console.log(this, one, two);
	};

  var r= {}, g={g:"green"}, b={b:"blue"}, y={y:"yellow"};
  r.method = fn;
  
  r.method(g,b); // {method:fn()}, {g:"green"}, {b:"blue"}
	fn(g, b); // fn is in the global scope, {g:"green"}, {b:"blue"}

	r.method.call(y,g,b); // {y:"yellow"}, {g:"green"}, {b:"blue"}

	///////////////////////////////////////////////////////////////////////////
	//Example 3
	var fn = function (one, two) {
		console.log(this, one, two);
	};

	var r= {}, g={g:"green"}, b={b:"blue"}, y={y:"yellow"};
	r.method = fn;

	setTimeout(fn, 3000); // global, undefined, undefined
  
});