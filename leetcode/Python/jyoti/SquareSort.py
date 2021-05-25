class Solution:
    def __init__(self) -> None:
        pass
    def SquareSort(nums,n):
        nums1=[]
        for i in range(0,n):
            x = (nums[i]**2)
            nums1.append(x)
            nums1.sort()
        return nums1
x = Solution
nums = [-4,-1,0,3,4]
n=len(nums)
x1 = x.SquareSort(nums,n)
print(x1)