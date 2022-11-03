def all_arguments(num, *args, **kwargs):
  print("regular argument", num)
  print("args", args)
  print("kwargs", kwargs)

all_arguments(3, 4, "arg1", "arg2", arg3=3, arg4=[1,2]) 