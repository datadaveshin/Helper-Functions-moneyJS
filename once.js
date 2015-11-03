// pp - A dirty console.log substitute.
var pp = function (x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) {
    var printList = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10];
    var returnString = "";
    function checkString(item){
        if (typeof item === "string") {
            item = '"' + item + '"';
        }
        else {item = item}
        return item;
    }
    for (i = 0; i < printList.length; i++){
        if (printList[i] !== undefined) {
            if (typeof printList[i] === "string" || printList[i] === "number") {
                returnString += printList[i] + " ";
            }
            else if (printList[i] === true){
                returnString += true + " ";;
            }
            else if (printList[i] === false) {
                returnString += false + " ";
            }
            else if (typeof printList[i] === "object") {
                if (Array.isArray(printList[i])) {
                    returnString += '[';
                    for (var j = 0; j < printList[i].length; j++) {
                        returnString += checkString(printList[i][j])
                        if (j !== printList[i].length - 1) {
                            returnString += ', ';
                        }              
                    }
                    returnString += ']' + " ";
                }
                else {
                    returnString += '{';
                    var keyArr = Object.keys(printList[i]);
                    for (var j = 0; j < keyArr.length; j++) {
                        returnString += checkString([keyArr[j]]) + ": " + checkString(printList[i][keyArr[j]])
                        if (j !== keyArr.length - 1) {
                            returnString += ', ' ;
                        }
                    }
                    returnString += '}' + " ";
                }
            }
            else {
                returnString += printList[i] + " ";
            }
        }
    }
    console.log(returnString);
};


// makeGrid - Makes a 2D grid within an array. User chooses what goes in the 
//            inner most part of the grid.
var makeGrid = function(row, col, innerType) {
        grid = [];
        for (i = 0; i < row; i++) {
            grid.push([]);
            for (j = 0; j < col; j++) {
                grid[i].push(innerType);
            }
        }
        return grid;
};


// onceEach - A version of _.each that also operates on characters in a string.
var onceEach = function (anIterable, usersFunction) {
    if (typeof anIterable === "string") {
        for (var i = 0; i < anIterable.length; i++) {
            newChar = usersFunction(anIterable[i], i, anIterable);
        }
        return newChar;
    }
    else if (Array.isArray(anIterable)) {
        for (var i = 0; i < anIterable.length; i++) {
            usersFunction(anIterable[i], i, anIterable);
        }
    }
    else if (typeof anIterable === "object") {
        var keyArr = Object.keys(anIterable);
        for (var i = 0; i < keyArr.length; i++) {
            usersFunction(anIterable[keyArr[i]], keyArr[i], anIterable, i);
        }
    }
    return anIterable
};


// onceMap - A version of _.map that also operates on strings.
var onceMap = function (anIterable, usersFunction) {
    if (typeof anIterable === "string") {
        newString = ""
        for (var i = 0; i < anIterable.length; i++) {
            newChar = usersFunction(anIterable[i], i, anIterable);
            newString += newChar;
        }
        return newString;
    }
    else if (Array.isArray(anIterable)) {
        for (var i = 0; i < anIterable.length; i++) {
            anIterable[i] = usersFunction(anIterable[i], i, anIterable);
        }
    }
    else if (typeof anIterable === "object") {
        var keyArr = Object.keys(anIterable);
        var length = keyArr.length;
        for (var i = 0; i < length; i++) {
            anIterable[keyArr[i]] = usersFunction(anIterable[keyArr[i]], anIterable[keyArr], anIterable, i);
        }
    }
    return anIterable;
};



