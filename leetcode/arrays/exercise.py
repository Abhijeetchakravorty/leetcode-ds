#1-x + x^2 / 2! - x^3/ 3!

n = int(input("Enter a number: "))
factorial = 1
def factorialData(n, factorial):
        for i in range (1, int(n)+1):
                factorial = factorial * i
        return factorial
if (n <= 0):
        print("You have not given an integer")
else:
        data = 0
        evn = 0
        odd = 0
        for j in range(1, n+1):
                if (j%2==0):
                        evn += pow(n, j)/factorialData(j, factorial)
                else:
                        odd += pow(n, j)/factorialData(j, factorial)
        
        data = 1 - odd + evn
        print(data)