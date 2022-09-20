import requests

# global money 
money = 800

def getPrice(item):
    price = requests.get(f"http://localhost:8000/{item}")
    return price.json()['price']

# print(getPrice("table"))

def buyItem():
    global money 
    item = input("Please choose an item to buy:")
    price = getPrice(item)
    if price < money:
        message = requests.get(f"http://localhost:8000/buy/{item}").json()
        money = money - price
        return f''''Congratulations, youve just bought {message["name"]} for {message["price"]}. 
        There are {message["inventory"]} left now in the store.
        and you got {money} left'''
    return "Get a Job"

print(buyItem())

#testdd