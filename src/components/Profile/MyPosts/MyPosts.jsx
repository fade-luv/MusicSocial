import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
function myPosts(params) {

    const posts = [
      { id: 1, textPost: "Hi,bro", likesCount: 0 },
      { id: 2, textPost: "How, are you", likesCount: 0 },
      { id: 3, textPost: "Thanks", likesCount: 0 },
      { id: 4, textPost: "Goodbye", likesCount: 0 },
    ];
  
    let postElements = posts.map((post) => (
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