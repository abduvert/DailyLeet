var filter = function(arr, fn) {
    var filters = [];

    for(let i=0;i<arr.length;i++)
    {
        if(fn(arr[i],i)){
            filters.push(arr[i]);
        }
    }

    return filters;

};


arr = [10,2,30]
fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr,fn))