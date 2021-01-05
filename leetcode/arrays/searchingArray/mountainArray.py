class Solution:
        def __init__(self):
                self.arr = []
                self.data = int(input("Please provide number of items: "))
                if (self.data < 3):
                        print("Please provide a number greater than equal to 3")
                        self.__init__()
                else:
                        if (1<= self.data <= pow(10, 4)):
                                self.addItems(0)
                        else:
                                print("Value out of range")
                                self.__init__()
        
        def addItems(self, indx):
                while (indx < self.data):
                        print(self.data)
                        self.num = int(input("Please provide a number: "))
                        if (0 <= self.num <= pow(10, 4)):
                                print("I am here"+str(indx))
                                self.arr.append(self.num)
                                indx += 1
                                self.addItems(indx)
                        else:
                                print("Value out of range")
        
        def checkGreater(self, indx):
                if (self.arr[indx] > self.arr[indx+1]):
                        self.start = False
                        return
        
        def checkLower(self, indx):
                if (self.arr[indx] < self.arr[indx+1]):
                        self.end = False
                        return

        def checkIfMountain(self, indx):
                self.isMountain = False
                self.typeOfMountain = None
                if (self.data%2==0):
                        if(self.arr[int(self.data/2)] < self.arr[int(self.data/2)-1]):
                                self.isMountain = True
                                self.typeOfMountain = "even"
                else:
                        if (self.arr[int(self.data/2)] > self.arr[int(self.data/2)+1]):
                                self.isMountain = True
                                self.typeOfMountain = "odd"
                
                if (self.isMountain == True):
                        self.start = True
                        self.end = True
                        while(indx < self.data):
                                if ((self.typeOfMountain == "even") and (indx <= self.arr[int(self.data/2)-1])):
                                        self.checkGreater(indx)
                                        break
                                
                                elif (self.typeOfMountain == "even" and (self.arr[int(self.data/2)] <= indx < self.data) and self.arr[indx+1] is not None):
                                        self.checkLower(indx)
                                        break

                                elif (self.typeOfMountain == "odd" and (indx <= self.arr[int(self.data/2)])):
                                        self.checkGreater(indx)
                                        break
                                        
                                elif ((self.typeOfMountain == "odd") and (self.arr[indx+1] is not None)):
                                        self.checkLower(indx)
                                        break
                                else:
                                        if (self.arr[indx-1] < self.arr[indx]):
                                                self.end = False
                                                break
                        if (self.start == True and self.end == True):
                                return "This a valid mountain"

p1 = Solution()
print(p1.checkIfMountain())