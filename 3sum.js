var threeSumClosest = function(nums, target) {
    
    let length = nums.length;
    let closest = Infinity; 
    let min = Infinity;
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
        let j = i + 1;
        let k = length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            let difference = Math.abs(sum - target);

            if (difference < min) {
                min = difference;
                closest = sum;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return closestSum;
};

const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); 
