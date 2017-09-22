$(document).ready(function() {

	// var carlike = function (obj, loc) {
	// 	obj.loc = loc;
	// 	obj.move = function () {
	// 		obj.loc++;
	// 		console.log(obj.loc++);
	// 	};
	// 	return obj;
	// };

	// var amy = carlike({}, 1);
	// console.log(amy);
 //  amy.move();

 //  var ben = carlike({}, 9);
 //  console.log(ben);
 //  ben.move();

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var car = function () {
  	var obj = {loc: 9};
  	$.extend (obj, methods);
  	return obj;
  };

  var methods = {
  	move: function () {
  		this.loc++;
  	}
  };

  console.log(car());

  var amy = car ();
  console.log(amy);
  amy.move();

  var ben = car ();
  console.log(ben);
  ben.move ();

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //  var object1 = {
	//   apple: 0,
	//   banana: { weight: 52, price: 100 },
	//   cherry: 97
	// };

	// var object2 = {
	//   banana: { price: 200 },
	//   durian: 100
	// };
	 
	// // Merge object2 into object1
	// var obj2mergeIntoob1 = $.extend (object1, object2);
	// console.log(obj2mergeIntoob1);
 
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});