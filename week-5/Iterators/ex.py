#ex1

def my_enumerate(item , start = 0):
    length = len(item)
    for i in range(length):
        yield start+i , item[i]

# for index, elem in my_enumerate([10, 20, 30, 40]):
#   print(index, elem) 
# for index, elem in my_enumerate([10, 20, 30, 40], 10):
#   print(index, elem)

#ex2

def my_accumulate(list):
    sum = 0
    for i in list:
        sum += i
        yield sum
        

# for elem in my_accumulate([1,2,3,4,5]):
#   print(elem) 