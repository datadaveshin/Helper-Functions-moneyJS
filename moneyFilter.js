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
