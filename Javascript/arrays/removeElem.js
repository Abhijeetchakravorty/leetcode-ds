let removeElement = function(nums, val) {
        let i = 0;
        for (let j=0;j<nums.length;j++) {
                if (nums[j]!=val) {
                        nums[i] = nums[j];
                        i++;
                }
        }
        return {
                counter: i,
                nums: nums
        };
}

let nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(removeElement(nums, val));

nums = [3,2,2,3];
val = 2;
console.log(removeElement(nums, val));