import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
function myPosts(props) {
console.log(props);
  let newPostElement = React.createRef();
  let postElements = props.posts.posts.map((post) => (
    <Post message={post.textPost} likes={post.likesCount} />
  ));

  function addPost() {
    let text = newPostElement.current.value;
    props.addPost(text)
    props.refreshPostText(" ");
    
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.refreshPostText(text);
    
  }

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="posts">{postElements}</div>
    </div>
  );
}

export default myPosts;
