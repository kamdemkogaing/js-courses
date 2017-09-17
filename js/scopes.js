$(document).ready(function () {

    var sagas = []; // [{},{}]

    var hero = "Boy"; // Hero = "Boy"

    // newSaga = {f}
    var newSaga = function () {

        // foil = "Rat"
        var foil = "Rat";

        sagas.push(function () {

            //deed = "Eyes/Digs/Pins"
            var deed = "Eyes";

            console.log("hero:" + " " + hero + ", " + "deed:" + " " + deed + ", " + "foil:" + " " + foil);
        });
    };

    newSaga();
    sagas[0]();
    sagas[0]();
    newSaga();
    sagas[0]();
    sagas[1]();

});