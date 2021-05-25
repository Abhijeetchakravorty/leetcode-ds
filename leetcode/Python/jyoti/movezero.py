class Solution:
    def __init__(self) -> None:
        pass
    def movezero(arr,n):
       insert_index = 0
       for i in range(len(arr)):
           if arr[i]!=0:
               arr[insert_index]= arr[i]
               insert_index = insert_index+1
       for i in range(insert_index, len(arr)):
           arr[i]=0

x = Solution
arr = [0,4,5,6,0,3]
n = len(arr)
x2 = x.movezero(arr,n)
print(arr)
