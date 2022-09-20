$("body").append("<div id = 'one' class='box'></div>")
$("body").append("<div id = 'two' class='box'></div>")
$('#one').hover(function () {
    $(this).css('background-color','purple')
    $('#two').css('background-color','red')
})
$('#two').hover(function () {
    $(this).css('background-color','purple')
    $('#one').css('background-color','red')
})