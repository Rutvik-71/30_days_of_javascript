var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = function() {
        clearTimeout(timerId);
    };

    return cancelFn;
};