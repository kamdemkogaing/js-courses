$(document).ready(function () {

	var HTMLprojectStart = '<div class="project-entry"></div>';
	var HTMLprojectDates = '<div class="date-text">%data%</div>';
	var HTMLprojectDescription = '<p><br>%data%</p>';
	var HTMLprojectImage = '<img src="%data%">';

  //projects Object declared
	var projects = {
    "projects" : [
	    {
	    	"title": "Course Developer",
	    	"dates": "Feb 2014 - Current",
	    	"description": "MAN IN BLACK",
	    	"images" : ["img/kamdem.png","img/logo_kamdem.png","img/luca_elyas.jpg"],
	    	"display": function firtProject() { return 'My first project function';}
	    },
	    {
	    	"title": "Software Engineer",
	    	"dates": "May 2013 - Jan 2014",
	    	"description": "MAN IN BLACK",
	    	"images" : ["img/kamdem.png","img/logo_kamdem.png","img/luca_elyas.jpg"],
	    	"display": function secondProject() { return 'My second project function';}
	    },
	    {
	    	"title": "Science Teacher",
	    	"dates": "Jul 2012 - May 2013",
	    	"description": "MAN IN BLACK",
	    	"images" : ["img/kamdem.png","img/logo_kamdem.png","img/luca_elyas.jpg"],
	    	"display": function thirdProject() { return 'My third project function';}
	    }
    ]
	};

	// for (index in projects.projects) {
	// 	console.log(index);
	//   console.log(projects.projects[index].display);
	// }

	console.log(projects.projects[0].display);
	console.log(projects.projects[1].display);
	console.log(projects.projects[2].display);

	var patrickFamilie = {
	  "name": "Patrick",
	  "alter": 32,
	  "verheiratet": true,
	  "beruf": "Web Developer",
	  "kinder": [
	    {
	      "name": "Luca",
	      "alter": 3,
	      "schulabschluss": null
	    },
	    {
	      "name": "Elyas",
	      "alter": 1,
	      "schulabschluss": null
	    }
	  ]
	};


	//Encapsulating Functions.
	projects.display = function () {
		for (project in projects.projects) {
			$('#projects').append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedTitle);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
    			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    			$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}

});