class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide the length of the array: "))
                self.addToList(0)
        
        def addToList(self, indx):
                if (indx < self.data):
                        self.num = int(input("PLease provide a height: "))
                        if (self.num < 1):
                                print("The minimum number is 1")        
                        else:
                                self.arr.append(self.num)
                                indx += 1
                        self.addToList(indx)

        def showMissing(self):
               self.new_data = set(range(1,len(self.arr)+1)) - set(self.arr)
               return sorted(list(self.new_data))

p1 = Solution()
print(p1.showMissing())
