var map = function(arr, fn) {
    var array = [];

    for(let i=0;i<arr.length;i++)
    {
        array.push(fn(arr[i],i))
    }
    return array;
};


arr = [1,2,3]
fn = function plusone(n){return n+1;}
let ma = map(arr,fn)
console.log(ma)