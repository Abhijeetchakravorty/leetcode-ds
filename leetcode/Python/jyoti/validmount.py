class Solutuion:
    def __init__(self) -> None:
        pass
    def Validmount(arr,n):
        if n<3:
            return False
        i = 0
        if i in range(n-1) and arr[i]<arr[i+1]:
            i = i+1
        if i==0 or i==n-1:
            return False
        if i in range(n-1) and arr[i]>arr[i+1]:
            i = i+1
        return True
x = Solutuion
arr = [2,1]
n = len(arr)
x1 = x.Validmount(arr,n)
print(x1)
            
                

