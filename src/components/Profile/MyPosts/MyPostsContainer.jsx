import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      let action = onPostChangeActionCreator(text);
      dispatch(action);
    },
    addPost: (postText) => {
      let action = addPostActionCreator(postText);
      dispatch(action);
    },
  };
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
