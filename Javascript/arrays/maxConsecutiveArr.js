var findMaxConsecutiveOnes = function(nums) {
	let self = this
	self.counter = 0
	for (let k=0;k<nums.length;k++) {
		if (nums[k]==0) {
			self.counter = 0;
		} else {
			self.counter += 1;
			self.maxCounter = self.counter;
		}
	}
	return self.maxCounter;
}
console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,1,1]))