def generate_add(x):
  def inner(y):
    return x + y

  return inner 

add_1 = generate_add(1)
add_2 = generate_add(2)
print(add_1(5)) #6 
print(add_2(5)) #7 