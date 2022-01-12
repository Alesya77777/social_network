import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';




const MyPosts = (props) => {
  const postsElements = props.posts.map((p) =>
    <Post message={p.message} key={p.id} likes={p.likesCount} />);


  const addNewPost = (value) => {
    props.addPost(value.newPostText);
  }

  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <AddMyPostFormRedux onSubmit={addNewPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

const AddMyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"} component={"textarea"} placeholder={"Add post"} />
      </div>
      <div>
        <button >Добавить пост</button>
      </div>
    </form>
  )
};

const AddMyPostFormRedux = reduxForm({ form: "addMyPostForm" })(AddMyPostForm);


export default MyPosts;