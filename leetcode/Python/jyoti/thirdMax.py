class Solution:
    def __init__(self) -> None:
        pass
    def thirdMax(arr):
        x = sorted(arr)
        if len(arr)<=2:
            print("Third max is " +str(arr[1]))
        else:
            print("Third max is " +str(arr[len(arr)-3]))
x = Solution
arr = [3,2,1,4,5,6]
x1 = x.thirdMax(arr)
print(x1)

