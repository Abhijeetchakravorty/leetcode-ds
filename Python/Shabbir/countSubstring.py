import itertools
class Solution:
    def __init__(self, string):
        self.data = string
        self.count = len(string)
        self.arrList = list(string)

    def splitter(self, str):
        for i in range(1, len(str)):
            start = str[0:i]
            end = str[i:]
            yield (start, end)
            for split in self.splitter(end):
                result = [start]
                result.extend(split)
                yield list(result)

    def flattenList(self):
        newArr = self.splitter(self.data)
        newList = list(newArr)
        finaList = []
        newData = []
        for i in range(len(newList)):     
            for j in range(len(newList[i])):
                newData.append(newList[i][j])
        
        newData = list(set(newData))
        for k in range(len(newData)):
            newTupleDat = list(newData[k])
            lowerCase = 0
            upperCase = 0
            for k in range(len(newTupleDat)):
                if (newTupleDat[k].isupper()):
                    upperCase += 1

                if (newTupleDat[k].islower()):
                    lowerCase += 1
            if (lowerCase == upperCase):
                finaList.append(newTupleDat[k])
        return len(finaList)

p1 = Solution('gEEk')
print(p1.flattenList())

p1 = Solution('WomensDAY')
print(p1.flattenList())
# print(p1.flattenList())