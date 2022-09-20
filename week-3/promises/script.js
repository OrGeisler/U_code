// ex1
// $.get('https://random-word-api.herokuapp.com/word').
//     then(function (random) {
//         console.log(random)
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${random}`)
// }).then(function(books){
//     console.log(books)
// })

// ex2

$.get('https://random-word-api.herokuapp.com/word').
    then(function (random) {
        console.log(random)
        return $.get(`http://api.giphy.com/v1/gifs/search?q=${random}&api_key=MCvALOOo8xKOooBw9eQzGF0jjcoVwgWS&limit=5`)
}).then(function(data){
    $('body').append(`<iframe src="${data.data[0].embed_url}" frameborder="0"></iframe>`
       )
    }
)
