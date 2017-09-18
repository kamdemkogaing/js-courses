$(document).ready(function () {

    var fn = function (one, two) {
      console.log(this, one, two);
    };

    var r = {red: "red"}, g = {green: "green"}, b = {blue: "blue"}, y = {yellow: "yellow"};
    r.method = fn; // r = {red: "red",function (one, two) { console.log(this, one, two)};

    r.method(g,b); // r,g,b

    fn(g,b);  // global Object,g,b

    //La méthode call() réalise un appel à une fonction avec une valeur this et les arguments fournis individuellement.
    fn.call(r,g,b); //r,g,b

    r.method.call(y,g,b); //y,g,b
    
    //Exécute un morceau de code ou une fonction après un délai determiné.
    // setTimeout(fn, 1000); //global Object, undefined, undefined

    setTimeout(r.method, 1000); //global Object, undefined, undefined

});