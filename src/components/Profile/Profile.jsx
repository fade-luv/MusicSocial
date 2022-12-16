import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile(params) {
  return (
    <div>
      <div>
        <img
          src="https://www.fonstola.ru/images/201404/fonstola.ru_143848.jpg"
          className={classes.profile_background}
        ></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
