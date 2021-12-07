
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';




const MyPostsContainer = () => {

  return (<StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
       return(<MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)
      }}
    </StoreContext.Consumer>

  )
};

export default MyPostsContainer;