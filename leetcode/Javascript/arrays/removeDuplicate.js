let removeElement = function(value, index, self) {
    return self.indexOf(value) === index;
}

let nums = [1,1,2];
var unique = nums.filter(removeElement);
console.log(unique);

nums = [0,0,1,1,1,2,2,3,3,4]
unique = nums.filter(removeElement);
console.log(unique);