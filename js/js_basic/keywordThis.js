$(document).ready(function () {

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /*var fn = function (one, two) {
      console.log(this, one, two);
    };

    var r = {red: "red"}, g = {green: "green"}, b = {blue: "blue"}, y = {yellow: "yellow"};

    r.method = fn; // r = {red: "red",method: function (one, two) { console.log(this, one, two)};

    r.method(g,b); // r,g,b

    fn(g,b);  // this represente l'object global, global Object,g,b

    //La méthode call() réalise un appel à une fonction avec une valeur this et les arguments fournis individuellement.
    fn.call(r,g,b); //r,g,b

    r.method.call(y,g,b); //y,g,b

    var test =  r.method.call(y,g,b);
    
    //Exécute un morceau de code ou une fonction après un délai determiné.
    //setTimeout(fn, 1000); //global Object, undefined, undefined

    setTimeout(test, 1000); //global Object, undefined, undefined*/

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /*var ob1 = {};
    var ob2 = {};

    ob1.example = function (arg1) {
        console.log(this, arg1);
    };

    ob1.example(ob2);*/

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    var makeAnObject = function () {
        return {example: 'property'};
    };

    var ob1 = makeAnObject();
    console.log(ob1);

    var ob2 = makeAnObject();
    console.log(ob2);

    console.log(ob1 === ob2); //false

    /*
      Die Ursache, wieso diese Vergleiche fehlschlagen, liegt daran das Javascript verschiedene Typen unterschiedlich miteinander vergleicht. 
      Bei primitiven Typen wie Strings und Nummern werden die Inhalte miteinander verglichen – Andere Typen wie Arrays, einfache- und Date-Objekte werden anhand ihrer Referenz verglichen.
      Da die beiden Objekte unterschiedliche Referenzen beherbergen schlägt der Vergleich fehlt!   
    */

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /*var jangoFett = {
       occupation: "Bounty Hunter",
       genetics: "superb"
    };

    var bobaFett = {
       occupation: "Bounty Hunter",
       genetics: "superb"
    };

    var callMeJango = jangoFett;

    console.log(bobaFett === jangoFett);
    // Returns false

    console.log(callMeJango === jangoFett);
    // Returns true
*/
    /*
      Hier verwenden callMeJango und jangoFett auf die gleiche Referenz – daher sind die Objekte (für Javascript) identisch.
    */

});