## ex- to upper

def to_upper(char):
    if  97 <= ord(char) <= 122 :
        return chr(ord(char) - 32)
    else:
        return char
# print(to_upper("d"))    # "D"
# print(to_upper("Q"))    # "Q" (no change)
# print(to_upper("!"))    # "!" (no change) 

def upper(string):
    value = ""
    for i in string:
        value += to_upper(i)
    return value

# print(upper("I love Python!"))    # "I LOVE PYTHON!" 


def encode(string):
    encoded = ""
    for i in string:
        encoded += f"{str(ord(i))} "
    return encoded[:len(encoded)-1]


# print(encode("Hello"))    # "72 101 108 108 111" 

def decode(string):
    decoded =""
    for i in string.split(" "):
        decoded += chr(int(i))

    return decoded

print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))


