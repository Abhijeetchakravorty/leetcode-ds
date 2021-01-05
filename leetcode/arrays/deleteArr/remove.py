#remove element from array
class Solution:
        def __init__(self):
                self.arr = []
                self.addToList()
                print(self.removeItems())
        
        def addToList(self):
                self.num = int(input("Please provide length: "))
                if (self.num >=0 and self.num <= 100 ):
                        if (self.num == 0):
                                print("Please provide a greater number")
                                self.addToList()
                        else:
                                index = 0
                                while(index < self.num):
                                        data = int(input("Please provide the number: "))
                                        if (data >= 0 and data <= 50):
                                                self.arr.append(data)
                                                index += 1
                                        else:
                                                pass
                                                
                else:
                        if (self.num <= 0):
                                print("Nothing to print")
                        if (self.num > 50):
                                print("Number greater than 100")
        
        def removeItems(self):
                if (self.num == 0 or self.num > 100):
                        print("Items not added")
                else:
                        indx = 0
                        item = int(input("Please provide the item which needs to be deleted: "))
                        while(indx < len(self.arr)):
                                if (self.arr[indx] == item):
                                        del self.arr[indx]
                                        indx = 0
                                else:
                                        indx += 1
                        print(self.arr)
                        return len(self.arr)

p1 = Solution()


                


