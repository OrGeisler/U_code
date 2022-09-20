things = ["tree", "leaves", "green", "letter",
          "envelope", "cost", "money", "check"]

# map recive a function (lambda is anonimos functions
# and a list to itirate on it)
lenght_things = list(map(lambda value : len(value) ,things))

# print(lenght_things)

#list comprehension

code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}

encrypted_message = "82705145106"

decrypted = "".join([code[value] for value in encrypted_message])

# print(decrypted)

# exersices

import json

with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)

#ex1

pokemon_data = list(map(lambda pokemon:{
    "id":pokemon["id"],
    "name":pokemon["name"],
    "type":pokemon["type"],
    "weight":pokemon["weight"],
    "height":pokemon["height"],
    "weaknesses":pokemon["weaknesses"]
    },
    pokemon_data))

# print(pokemon_data[0])

pokemon_names = list(map(lambda pokemon: pokemon["name"],pokemon_data))
# print(pokemon_names)

heavy_pokemon = list(filter(lambda pokemon: pokemon["weight"] > 100,pokemon_data))

# print(len(heavy_pokemon))

weak_water = list(map(lambda pokemon : pokemon["name"],filter(lambda pokemon:"Water" in pokemon["weaknesses"] ,pokemon_data)))

# print(weak_water)


pokemon_data = json.load(open("pokemon.json"))