def mergeSort(arr1,arr2):
    arr3 = arr1+arr2
    for i in range(len(arr3)):
        for j in range(i+1, len(arr3)-1):
            if arr3[i]>arr3[j]:
                arr3[i],arr3[j]= arr3[j],arr3[i]
            else:
                pass
    return arr3

arr1 = [1,2,3,0,0,0]
arr2 = [2,5,6]
print(mergeSort(arr1,arr2))
