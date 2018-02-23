$(document).ready(function() {

	//JS Objects
	var bio = {
		"name":"kamdem",
		"role": "web developer",
		"contacts": {
			"mobile": "015123792175",
			"email": "pkamdemkogaing@1und1.de",
			"location": "Oberkirch"
		},
		"welcomeMessage": "HALLO SUGAR",
		"bioPic": "img/kamdem.png"
	};

	bio.twitter = "@kamdem";
	bio.facebook = "@patrick-kamdem";
	bio.contacts.website = "https://www.patelot.de";
	bio["lastName"] = "kogaing";
	bio.contacts["someInfo"] = "I learn JS";


	var work = {
		"jobPosition": "web-developer",
		"employer": "yes",
		"years": 2014
	};

	work.city = "Karlsruhe";


	var education = {
		"schoolName": "HS Karlsruhe",
		"years": 2013
	};
  
  education["schoolCity"] = "Karlsruhe";

  $("#main").append(work["jobPosition"]);
  $("#main").append(education.schoolName);

  //////////////////////////////////////////////////////////////////////////////////

  var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

	var charEscape = function(_html) {
	    var newHTMLReplace = _html;
	    
	    newHTMLReplace = _html.replace(/</g, "");
	    newHTMLReplace = newHTMLReplace.replace(/>/g, "");
      // newHTMLReplace = _html.slice(1,70);

	    return newHTMLReplace;
	};
	
	console.log(charEscape(html));

  //////////////////////////////////////////////////////////////////////////////////
 
  //JSON Notation
  var education1 = {
  	"schools": [
  		{
  			"name": "Eckerd College",
  			"city": "Saint Petersburg, FL, US",
  			"degree": "BA",
  			"major": ["CompSci", "French"]
  		},
  		{
  			"name": "Nova Southeastern University",
  			"city": "Fort Lauderdale, FL, US",
  			"degree": "Masters",
  			"major": ["CompSci"]
  		}
  	],	 
	  "onlineCourses": [
	   {
	   	 "title": "JavaScript Syntax",
	   	 "school": "Udacity",
	   	 "dates": 2014,
	   	 "url": "https://www.google.de"
	   }
	  ]
	};
 
	console.log(education1.schools[0].name +" "+education1.schools[1].name);
	console.log(education1.schools[1].name);
	console.log(education1.onlineCourses[0].title);

});