$(document).ready(function () {

    var luca = {
        non: "kamdem",
        age: 10,
        moyenne: 15
    };

    /* if (luca.age >= 18 && luca.age <= 25) {
        console.log('vous avez droit au tarif jeune')
    } else {
        console.log('vous n\'mavez pas droit au tarif etudiant')
    }*/


    // === prüft nicht nur, ob die Attribute gleich sind, sondern auch, ob sie vom gleichen Typ sind
    // ==  mach halt nur einen Vergleich
    /*if (luca.age === 3) {
      console.log("bravo luca tu es dans le Baumgruppe")
    } else if (luca.age === 1) {
        console.log("ups tu n'a pas encore l'age d'aller á la maternelle")
    } else if (luca.age === 2) {
        console.log("tu es bien proche de la maternelle, mais tu dois attendre un an")
    }*/

    //Die Syntax hat den Nachteil, dass wir mit festen Value arbeiten
     switch (luca.age) {
        case 3:
            console.log("bravo luca tu es dans le Baumgruppe");
            break;
        case 1:
            console.log("ups tu n'a pas encore l'age d'aller á la maternelle");
            break;
        case 2:
            console.log("tu es bien proche de la maternelle, mais tu dois attendre un an");
            break;
        default:
            console.log("aucune des conditions plus haut n'est verifiées");
    } 

    console.log(luca.age >= 18 ? "tu es majeur" : "tu n'est pas encore majeur");

});