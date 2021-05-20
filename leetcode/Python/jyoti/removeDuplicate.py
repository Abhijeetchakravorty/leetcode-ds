class Solution:
    def __init__(self):
        self.nums = [1,2,2,2,5,6,7,7,7]
    def removeDuplicate(self ,index):
        count = 0
        for index in range(len(self.nums)):
            count = count + 1
            if self.nums[index]!= self.nums[count]:
                self.nums[count]=self.nums[index]

        return count
x = Solution
print(x.removeDuplicate(0))


