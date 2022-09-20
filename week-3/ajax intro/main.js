$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result.items[0].volumeInfo.description)
})
