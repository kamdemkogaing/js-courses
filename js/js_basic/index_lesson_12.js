$(document).ready(function () {

    var sagas = [];

    var hero = "Boy";

    var newSaga = function () {
        var foil = "Rat";
        sagas.push(function () {
            var deed = "Somebody";
            console.log(hero + " " + deed + " " + foil);
        });
    };

    newSaga();
    sagas[0]();
    sagas[0]();
    newSaga();

});