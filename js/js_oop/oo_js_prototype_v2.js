$(document).ready(function() {

	var Personnage = {
	    // Initialise le personnage
	    init: function (nom, sante, force) {
	        this.nom = nom;
	        this.sante = sante;
	        this.force = force;
	        this.xp = 0;
	    },

	    // Renvoie la description du personnage
	    decrire: function () {
	        var description = this.nom + " a " + this.sante + " points de vie, " +
	            this.force + " en force et " + this.xp + " points d'expérience";
	        return description;
	    }
	};

	var perso1 = Object.create(Personnage);
	perso1.init("Aurora", 150, 25);

	var perso2 = Object.create(Personnage);
	perso2.init("Glacius", 130, 30);

	console.log(perso1.decrire());
	console.log(perso2.decrire());

  ///////////////////////////////////////////////////////////////////////////////////////
	var chaine = "xoxxooxoxxxoooo";
	var x = 0;
	var o = 0;
	for (var i = 0; i < chaine.length; i++) {
	    if (chaine[i] === "x") {
	        x++;
	    } else if (chaine[i] === "o") {
	        o++;
	    }
	}
	if (x !== o) {
	    console.log("Faux");
	} else {
	    console.log("Vrai");
	}
	///////////////////////////////////////////////////////////////////////////////////////

	var a = {
    prop1: "toto"
	};

	var b = Object.create(a);
	b.prop2 = "titi";
	
	var c = Object.create(b);
	c.prop3 = "tutu";
	console.log(c.prop1);

});