def SquareandSum(arr,n):
    Newarr = []
    for i in range(0,n):
        square = (arr[i]**2)
        Newarr.append(square)
        if (i+1 >= 2):
            for j in range(0, len(Newarr)):
                if (j+1 <= len(Newarr)-1):
                    if (Newarr[j] > Newarr[j+1]):
                        temp = Newarr[j]
                        Newarr[j] = Newarr[j+1]
                        Newarr[j+1] = temp

    return Newarr
arr = [-4,-1,0,3,10]
n = len(arr)
print(SquareandSum(arr,n))