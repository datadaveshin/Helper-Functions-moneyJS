/**
$$p - A dirty console.log substitute
TODO: Use `arguments`, use HOFs
*/
function $$p(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) {
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
