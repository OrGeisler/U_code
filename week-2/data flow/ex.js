posts = [{name:"Avi",text:"Hello"},
        {name:"Moshe",text:"Hi"},
        {name:"Or",text:"Bye"}]

function render() {
    for (const item of posts) {
        const div = $(`<div>my name is ${item.name}, ${item.text}</div>`)
        $('#posts').append(div)
    } 
}

$('button').on("click",function () {
    const name = $("#name").val()
    const text = $("#text").val()
    posts.push({name:name,text:text})
    $('#posts').empty()
    render()
    $("#name").val("")
    $("#text").val("")
})

"bla"