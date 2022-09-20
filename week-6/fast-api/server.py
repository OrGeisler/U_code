from fastapi import FastAPI
from fastapi import Request , Response , status
import uvicorn

app = FastAPI()
id_counter = 0
wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/wonders/{id}')
def get_wonders(id):
    for wonder in wonders:
        if(wonder["ID"] == int(id)):
            return wonder["name"]
    return ""

@app.post('/wonders')
async def create_wonder():
    print("Someone's trying to make a post request")
    return "Created"

@app.post('/wonders',status_code=200)
async def create_wonder(request: Request,response: Response):
    new_wonder = await request.json()
    global id_counter 
    id_counter+=1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    response.status_code = status.HTTP_201_CREATED
    return "Created"

if __name__ == "__main__":
    uvicorn.run("server:app",host="0.0.0.0", port=8000,reload=True)
