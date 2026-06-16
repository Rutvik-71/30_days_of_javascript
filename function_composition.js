var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((result, fn) => fn(result), x);
    };
};