def duplicateZero(arr,i):
    if i<len(arr):
        if (arr[i]==0):
            i=i+1
            arr.insert(arr[i],0)
            arr.pop()
        duplicateZero(arr,i+1)

    return arr
arr = [1,0,2,3,0,5,0]
print(duplicateZero(arr,0))

        