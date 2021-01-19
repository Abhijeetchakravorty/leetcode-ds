def printData(num):
        if (num%2 == 0):
                data = '*' #we take a variable with a value
                num = num * 2 # whatever the highest value we want to print we double the value so that we have a mid point to roll back the loop
                for i in range(1, num+1): #next we run the loop from 1 because the inner loop will not iterate on 0
                        if (i <= int(num/2)): #now we check whether we have reached the mid point or not if not then
                                j = 0 #we create another loop where we start printing in each row
                                while (j < i): # the first iteration will print only one stars, the next will print two stars and the next will print 3 stars and so on so forth
                                        print(data, end=" ")
                                        j += 1
                                print("\n")
                        else:
                                k = 0 #once our mid point crosses we have to run the loop in reverse order that is every time the loop should iterate -1 times for the next loop
                                while(k < (num-i)): #then this prints the loop 3 times then 2 times then 1 times then 0 times
                                        print(data, end=" ")
                                        k += 1
                                print("\n")
        else:
                print("Please provide an even number")
printData(50)