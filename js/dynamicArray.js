$(document).ready(function () {


    var tldsArray = ["kamdem.de","kamdem.org","kamdem.africa","kamdem.com","kamdem.cm","kamdem.life","kamdem.vip"];

    var domainNamesObject = {};

    var domainNamesObjectArray = [];



    var tldsArrayItems = function () {
        for (var i = 0; i<tldsArray.length; i++) {
            domainNamesObject.domain = tldsArray[i];
            domainNamesObject.tlds = tldsArray[i];
            domainNamesObjectArray.push(domainNamesObject);
        }
        return domainNamesObjectArray;
    };


    console.log(tldsArrayItems());

});