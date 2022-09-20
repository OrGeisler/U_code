function Renderer() {

  function renderPosts(posts) {

    const postsEle = $("#posts")
    postsEle.empty();
    for (const post of posts) {
      const objectDiv = $(`<div class = "object"></div>`);
      const postDiv = $(`<div class = "post post-text" data-id = ${post.id}>${post.text}
                            <button class="delete">X</button>
                         </div>`);
      objectDiv.append(postDiv);
      for (const comment of post.comments) {
        const commentDiv = $(`<div class = "comments" data-id = ${comment.id}>${comment.text}
                                 <button class="comment-delete">X</button>
                              </div>`);
        objectDiv.append(commentDiv);
      }
      objectDiv.append($(`<input type="text" placeholder="Write a comment" id="comment-input" />`))
      objectDiv.append($(`<button class="comment-write">Comment</button>`))
      postsEle.append($(objectDiv));
    }
  }
  return{renderPosts}
}


