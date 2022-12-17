import classes from "./Post.module.css";

function Post(props) {




  return (
    <div className={classes.item}>
      <img src="https://coolsen.ru/wp-content/uploads/2021/09/12.jpg" alt="" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;