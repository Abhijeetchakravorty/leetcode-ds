class Solution(object):
        def __init__(self):
                self.arr = [1, 2, 3, 4, 6, 5, 4, 3, 2, 1]

        def validMountainArray(self, A):
                N = len(A)
                i = 0

                # walk up
                while i+1 < N and A[i] < A[i+1]:
                        i += 1

                # peak can't be first or last
                if i == 0 or i == N-1:
                        return False

                # walk down
                while i+1 < N and A[i] > A[i+1]:
                        i += 1

                return i == N-1

p1 = Solution()
print(p1.validMountainArray(p1.arr))