class Solution:
        def __init__(self):
                self.List = [1, 1, 0, 1, 1, 1]
                self.counter = 0
                self.maxcounter = 0

        def findMaxConsecutiveOnes(self, indx):
                if (self.List[indx] == 0):
                        self.counter = 0
                else:
                        self.counter += 1
                        self.maxcounter = max(self.counter, self.maxcounter)
                if (indx == len(self.List)-1):
                        print(self.maxcounter)
                if (indx != len(self.List)-1):
                        indx += 1
                        self.findMaxConsecutiveOnes(indx)
p1 = Solution()
p1.findMaxConsecutiveOnes(0)
