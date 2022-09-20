function Tweeter() {
  let data = [];
  let postLastId = 2;
  let commentLastId = 6;

  getPosts = () => [...data];

  addPost = (text) => {
    postLastId += 1;
    data.push({
      text: text,
      id: "p" + postLastId,
      comments: [],
    });
  };

  removePost = (postId) => {
    data = data.filter((item) => item.id != postId);
  };

  addComment = (postId, text) => {
    commentLastId += 1;
    for (let index = 0; index < data.length; index++) {
      if (data[index].id == postId) {
        data[index].comments.push({ id: "c" + commentLastId, text: text });
      }
    }
  };

  removeComment = (postId, commentId) => {
    for (let index = data.length - 1; index >= 0; index--) {
      if (data[index].id === postId) {
        data[index].comments = data[index].comments.filter((item) => item.id != commentId);
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment
  };
}
