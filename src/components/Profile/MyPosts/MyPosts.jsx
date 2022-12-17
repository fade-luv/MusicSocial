import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
function myPosts(params) {

    const postsData = [
      { id: 1, textPost: "Hi,bro", likesCount: 0 },
      { id: 2, textPost: "How, are you", likesCount: 0 },
      { id: 3, textPost: "Thanks", likesCount: 0 },
      { id: 4, textPost: "Goodbye", likesCount: 0 },
    ];
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message={postsData[0].textPost} likes={postsData[0].likesCount} />
        <Post message={postsData[1].textPost} likes={postsData[1].likesCount} />
      </div>
    </div>
  );
}

export default myPosts;