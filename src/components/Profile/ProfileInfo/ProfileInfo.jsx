import classes from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <>
      <div>
        <img
          src="https://www.fonstola.ru/images/201404/fonstola.ru_143848.jpg"
          className={classes.profile_background}
        ></img>
      </div>
      <div>ava + description</div>
    </>
  );
}

export default ProfileInfo;