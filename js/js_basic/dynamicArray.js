$(document).ready(function () {

    var tldsArray = ["kamdem.de","kogaing.org","guiadem.africa","baumann.com","isolierung.cm","sugardaddy.co.uk"];
    var myarray = [];
    var myJSON = "";

    for (var i = 0; i < tldsArray.length; i++) {

        var content = {
            "domain":tldsArray[i].slice(0, tldsArray[i].indexOf('.')),
            "tld":tldsArray[i].substr(tldsArray[i].indexOf('.')+1)
        };

        myarray.push(content);
    }

    // myJSON = JSON.stringify(myarray);
    console.log(myarray);

});