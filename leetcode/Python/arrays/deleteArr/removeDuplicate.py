class Solution:
        def __init__(self):
                self.nums = None
                self.arr = []
                print(pow(-10, 4))
                self.addToList()
        
        def calcPow(self, num, power):
                data = pow(num, power)
                print(pow(-10, 4))
                print(data)
                return data
        
        def addToList(self):
                self.data = int(input("Please provide list length: "))
                if (self.data >= 0 or self.data <= 3*pow(10, 4)):
                        indx = 0
                        while(indx < self.data):
                                val = int(input("Please provide a value: "))
                                if (val >= self.calcPow(-10, 4) or val <= self.calcPow(10, 4)):
                                        self.arr.append(val)
                                        indx += 1
                                else:
                                        pass
                else:
                        print('Value out of range')
                        self.addToList()
        
        def removeCommon(self):
                self.uniqueItems = set(self.arr)
                self.arr = list(self.uniqueItems)
                return self.arr

p1 = Solution()
print(p1.removeCommon())