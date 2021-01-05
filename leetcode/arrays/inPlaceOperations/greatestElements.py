class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                self._addItems_()
        
        def _addItems_(self):
                for i__ in range(self.data):
                        self.num = int(input("Please provide a number: "))
                        self.arr.append(self.num)
        
        def _replace_it_em(self):
                if (self.data == 1):
                        self.arr[0] = -1
                else:
                        for i in range(self.data):
                                for j in range(i+1, self.data):
                                        if (self.arr[i] < self.arr[j]):
                                                self.arr[i] = self.arr[j]
                                        if (self.arr[i+1] > self.arr[j]):
                                                if ((j+1) < self.data and self.arr[j] < self.arr[j+1]):
                                                        self.arr[i+1] = self.arr[j+1]
                                        if ((j+1)==self.data):
                                                self.arr[i+1] = -1
                return self.arr
p1 = Solution()
print(p1._replace_it_em())