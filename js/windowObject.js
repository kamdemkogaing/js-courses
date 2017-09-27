$(document).ready(function() {

	/*
	ON choisit un chiffre RANDOM (entre 0 et 10)
	DEMANDE á l'utilisateur de rentrer un chiffre
	TANT QUE le chiffre n'est pas bon
			SI le chiffre est au dessus
			  ALERT au dessus
			SINON
			  ALERT en dessous
			DEMANDE á l'utilisateur de rentrer un chiffre
		FIN TANT QUE
		ALERT success
	*/

	  //La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ 
	  //(ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu).
	  //Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
		var aDeviner = Math.round(Math.random() * 10);

		var essais = 3;

	  //ON DEMANDE á l'utilisateur de rentrer un chiffre
	  var essai = window.prompt("Entrez votre chiffre");

     //Je conversti le nombre entré par l'utilisateur en String et je le ajoute la base 10
	  essai = window.parseInt(essai, 10);
	 
	  //TANT QUE le chiffre n'est pas bon, c'est á dire entre [0 10[
	  while (essai != aDeviner && essais > 0) {
      
       essais--;

	  	if (essai > aDeviner) {
	  		alert("Au dessus !");

	  	} else {
	  		alert("En dessous !");
	  	}
	    
	    //ON demande á l'utilisateur de rentrer un nouveau chiffre
	    essai = window.prompt("Rentrez un nouveau chiffre svp !");
	  }
      
      if (essai == aDeviner) {
	  	alert("great success !");
	  		
      } else {
      	alert(":(");
      }

});