// mapString - A version of _.map that operates on strings.
var mapString = function (anIterable, usersFunction) {
    if (typeof anIterable === "string") {
        newString = ""
        for (var i = 0; i < anIterable.length; i++) {
            newChar = usersFunction(anIterable[i], i, anIterable);
            newString += newChar;
        }
        return newString;
    }
    else {
        console.log ("String required for input")
    }
};
