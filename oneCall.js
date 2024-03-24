var once = function(fn) {
    let count=0;
    return function(...args){
        if(count++<1)  return fn(...args)
        else return undefined;
    }
};

fn = (a,b,c) => (a + b + c)

    
var calls = [[1,2,3],[2,3,6]]
//make two calls with the arguments and it should only run for the first 
//call argument and give the answer
console.log(once(fn)(...calls[0],...calls[1]))