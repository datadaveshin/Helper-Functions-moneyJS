
function $$each(collection, callback) {
    if (typeof collection === 'string') {
        collection = collection.split("")
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection.join(""), collection[0], collection[collection.length-1], 0, collection.length - 1, collection.length);
        }
    }
    else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection, collection[0], collection[collection.length-1], 0, collection.length - 1, collection.length);
        }
    }
    else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key], key, collection, collection[Object.keys(collection)[0]], collection[(Object.keys(collection)[Object.keys(collection).length - 1])], Object.keys(collection)[0], Object.keys(collection)[Object.keys(collection).length - 1], Object.keys(collection).length);
        }
    }
}

function $$map(collection, callback) {
    let isString = false
    if (typeof collection === 'string') {
        isString = true
        collection = collection.split("")
    }
    var retArr = [];
    $$each(collection, function(item) {
            retArr.push(callback(item));
        }
    })
    return isString ? retArr.join("") : retArr;
}


function $$filter(collection, predicate) {
    let isString = false
    if (typeof collection === 'string') {
        isString = true
        collection = collection.split("")
    }
    var retArr = [];
    $$each(collection, function(item) {
        if (predicate(item)) {
            retArr.push(item);
        }
    })
    return isString ? retArr.join("") : retArr;
}


// // mapString - A version of _.map that operates on strings.
// var mapString = function (anIterable, usersFunction) {
//     if (typeof anIterable === "string") {
//         newString = ""
//         for (var i = 0; i < anIterable.length; i++) {
//             newChar = usersFunction(anIterable[i], i, anIterable);
//             newString += newChar;
//         }
//         return newString;
//     }
//     else {
//         console.log ("String required for input")
//     }
// };
