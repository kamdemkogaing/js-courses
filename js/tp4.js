$(document).ready(function() {
	(function () {

    // hier hole mir die Position von Y
    // https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY
		var scrollY = function () {
			var supportPageOffset = window.pageXOffset !== undefined;
			var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
			// var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
			return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
		};

		var elements = document.querySelectorAll('[data-sticky]');

		for (var i = 0; i<elements.length; i++) {
			(function (element) {
		    var rect = element.getBoundingClientRect();
		    if (element.getAttribute('data-offset')) {
		    	var offset = parseInt(element.getAttribute('data-offset'),10);
		    } else {
		    	var offset = parseInt("0",10);
		    }
		
		    // von sich der Y Element grade befindet
		    var top = element.getBoundingClientRect().top + scrollY();
		    var width = rect.width;

		    // Erstelle ein fake Element
		    var fake = document.createElement('div');
		    fake.style.width = rect.width + "px";
		    fake.style.height = rect.height + "px";

		    // Die Scroll Funktion an sich
		    var onScroll = function () {
		    	// ich prüfe, ob das Menu Element die class fixed hat
		    	var hasScrollClass = element.classList.contains('fixed');

		    	if (scrollY() > top - offset && !hasScrollClass) {
		    		element.classList.add('fixed');
		    		element.style.top = offset + "px";
		    		element.style.width = rect.width + "px";
		    		element.parentNode.insertBefore(fake, element);
		    	} 

		    	else if (scrollY() < top - offset && hasScrollClass) {
		    		element.classList.remove('fixed');
		    		element.parentNode.removeChild(fake);
		    	}
		    };

		    // wenn jemand käme auf die Idee das Fenster klein zu machen
		    var onResize = function () {
		    	element.style.width = "auto";
		    	element.classList.remove('fixed');
		    	fake.style.display = 'none'
		    	rect = element.getBoundingClientRect();
		    	top = rect.top + scrollY();
		    	fake.style.width = rect.width + "px";
		      fake.style.height = rect.height + "px";
		      fake.sytle.display = "block";
		      onScroll();
		    };

		    // die Handler
				window.addEventListener('scroll', onScroll);
				window.addEventListener('resize', onresize);
			})(elements[i]);
		}
	})();
});