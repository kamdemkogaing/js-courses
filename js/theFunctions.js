$(document).ready(function () {
    var gold = {a:1};
    console.log(gold.a); //1
    console.log(gold.z); //undefined

    //merge object gold into {}
    //blue = {a:1};
    var blue = extend({}, gold);

    blue.b = 2; // blue = {a:1,b:2}

    console.log(blue.a); //1
    console.log(blue.b); //2
    console.log(blue.z); //undefined

    //new prototype rose from Object gold created
    var rose = Object.create(gold);
    rose.b = 2;

    console.log(rose.a); //1
    console.log(rose.b); //2
    console.log(rose.z); //undefined

    gold.z = 2;
    console.log(console.z); //
 
});