$(document).ready(function () {
	(function () {
	 var d = document,
	      g = d.createElement('script'),
	      s = d.getElementsByTagName('script')[0];
	      g.type = 'text/javascript';
	      g.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
	      s.parentNode.insertBefore(g, s);

	      console.log(d);

	      var axel = Math.random() + "";
        var a = axel * 10000000000000;
        d.write('the value from a is:'+a);
	})();	
});