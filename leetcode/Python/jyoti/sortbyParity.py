class Solution:
    def __init__(self) -> None:
        pass
    def SortbyParity(arr,n):
        i=0
        for j in range(n):
            if arr[j]%2==0:
                arr[j],arr[i]= arr[i],arr[j]
                i+=1
                
x = Solution
arr = [3,1,2,4]
n = len(arr)
x1 = x.SortbyParity(arr,n)
print(arr)
        