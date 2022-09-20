from ast import Store
from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles

from store import store

app = FastAPI()
app.mount("/static", StaticFiles(directory="./static"), name="static")

@app.get('/sanity')
def root():
    return "Server is up and running smoothly"

@app.get("/{name}")
def root(name):
    for i in store:
        if i["name"] == name:
            return {"price" : i["price"]}
    return {"price" : None}

@app.get("/buy/{item}")
def root(item):
    for i in store:
        if i["name"] == item:
            i["inventory"] -= 1
            return i
    return None

@app.get("/sale/")
def root(admin):
    if admin == "true":
        for i in store:
            if i["inventory"] > 10:
                i["price"] *= 0.5
        return store
    return {"not an admin"}

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000,reload=True)