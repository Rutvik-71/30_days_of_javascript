var cancellable = function(fn, args, t) {
    // Call immediately
    fn(...args);

    // Schedule repeated calls
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function
    return function cancelFn() {
        clearInterval(intervalId);
    };
};