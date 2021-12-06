
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {

   const state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }


  return (
    <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={state.profilePage.posts}  newPostText={state.profilePage.newPostText}/>
  )
};

export default MyPostsContainer;