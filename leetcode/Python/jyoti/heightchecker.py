
def heightChe(height):
    expected = sorted(height)
    nums = 0
    for i in range(len(height)):
        if expected[i]!=height[i]:
            nums = nums+1
            print("Index " +str(i)+ " does not match" )
    
    return nums
             

height = [1,1,4,2,1,3]
x1 = heightChe(height)
