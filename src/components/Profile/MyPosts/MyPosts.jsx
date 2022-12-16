import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
function myPosts(params) {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post  message='Hi, how are you?'/>
        <Post  message='its my first post'/>
       
      </div>
    </div>
  );
}

export default myPosts;