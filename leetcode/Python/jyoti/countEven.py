def countEvens(arr, n):
    for i in range(n):
        arr1 = len(str(arr[i]))
        if (arr1%2==0):
            print(str(arr[i])+ " contains " +str(arr1)+ " (even number of digits)" )
        else:
            print(str(arr[i]) + " contains " +str(arr1)+" (odd number of digits)" )
    return 0
arr = [12,345,2,6,7896]
n = len(arr)
print(countEvens(arr,n))