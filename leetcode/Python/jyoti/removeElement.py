class Solution:
    def __init__(self):
        self.nums = [3,2,2,3]
        self.val = 3
    def removeElement(self,index):
        for index in range(len(self.nums)):
            if self.val == self.nums[index]:
                self.nums.remove(self.val)
            else:
                pass
        return len(self.nums)

x1 = Solution
x2 = x1.removeElement(0,0)
print(x2)
