import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';




const MyPosts = (props) => {
  const postsElements = props.posts.posts.map((p, index) => <Post message={p.message} key={index} likes={p.likesCount} />);
  
  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
  };
  
  
  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;