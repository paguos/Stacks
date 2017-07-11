// ### UTILITIES ###
var tools = (function () {

    var copyArray = function (arry) {
        var newArry = [];
        for (var i = 0; i < arry.length; i++) {
            newArry.push(arry[i]);
        }
        return newArry;
    };

    var removeChildNodes = function (myNode) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    };

    var setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    var getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var getPercent = function(numb, total) {
        return Math.round(numb / (toal * 100))/100;
    }

    return {
        copyArray : copyArray,
        removeChildNodes : removeChildNodes,
        setCookie : setCookie,
        getCookie : getCookie,
        getPercent : getPercent
    }
})();