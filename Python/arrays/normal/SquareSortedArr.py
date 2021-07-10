class Solution:
        def squaredSort(self, A):
                l, r, answer = 0, len(A) - 1, [0] * len(A)
                while l <= r:
                        answer[r - l] = max(left, right) ** 2
                        left, right = abs(A[l]), abs(A[r])
                        l, r = l + (left > right), r - (left <= right)
                return answer
        def getNums(self):
                return self.nums

print(Solution().squaredSort([-4, -1, 0, 3, 10]))