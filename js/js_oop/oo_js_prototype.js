$(document).ready(function () {
	/*Prototype chains are a mechanism for making obejects that resemble other ojects.
	When you want two objects to have all the same properties.*/
  
  var gold = {
  	a:1
  };

  console.log(gold.a); //1
  console.log(gold.z); //undefined

  //There are helper functions extend() out the that can help you copy all of the properties from one object onto another. Merge object gold into {}
  var blue = $.extend({},gold);
  blue.b=2;
  console.log(blue);

  //The main difference between functions extend() and Object.create()
  var rose = Object.create(gold);
  rose.b=2;
  console.log(rose);
  console.log(rose.a); //1
  console.log(rose.b); //2
  console.log(rose.z); // undefined

  gold.z=3;
  console.log(gold);
  console.log(blue.z); // undefined
  console.log(rose.z); // 3
  rose.toString();

});