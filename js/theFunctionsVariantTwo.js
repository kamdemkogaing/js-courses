$(document).ready(function() {

	  var classA = [
	    {
	      nom: "Luca",
	      moyenne: 15
	    },
	    {
	      nom: "Elyas",
	      moyenne: 12
	    },
	    {
	      nom: "Binja",
	      moyenne: 8
	    },
	    {
	      nom: "Patrick",
	      moyenne: 7
	    }
	];

	 var classB = [
	    {
	      nom: "yanson",
	      moyenne: 11
	    },
	    {
	      nom: "Mael",
	      moyenne: 17
	    },
	    {
	      nom: "Helenne",
	      moyenne: 9
	    },
	    {
	      nom: "Ludwig",
	      moyenne: 10
	    }
	];

	function afficheQuiALaMoyenne(eleves) {

		  var elevesQuiOntLaMoyenne = [];
		  var elevesQuiNontPasLaMoyenne = [];

	    for (var i = 0; i < eleves.length; i++) {

	      var eleve = eleves[i];

	      if (eleve.moyenne >= 10) {
	        elevesQuiOntLaMoyenne.push(eleve.nom);

	      } else {
	        elevesQuiNontPasLaMoyenne.push(eleve.nom);
	    }
    }

    console.log("Voici les éleves qui ont la moyenne: " + elevesQuiOntLaMoyenne);
	  console.log("Voici les élesves qui n'ont pas la moyenne: "+ elevesQuiNontPasLaMoyenne);
	}

		// afficheQuiALaMoyenne(classA);
		// afficheQuiALaMoyenne(classB);

	 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


	 /*
	   Compter le nombre de fois qu'un mot apparait dans une phrase
		 ON SEPARE notre phrase GRACE AUX ESPACES (Split)
		 ON CREE un compteur
		 POUR CHAQUE mots
		  SI le mot est dans le mot est dans mon compteur
		    Je l'incrémente
		  SINON
		    je lui assgine la valeur
		  AFFICHE compteur
	 */
	  
	  var phrase = "Die Bewertung des Vornamens Patrick ist die subjektive Meinung der Vorname.com Besucher, welche Emotionen und Eindrücke sie persönlich mit dem Vornamen Patrick verbinden."

	  var frequence = function (phrase) {

	      var mots = phrase.toLowerCase().split(" ") // ["die","bewertung","des","vornames",...]

	      var compteur = {}; //Un Objet vide

		  	  for (var i = 0; i < mots.length; i++) {
				  	var mot = mots[i];

				  	if (compteur[mot] === undefined) {
				  		compteur[mot] = 1;

				  	} else {
				  		compteur[mot]++;
				  }
			  }

			 console.log(compteur);
		 }

	  // frequence(phrase);

		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

		 /*
		   Ecrire une fonction qui determine á travers deux éléleves, lequel est meilleur que l'autre
		 */

	   var eleve1 = {
	   	nom: "Jean",
	   	note: [15,16,18]
	   };
	   
	   var eleve2 = {
	   	nom: "Antoine",
	   	note: [7,2,6]
	   };

	   
     //On peut crer une fonction qui nous renvoie la moyenne d'un eleve
	   function moyenneEleve (eleve) {

	    	var sommeDesMoyennes = 0;

	    	var laLongeurDeMaTableDeNote = eleve.note.length;

	    	for(var i = 0; i < laLongeurDeMaTableDeNote; i++) {
	    		 sommeDesMoyennes = sommeDesMoyennes + eleve.note[i];
		    }

		    return  sommeDesMoyennes/laLongeurDeMaTableDeNote;
		  }


      //la fonction doit renvoyer true, si l'eleve1 a une bonne moyenne que l'eleve2, sinon false
	    function estMeilleur(eleveOne, eleveTwo) {

	    	if (moyenneEleve(eleveOne) > moyenneEleve(eleveTwo)) {
         console.log(eleveOne.nom + " est bien meilleur que " + eleveTwo.nom);

	    	} else {
	    		console.log(eleveTwo.nom + " est bien meilleur que " + eleveOne.nom);
	    	}
	    }

	    estMeilleur(eleve1, eleve2);

	  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});