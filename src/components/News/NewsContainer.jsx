import { connect } from 'react-redux';
import { addNewsActionCreator, updateNewNewsTextActionCreator } from '../../Redux/newsReducer';
import News from './News';



let mapStateToProps = (state) => {
  return (
    {
      news: state.newsPage.news,
      newNewsText: state.newsPage.newNewsText,
    }
  )
};

let mapDispatchToProps = (dispatch) => {
  return (
    {
      updateNewNewsText: (text) => { dispatch(updateNewNewsTextActionCreator(text)) },
      addNews: () => { dispatch(addNewsActionCreator()) }
    }
  )
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);


export default NewsContainer;