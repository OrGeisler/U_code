def raising_exceptions_for_fun(num):
  if num == 1:
    raise StopIteration(f"Just because I can {num}")
  elif num == 2:
    raise KeyboardInterrupt(f"Just because I can {num}")
  elif num == 3:
    raise OSError(f"Just because I can {num}")
  else: # We do not have to provide a string
    raise FileNotFoundError
  
for i in range(4):
  try:
    raising_exceptions_for_fun(i)
  except StopIteration as exp:
    print("Got", exp)
  except KeyboardInterrupt as exp:
    print("Got", exp)
  except OSError as exp:
    print("Got", exp)
  except FileNotFoundError as exp:
    print("Got", exp)