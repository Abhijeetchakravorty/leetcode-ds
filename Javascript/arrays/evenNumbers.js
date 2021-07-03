var findNumbers = function(nums) {
	let self = this;
	self.counter = 0;
	for (let k=0;k<nums.length;k++) {
		if (nums[k].toString().length%2==0) {
			self.counter += 1
		}
	}
	return self.counter;
};

console.log(findNumbers([12,345,2,6,7896]))