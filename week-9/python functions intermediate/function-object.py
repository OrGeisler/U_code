def hello(name = "Margo"):
  """this is a greeting function"""
  print(f'Hello {name.capitalize()}!') 

print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__) 