import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  const postsElements = props.posts.posts.map((p, index) => <Post message={p.message} key={index} likes={p.likesCount} />);
  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;