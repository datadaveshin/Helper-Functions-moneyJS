(function(){
    /**
    A version of each
    For strings the order of items returned is:
    currentChar, position, string, firstChar, lastChar, startPosition, endPostion, length

    For arrays the order of items returned is:
    currentItem, index, array, firstElement, lastElement, startIndex, endIndex, length

    For objects the order of items returned is:
    value, key, object, firstValue, lastValue, startKey, endKey, length

    */
    function $$each(collection, callback) {
        if (typeof collection === 'string') {
            collection = collection.split("")
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection.join(""), collection['0'], collection[collection.length-1], 0, collection.length - 1, collection.length);
            }
        }
        else if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection, collection['0'], collection[collection.length-1], 0, collection.length - 1, collection.length);
            }
        }
        else if (typeof collection === 'object') {
            for (let key in collection) {
                callback(collection[key], key, collection, collection[Object.keys(collection)[0]], collection[(Object.keys(collection)[Object.keys(collection).length - 1])], Object.keys(collection)[0], Object.keys(collection)[Object.keys(collection).length - 1], Object.keys(collection).length);
            }
        }
    }
})();
