import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.posts.newPostText}
        addPost={props.addPost}
        refreshPostText={props.refreshPostText}
      />
    </div>
  );
}

export default Profile;
