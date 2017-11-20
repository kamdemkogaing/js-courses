$(document).ready(function () {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tldsArray = ["kamdem.de","kamdem.org","kamdem.africa","kamdem.com","kamdem.cm"];
    var myarray = [];
    var myJSON = "";

    for (var i = 0; i < tldsArray.length; i++) {

        var content = {
            "domain":tldsArray[i],
            "tld":tldsArray[i].substr(tldsArray[i].lastIndexOf('.')+1)
        };

        myarray.push(content);
    }

    // myJSON = JSON.stringify(myarray);

    console.log(myarray);

});