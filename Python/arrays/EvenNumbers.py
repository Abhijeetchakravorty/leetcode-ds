class Solution:
        def __init__(self):
                self.nums = [12, 345, 2, 6, 7896]
        def findNumbers(self, indx):
                if (indx != len(self.nums)-1):
                        self.countDigit = len(list(str(self.nums[indx])))
                        if (self.countDigit%2==0):
                                print(str(self.nums[indx])+" has even number of digits")
                        else:
                                print(str(self.nums[indx])+" has odd number of digits")
                        self.findNumbers(indx+1)
p1 = Solution()
p1.findNumbers(0)