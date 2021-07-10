class Solution:
        def __init__(self):
                self.nums1 = [1, 2, 3, 0, 0, 0]
                self.nums2 = [2, 5, 6]
                self.num3 = self.nums1 + self.nums2

        def merge(self, nums1, m, nums2, n):
                j = i = 0
                while j < n:
                        if i >= m + j or nums1[i] >= nums2[j]:
                                nums1.pop()
                                nums1.insert(i, nums2[j])
                                j += 1
                        i += 1
p1 = Solution()
p2 = p1.merge(0)
print(p2)
