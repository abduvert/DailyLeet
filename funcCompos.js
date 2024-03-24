var compose = function(functions) {
    return function(x) {
        var value = x;
            for(let i=functions.length-1;i>=0;i--)
            {
                let func = functions[i];
                value = func(value);

            }
            return value;
    }
};


functions = [x => x + 1, x => x * x, x => 2 * x];
x = 4;
console.log(compose(functions)(x))