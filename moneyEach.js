/**
A version of each
*/
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

console.log("")
 console.log("################################")
 console.log("# On Arrays")
 console.log("################################")

var myArr = ['a', 'b', 3, 'd']
$$each(myArr, function(item, index, array, first, last, start, end, length) {
    console.log('item', 'index', 'array', 'first', 'last', 'start', 'end', 'length')
    console.log(item, index, array, first, last, start, end, length)
})

console.log("")
 console.log("################################")
 console.log("# On strings")
 console.log("################################")

var myStr = "ab3d"
$$each(myStr, function(item, index, array, first, last, start, end, length) {
    console.log('item', 'index', 'array', 'first', 'last', 'start', 'end', 'length')
    console.log(item, index, array, first, last, start, end, length)
})

console.log("")
 console.log("################################")
 console.log("# on Objects")
 console.log("################################")


var myObj = {'aaa': 'one', 'b': 'two', 'cee': 3, 'd': "four"}
$$each(myObj, function(item, index, array, first, last, start, end, length) {
    console.log('item', 'index', 'array', 'first', 'last', 'start', 'end', 'length')
    console.log(item, index, array, first, last, start, end, length)
})
