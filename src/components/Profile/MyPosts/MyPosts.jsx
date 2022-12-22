import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/state";

function myPosts(props) {
  let newPostElement = React.createRef();
  let postElements = props.posts.posts.map((post) => (
    <Post message={post.textPost} likes={post.likesCount} />
  ));

 
  function addPost() {
    let postText = newPostElement.current.value;
    props.dispatch(addPostActionCreator(postText));
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="posts">{postElements}</div>
    </div>
  );
}

export default myPosts;
