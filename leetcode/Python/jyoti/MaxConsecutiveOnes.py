def maxConsecutiveOnes(arr,n):
    count = 0
    for i in range(len(arr)):
        if (arr[i] == 1) :
            count +=1
        else:
            count = 0
    return count
arr = [0,0,1,1,1,1]
n = len(arr)
print(maxConsecutiveOnes(arr,n))