
$(document).ready(function () {

	 (function () {
	   /*
	 		WENN ich auf einen Tab klicke
	 		  (1) active Class von aktiver Tab entfernen
	 		  (2) Ich füge die active Class zum aktuellen Tab hinzu

	 		  (3) acitve Class bei aktivem Inhalt entfernen
	 		  (4) Ich füge die active Class zum entsprechenden Inhalt hinzu
	 	*/
	 	var afficherTabs = function (a, animations) {
	 		  if (animations === undefined) {
	 		  	animations = true;
	 		  }

	 		  var li = a.parentNode;
	      var div = a.parentNode.parentNode.parentNode;
	      // (5) Wir fügen die Class fade auf dem aktiven Element hinzu
	      var activeTab = div.querySelector('.tab-content.active');
	      //(8) wir fügen dem anzuzeigenden Element die class fade und active hinzu
	      var aAfficher = div.querySelector(a.getAttribute('href'))

	      // ich muss erstmal prüfen, ob ein LI die Class active hat, wenn ja passiert NICHTS
	 			if (li.classList.contains('active')) {
	 				return false;
	 			}

	      // (1) active Class von aktiver Tab entfernen
	      div.querySelector('.tabs .active').classList.remove('active');

	      // (2) Ich füge die active Class zum aktuellen Tab hinzu
	      li.classList.add('active');

	      //(3) acitve Class bei aktivem Inhalt entfernen
	      // div.querySelector('.tab-content.active').classList.remove('active');

	      //(4) Ich füge die active Class zum entsprechenden Inhalt hinzu
	      // div.querySelector(a.getAttribute('href')).classList.add('active');

	      /* 
		      (5) Wir fügen die Class fade auf dem aktiven Element hinzu
		          (6) Am Ende der Animation
			          (7) wir entfernen die class fade und active
			          (8) wir fügen dem anzuzeigenden Element die class fade und active hinzu
			          (9) wir fügen die class in
	      */

	      if (animations) {
		      activeTab.classList.add('fade');
		      activeTab.classList.remove('in');

		      var transitionend = function() {
		      	//(7) wir entfernen die class fade und active
		      	this.classList.remove('fade');
		      	this.classList.remove('active');

	          aAfficher.classList.add('active');
	          aAfficher.classList.add('fade');
	          aAfficher.offsetWidth;
	          aAfficher.classList.add('in');
	          activeTab.removeEventListener('transitionend', transitionend);
		      };

	        //(6) Am Ende der Animation
		      activeTab.addEventListener('transitionend', transitionend);
	      }
	      else {
	      	aAfficher.classList.add('active');
	      	activeTab.classList.remove('active');
	      }
	 	};
	  
	  // ich selektiere alle tabs in einen tabs Array
	 	var tabs = document.querySelectorAll('.tabs a');

	 	for (var i = 0; i < tabs.length; i++) {
	 		tabs[i].addEventListener('click', function(e) {
	       afficherTabs(this);
	 		});
	 	}

	   /*
	    (5) Ich hole den Hash vo der URLS
	    (6) ADD CLASS active auf dem Link href = "Hash"
	    (7) ACTIVE CLASS auf anderen Tabs entfernen
	    (8) ANZEIGEN / INHALT ausblenden
	   */

     var hashChange = function () {
		   // (5) Ich hole den Hash vo der URLS
		   var hash = window.location.hash;
		   // ich selektiere der Link mit entsprenchem hash
		   var a = document.querySelector('a[href="' + hash +'"]');

		   if ( a !== null && !a.classList.contains('active')) {
		   		afficherTabs(a, false);
		   }
     };

	   window.addEventListener('hashchange', hashChange);
	   hashChange();
   })();
});




