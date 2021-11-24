import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likes="25" />
        <Post message="It's my first post" likes="30" />
      </div>
    </div>
  )
};

export default MyPosts;