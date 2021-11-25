import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: "It's my first post", likesCount: 30 },
  ];

  const postsElements = posts.map( p => <Post message={posts[0].message} likes={posts[0].likesCount} />);

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