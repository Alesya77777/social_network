import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';





const MyPosts = (props) => {
  const postsElements = props.posts.map((p, index) => <Post message={p.message} key={index} likes={p.likesCount} />);

  const newPostElement = React.createRef();
  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;