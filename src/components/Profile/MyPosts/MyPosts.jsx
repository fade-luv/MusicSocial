import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
function myPosts(props) {
  let postElements = props.posts.map((post) => (
    <Post message={post.textPost} likes={post.likesCount} />
  ));
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">{postElements}</div>
    </div>
  );
}

export default myPosts;
