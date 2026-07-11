/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    // Base case: return primitive values
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        let result = [];

        for (let item of obj) {
            let compacted = compactObject(item);

            if (Boolean(compacted)) {
                result.push(compacted);
            }
        }

        return result;
    }

    // Handle objects
    let result = {};

    for (let key in obj) {
        let compacted = compactObject(obj[key]);

        if (Boolean(compacted)) {
            result[key] = compacted;
        }
    }

    return result;
};