$(document).ready(function () {

    var fn = function (one, two) {
        console.log(this, one, two);
    };

    var r = {}, g = {}, b = {}, y = {};

    r.method = fn;

    r.method.call(y, g, b);

    console.log(r);
});