class Solution:
    def __init__(self) -> None:
        pass
    def removeele(arr,val):
        j=0
        for j in range(len(arr)-1):
            if arr[j]==val:
                del arr[j]
                j=0
            else:
                j=j+1
        del j
x= Solution
arr = [3,2,2,3]
val = 3
x1 = x.removeele(arr,val)
print(arr)
