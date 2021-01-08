class Solution:
        def __init__(self):
                self.nums1 = [1, 2, 3, 0, 0, 0]
                self.nums2 = [2, 5, 6]
                self.num3 = self.nums1 + self.nums2

        def updateArr(self, indx):
                if (indx < len(self.num3)):
                        if (self.num3[indx] == 0):
                                del self.num3[indx]
                                indx = 0
                        else:
                                indx += 1
                        self.updateArr(indx+1)
                # self.num3 = self.num3.sort()
                return sorted(self.num3)
p1 = Solution()
p2 = p1.updateArr(0)
print(p2)
