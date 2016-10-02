function $$first(collection, callback) {
    if (typeof collection === 'string') {
        collection = collection.split("")
        callback(collection[0], collection.join(""), collection.length);
    }
    else if (Array.isArray(collection)) {
            callback(collection[0], collection, collection.length);
    }
    else if (typeof collection === 'object') {
            callback(collection[Object.keys(collection)[0]], collection, Object.keys(collection).length);
    }
}

console.log("")
 console.log("################################")
 console.log("# On Arrays")
 console.log("################################")

var myArr = ['a', [2], 3, 'd']
$$first(myArr, function(first, array, length) {
    console.log('first', 'array', 'length')
    console.log(first, array, length)
})

console.log("")
 console.log("################################")
 console.log("# On strings")
 console.log("################################")

var myStr = "a23d"
$$first(myStr, function(first, string, length) {
    console.log('first', 'string', 'length')
    console.log(first, string, length)
})

console.log("")
 console.log("################################")
 console.log("# on Objects")
 console.log("################################")


var myObj = {'aaa': 'one', 'b': [2], 'cee': 3, 'd': "four"}
$$first(myObj, function(first, obj, length) {
    console.log('first', 'object', 'length')
    console.log(first, obj, length)
})
