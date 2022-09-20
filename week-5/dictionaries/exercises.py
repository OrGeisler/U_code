line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"

def get_5common(line):
    words = line.split()
    dict = {}
    for word in words:
        if dict.get(word):
            dict[word] += 1
        else:
            dict[word] = 1
    sortedDict = sorted(dict,key=dict.get)[:5]
    return sortedDict


print(get_5common(line))

# movies = {
#     "Endgame": 2019,
#     "Potter": 2001,
#     "King": 1994,
#     "Rings": 2001
# }

# books = movies
# books["Potter"] = 1997
# books["Rings"] = 1954

# print(books["Rings"])
# print(movies["Rings"])