import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';





const mapStateToProps = (state) => {
  return (
    {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
    }
  )
};
const mapDispatchToProps = (dispatch) => {
  return (
    {
      addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)); }
    }
  )
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);