def removeDuplicate(nums):
    for i in range(len(nums)):
        if (nums[i] in nums) and (nums[i] not in nums2) :
            nums2.append(nums[i])
    return nums2
nums = [1,2,2,2,5,6,7,7,7]
nums2 =[]
print(removeDuplicate(nums))
