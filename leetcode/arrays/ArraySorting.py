class Solution:
        def __init__(self):
                self.nums = [-4, -1, 0, 3, 10]

        def squaredSort(self):
                for i in range(len(self.nums)):
                        self.nums[i] = pow(self.nums[i], 2)
                self.nums.sort()
        def getNums(self):
                return self.nums

p1 = Solution()
print(p1.getNums())
p1.squaredSort()
print(p1.getNums())