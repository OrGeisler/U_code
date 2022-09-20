from fastapi import Request, FastAPI
import uvicorn

app = FastAPI()

@app.get('/')
def root():
    return "Home"


@app.get('/test/{data}')
def getting_the_get(data):
    print("Someone is getting!")
    print(data)
    return {"message":"Thanks for the get, here's a potato."}


@app.post('/test')
def posting_the_post():
    print("Someone is posting!")
    return {"message":"Thanks for the post, here's a potato."}

@app.post('/testData')
async def get_body(request: Request):
    res = await request.json()
    print(res)
    return {"message":"Thanks for the post with JSON, here's a potato."}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)