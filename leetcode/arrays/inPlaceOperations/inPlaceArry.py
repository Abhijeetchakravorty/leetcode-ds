class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                for __j in range(self.data):
                        self.arr_data = int(input("Please provide a number: "))
                        self.arr.append(self.arr_data)
        
        def squared(self):
                for __i in range(self.data):
                        if (__i == 0 or (__i%2==0)):
                                self.arr[__i] = pow(self.arr[__i], 2)
                return self.arr

p1 = Solution()
print(p1.squared())
