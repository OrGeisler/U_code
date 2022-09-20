def isPalindrom(string):
    return True if string == string[::-1] else False

# print(isPalindrom("bba"))

def revarseWords(words):
    return  ' '.join(word[::-1] for word in words.split(" "))

# print(revarseWords("hello world"))

def sumEven(list):
    return sum(list[1::2])

# print(sumEven([1, 2, 1, 3, 1]))

def duplicate(list):
    return list+list

# print(duplicate([1,2,3]))

def changeSpace(string):
    return string.replace(" ","@")

# print(changeSpace("You got it"))

def numOfSpaces(string):
    return string.count(" ")

print(numOfSpaces("my name is what"))