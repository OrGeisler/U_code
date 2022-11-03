g = 'I am global'

def func():
  g = 'I am local'
  print('func: ', g)

func()
print('outside: ', g) 

## If we want to update a global variable from within a function we will have to specify the global keyword:

# g = 'I am global'

# def func():
#   global g
#   g = 'overrideing global'
#   print('func: ', g)

# func()
# print('outside: ', g) 