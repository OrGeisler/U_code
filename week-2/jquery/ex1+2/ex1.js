$("body").append("<input type='text' placeholder='human name'>")
$('body').append("<button>Add human</button>")
$("button").on("click",function () {
    $("ul").append(`<li>${$("input").val()}</li>`)
    $("input").val("") 
})
$('ul').on("click","li",function () {
    $(this).remove()
})