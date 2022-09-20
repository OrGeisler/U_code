

// const useData = function(data){
//     console.log(`${data.items[0].volumeInfo.title} By ${data.items[0].volumeInfo.authors[0]}`)
//     // console.log(data)
//   }
  
// function fetch(queryType,queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: useData
//       }); 
// }
// fetch("isbn",9782806269171)
// fetch(1440633908)
// fetch(9781945048470)
// fetch(9780307417138)
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=MCvALOOo8xKOooBw9eQzGF0jjcoVwgWS&limit=5");
// xhr.done(function(data) {
//     $("body").append(`<iframe src="${data.data[0].embed_url}" frameborder="0"></iframe>`
//     ) 
//      });

function fetch(value) {
    $.ajax({
        url:`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=MCvALOOo8xKOooBw9eQzGF0jjcoVwgWS&limit=5`,
        success: function (data) {
            let div = $('#div')
            div.empty()
               div.append(`<iframe src="${data.data[0].embed_url}" frameborder="0"></iframe>`
               ) 
        }
    })
}


$('#btm').on("click",function () {
    const value = $('#input').val()
    fetch(value)
})