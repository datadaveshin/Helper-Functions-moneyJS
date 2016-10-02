function $$last(collection, callback) {
    if (typeof collection === 'string') {
        collection = collection.split("")
        callback(collection[collection.length - 1], collection.join(""), collection.length);
    }
    else if (Array.isArray(collection)) {
            callback(collection[collection.length - 1], collection, collection.length);
    }
    else if (typeof collection === 'object') {
            callback(Object.keys(collection)[Object.keys(collection).length - 1], collection, Object.keys(collection).length);
    }
}

console.log("")
 console.log("################################")
 console.log("# On Arrays")
 console.log("################################")

var myArr = ['a', [2], 3, 'd']
$$last(myArr, function(last, array, length) {
    console.log('last', 'array', 'length')
    console.log(last, array, length)
})

console.log("")
 console.log("################################")
 console.log("# On strings")
 console.log("################################")

var myStr = "a23d"
$$last(myStr, function(last, string, length) {
    console.log('last', 'string', 'length')
    console.log(last, string, length)
})

console.log("")
 console.log("################################")
 console.log("# on Objects")
 console.log("################################")


var myObj = {'aaa': 'one', 'b': [2], 'cee': 3, 'd': "four"}
$$last(myObj, function(last, obj, length) {
    console.log('last', 'object', 'length')
    console.log(last, obj, length)
})
