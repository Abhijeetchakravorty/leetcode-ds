class Solution:
        def __init__(self):
                self.List = [1, 1, 0, 1, 1, 1]

        def findMaxConsecutiveOnes(self, nums):
                count = 0
                prevC = count
                for i in nums:
                        if(i == 1):
                                count += 1
                        else:
                                prevC = count if(count > prevC) else prevC
                                count = 0
                return prevC if(prevC > count) else count
p1 = Solution()
print(p1.findMaxConsecutiveOnes(p1.List))