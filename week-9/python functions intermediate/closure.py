def foo():
  x = 1
  
  def inner():
    print(x)    # notice this inner function using the outer function's variable
  
  return inner

baz = foo()     #out here, x doesn't exist
baz()           #but when we invoke baz, we're printing x! 


# Run this code, then try to print(x) - it’s not defined, but baz is using it! Here’s what’s going on:
# The python interpreter get’s into action:
# It starts by setting the variable baz to the result of calling the function foo
# The function foo gets called, initializing the variable x and the function inner (in its scope)
# Finally, foo returns the function inner back to baz