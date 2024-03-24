var reduce = function(nums, fn, init) {
    var value = 0;

    for(let i=0;i<nums.length;i++)
    {
        value = fn(init,nums[i]);
        init = value;
    }
    return init
};


arr = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
console.log(reduce(arr,fn,0))