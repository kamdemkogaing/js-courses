 var clickLocations = [];

	function logClicks(x,y) {
	  clickLocations.push(
	    {
	      x: x,
	      y: y
	    }
	  );
	  console.log('x location: ' + x + '; y location: ' + y);
	  console.log(clickLocations);
	  console.log(clickLocations.length);
 }

 ///////////////////////////////////////////////////////////////

 $(document).click(function(location) {
 	var x = location.pageX;
 	var y = location.pageY;

 	logClicks(x,y);
 });

 $(document).ready(function(){

 	  var internationalizeButton = '<button>Internationalize</button>';

 		var work = {
	  "jobs": [
	    {
	      "employer": "Udacity",
	      "title": "Course Developer",
	      "location": "Mountain View, CA",
	      "dates": "Feb 2014 - Current",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LearnBIG",
	      "title": "Software Engineer",
	      "location": "Seattle, WA",
	      "dates": "May 2013 - Jan 2014",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LEAD Academy Charter High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jul 2012 - May 2013",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "Stratford High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jun 2009 - Jun 2012",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    }
	  ]
	};


	// Your code goes here! Let me help you get started
	function locationizer(work) {
		var locationArray = [];

		for (var i = 0; i<work.jobs.length;i++) {
			var newLocation = work.jobs[i].location;
			locationArray.push(newLocation);
		}

		// for (job in work.jobs) {
		// 	var newLocation = work_obj.jobs[job].location;
		// 	locationArray.push(newLocation);
		// }

		return locationArray;
	}

	// Did locationizer() work? This line will tell you!
	console.log(locationizer(work));


  
  //trim() Remove the whitespace from the beginning and end of a string.
	function inName (name) {

		name = name.trim().split(" ");
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

		return name[0] +" "+name[1];
	}

  console.log(inName(" patrick kamdem ludovic kogaing "));
  
	$('#main').append(internationalizeButton);
  
 });