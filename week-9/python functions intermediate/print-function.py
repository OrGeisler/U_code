print("the ", 3 , " colors are: ", ["blue", "red", "green"]) 
print("Here", "we", "go", "again", sep=" Yo ")
# Here Yo we Yo go Yo again 
print("This is a sentence", end="!\n")
# This is a sentence! 

with open("result.txt", "a") as res:
  print("hello", file=res)

# the with keyword make sure to close the file in the end

# OR

# my_file = open("result.txt", "a")
# print("hello again", file=my_file)
# my_file.close() 