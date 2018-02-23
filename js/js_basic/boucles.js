$(document).ready(function () {

    /*var i = 0;

    var eleves = ["patrick","Binja", "Luca", "Elyas"];

    console.log("Bonjour " + eleves[0]);
    console.log("Bonjour " + eleves[1]);
    console.log("Bonjour " + eleves[2]);

    for(i; i < eleves.length; i++) {
        console.log("Salut " + eleves[i]);
    }

    while (i < 11) {
        console.log(i);

        if (i == 3) {
            break;
        }

        i++;
    }

    for (var j = 0; j < 11; j++) {
        console.log(j);
    }

    var nombre = 96;
    var estPremier = true;

    for (var i = 2; i < nombre; i++) {
        if(nombre % 2 == 0) {
            estPremier = false;
            console.log("ce nonbre n'est pas prémier.");
            break;
        }
    }

    if (estPremier) {
        console.log(nombre + " est un nombre premier.");
    }*/

    /////////////////////////////////////////////////////

    var eleves = [
        {
            nom: "Luca",
            moyenne: 15
        },
        {
            nom: "Elyas",
            moyenne: 12
        },
        {
            nom: "Raphael",
            moyenne: 8
        },
        {
            nom: "Mathys",
            moyenne: 7
        }
    ];

    for (var i = 0; i < eleves.length; i++) {

        var eleve = eleves[i];

        if (eleve.moyenne < 10) {
            console.log(eleve.nom + " n'as pas eu la moyenne ce trimestre.")

        } else {
            console.log(eleve.nom + " a eu la moyenne ce trimestre.")
        }
    }

});