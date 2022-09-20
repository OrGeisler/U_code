const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

// add post
function post() {
    const text = $('#input').val()
    if (text != "") {
        $('#input').val("")
        tweeter.addPost(text)
        renderer.renderPosts(tweeter.getPosts())  
    }
}

 // delete post
$('#posts').on('click','.delete', function () {
    tweeter.removePost($(this).closest('.post').data().id)
    renderer.renderPosts(tweeter.getPosts())

})

// add comment
$('#posts').on('click','.comment-write', function () {
    const text = $(this).siblings('#comment-input').val()
    if (text != "") {
        tweeter.addComment($(this).closest('.object').find('.post').data().id,text)
        renderer.renderPosts(tweeter.getPosts())  
    }
})

// delete comment
$('#posts').on('click','.comment-delete',function () {
    tweeter.removeComment($(this).closest('.object').find('.post').data().id , $(this).closest('.comments').data().id)
    renderer.renderPosts(tweeter.getPosts())
})
