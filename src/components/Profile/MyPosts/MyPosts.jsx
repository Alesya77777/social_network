import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';




const MyPosts = (props) => {
  const postsElements = props.posts.map((p, index) => <Post message={p.message} key={index} likes={p.likesCount} />);

  const newPostElement = React.createRef();
  const addPost = () => {
    props.dispatch(addPostActionCreator());

  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }


  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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