import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function myPostsContainer(props) {
  let state = props.store.getState();
  let posts = state.profilePage.posts;
  let postText = state.profilePage.newPostText;

  function addPost() {
    let action = addPostActionCreator(postText);
    props.store.dispatch(action);
  }

  function onPostChange(text) {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      onPostChange={onPostChange}
      addPost={addPost}
      posts={posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default myPostsContainer;
