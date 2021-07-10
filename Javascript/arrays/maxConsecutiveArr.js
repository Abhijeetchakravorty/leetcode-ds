/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    maxHere = 0, max = 0;
    for (let n=0;n<nums.length;n++) {
        if (n == 0){
            maxHere = n;
        } else {
            maxHere = maxHere+1;
        }
        max = Math.max(max, maxHere + 1);   
    }
    return max; 
};

console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1]))