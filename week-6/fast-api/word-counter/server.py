from typing import Counter
from fastapi import FastAPI
from fastapi import Request
import uvicorn
import operator


app = FastAPI()

word_count = {}

@app.get('/sanity')
def root():
    return {"message":"Server is up and running"}

@app.get('/word_count')
def root():
    return word_count

@app.get('/{word}')
def count_word(word):
    return {"count":word_count.get(word,0)}

@app.post('/add/word')
async def add_word(request: Request):
    req = await request.json()
    new_word= req['word']
    modifed_word = "".join(c.lower() for c in new_word if c.isalpha())
    if word_count.get(modifed_word):
        word_count[modifed_word] +=1
    else:
        word_count[modifed_word] = 1
    return {"text": f'Added {modifed_word}, currentCount: {word_count[modifed_word]}'}

@app.post('/add/sentence')
async def add_sentence(request: Request):
    req = await request.json()
    words_list= req['sentence'].split()
    numNewWords = 0
    numOldWords = 0

    for word in words_list:
        modifed_word = "".join(c.lower() for c in word if c.isalpha())
        if word_count.get(modifed_word):
            word_count[modifed_word] += 1
            numOldWords += 1
        else:
            word_count[modifed_word] = 1
            numNewWords += 1
    return {'text': f'Added {numNewWords} words, {numOldWords} already existed'}

@app.delete('/delete/{word}',status_code=204)
def delete_word(word):
    if word_count.get(word):
        del word_count[word]

@app.get('/most_popular/')
def most_popular():
    most_popular = max(word_count.items(), key=operator.itemgetter(1))[0]
    return {"text": f'{most_popular}', 'count': f'{word_count[most_popular]}'}


@app.get('/most_popular_list/')
def most_popular():
    c = Counter()
    for i in word_count:
        c.update(i=word_count[i])
    most_popular = c.most_common(5)
    return {"text": f'{most_popular}'}

if __name__ == "__main__":
    uvicorn.run("server:app",host="0.0.0.0", port=8000,reload=True)
