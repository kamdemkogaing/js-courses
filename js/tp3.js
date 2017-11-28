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

	 		 var aAfficher = $('div ul a').attr("href");
	 		 var activeTab = $('div .tab-content.active');

	 		 	// ich muss erstmal prüfen, ob ein LI die Class active hat, wenn ja passiert NICHTS
	 			if ($('li').hasClass('active')) {
	 				return false;
	 			}

	 			// (1) active Class von aktiver Tab entfernen
	      $('div .tabs .active').removeClass('active');

	      // (2) Ich füge die active Class zum aktuellen Tab hinzu
	      $('li').addClass('active');

	      /* 
		      (5) Wir fügen die Class fade auf dem aktiven Element hinzu
		          (6) Am Ende der Animation
			          (7) wir entfernen die class fade und active
			          (8) wir fügen dem anzuzeigenden Element die class fade und active hinzu
			          (9) wir fügen die class in
	      */
	      if (animations) {
	      	activeTab.addClass('fade').removeClass('in');

	      	var transitionend = function () {
	      		//(7) wir entfernen die class fade und active
	      		$(this).removeClass('active fade');

	      		aAfficher.addClass('active fade in');
	      		aAfficher.offsetWidth;
	      		activeTab.off('click', transitionend);
	      	};

	      	//(6) Am Ende der Animation
	      	activeTab.on('click', transitionend);
	      }
	      else {
	      	aAfficher.addClass('active');
	      	activeTab.removeClass('active');
	      }
	 	};

	 	// ich selektiere alle tabs in einen tabs Array
	 	$('.tabs a').each(function(){
	 		$(this).on('click', function(e) {
	 			afficherTabs(this);
	 		})
	 	});

	 	/*
	    (5) Ich hole den Hash vo der URLS
	    (6) ADD CLASS active auf dem Link href = "Hash"
	    (7) ACTIVE CLASS auf anderen Tabs entfernen
	    (8) ANZEIGEN / INHALT ausblenden
	   */
	   var hashChange = function () {
	   	// (5) Ich hole den Hash vo der URLS
	   	var hash = window.location.hash;

	   	var a = $('a[href="' + hash +'"]');

		   	if (a !== null && !a.hasClass('active')) {
		   		afficherTabs(a, false);
		   	}
	   };

	   $(window).on('hashchange', hashChange);

	   hashChange();

	})();
}); 