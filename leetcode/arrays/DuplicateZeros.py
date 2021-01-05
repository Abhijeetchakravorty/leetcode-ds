class Solution:
        def __init__(self):
                self.arr = [1, 0, 2, 3, 0, 4, 5, 0]
        def duplicateZeros(self, indx):
                if (indx < len(self.arr)):
                        if (self.arr[indx] == 0):
                                indx = indx + 1
                                self.arr.insert(indx, 0)
                                self.arr.pop()
                        self.duplicateZeros(indx+1)
                
        def getNums(self):
                return self.arr
p1 = Solution()
p1.duplicateZeros(0)
print(p1.getNums())