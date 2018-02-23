$(document).ready(function(){

	
  //Quiz if statements
	var bio = {
		"name": "kamdem",
		"name": "kogaing",
		"name": "guiadem",
		"firstName": "patrick",
		"role": "web-developer",
		"location": "Karlsruhe",
		"age": 32,
		"skills": ["cameroon","germany","france","austria"]
	};

	console.log(bio.name);

	if(bio.skills.length > 0){
		$('#header').append(bio.skills[0]+" "+bio.skills[4]);
		console.log(bio.skills !== []);
	}else{
		$('#header').append('<h2>--somethings bad--</h2>');
		console.log(bio.skills == []);
	}

	//////////////////////////////////////////////////////////////

  //JSON Obeject
	var jsonValue = {
	   "array": ["rot","grün","blau"],
	   "boolean": true,
	   "null": null,
	   "number": 123,
	   "object" : {
	      "Flickr"   : "https://www.flickr.com",
	      "Twitter"  : "https://twitter.com",
	      "Pinterest": "https://de.pinterest.com"
	   },
	   "string": "Hello World"
	};


  // A simple JS Object
	var einObjekt = {
    einBool: true,
    einBool: false,
    einString: "Hallo!",
    eineZahl: 42,
    einArray: [0, 1, "zwei", {Zahl: 4}]
  };

  // console.log(einObjekt.einBool);

  ///////////////////////////////////////////////////////////////
  var cameron = {};
  cameron.job = "course dev";

  var makeCourse = function () {
  	//make a course
  	console.log("Made a course");
  }

  var courses = 0;

  while(cameron.job === "course dev") {
  	makeCourse();
  	courses = courses + 1;
  	if(courses === 10) {
  		cameron.job = "learning specialist";
  	}
  }

  console.log(cameron.job);

  /////////////////////////////////////////////////////////////
  for (var i = 0; i<9; i++) {
  	console.log(i);
  }

  var countries = ["germany","argentina","brazil","netherlands"];

  for(item in countries) {
    var i = item;
  	console.log(i);
  	console.log(countries[item]);
  }

  ///////////////////////////////////////////////////////////////
  // Quiz For in Loops
  var work = {
  	"job1": "Aushilfe",
  	"job2": "Festerputzer",
  	"job3": "Glasreiniger",
  	"job4": "Werkstudent",
  	"job5": "web-developer"
  }

  var HTMLworkStart = '<div class="work-entry">HELLO WORLD</div>';

  for(item in work){
    console.log(work[item]);
    $('#header').append(HTMLworkStart);
 }

});