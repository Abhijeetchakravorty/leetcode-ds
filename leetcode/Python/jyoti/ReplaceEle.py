class Solution:
    def __init__(self):
        pass
    def ReplaceEle(arr,n):
        max_from_right = arr[n-1]
        arr[n-1] = -1
        for i in range(n-2,-1,-1):
            temp = arr[i]
            arr[i] = max_from_right
            if max_from_right<temp:
                    max_from_right = temp
        return arr

        
x = Solution
arr = [17,18,5,4,6,1]
n = len(arr)
x1 = x.ReplaceEle(arr,n)
print(x1)
