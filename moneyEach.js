/**
A version of each
*/
function $$each(collection, callback) {
    let isString = false
    if (typeof collection === 'string') {
        isString = true
        collection = collection.split("")
    }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (isString === true) {
                callback(collection[i], i, collection.join(""), 0, collection.length - 1, collection.length);
            } else {
                callback(collection[i], i, collection, 0, collection.length - 1, collection.length);
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key], key, collection, collection[Object.keys(collection)[0]], collection[(Object.keys(collection)[Object.keys(collection).length - 1])], Object.keys(collection).length);
        }
    }
}

console.log("")
 console.log("################################")
 console.log("# On Arrays")
 console.log("################################")

var myArr = [1,2,3]
$$each(myArr, function(item, index, array, start, end, length) {
    console.log(item, index, array, start, end, length)
})

console.log("")
 console.log("################################")
 console.log("# On strings")
 console.log("################################")

var myStr = "123"
$$each(myStr, function(item, index, array, start, end, length) {
    console.log(item, index, array, start, end, length)
})

console.log("")
 console.log("################################")
 console.log("# on Objects")
 console.log("################################")


var myObj = {'a': 'one', 'b': 'two', 'c': "three"}
$$each(myObj, function(item, index, array, start, end, length) {
    console.log(item, index, array, start, end, length)
})
