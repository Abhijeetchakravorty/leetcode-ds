class Solution:
        def findNumbers(self, nums):
                even = 0
                for x in nums:
                        if len(str(x)) % 2 == 0:
                                even += 1
                return even
print(Solution().findNumbers([12, 345, 2, 6, 7896]))