import React from 'react';
import { addNewsActionCreator, updateNewNewsTextActionCreator } from '../../Redux/newsReducer';
import News from './News';


const NewsContainer = (props) => {
  const state = props.store.getState();

  const onAddNews = () => {
    props.store.dispatch(addNewsActionCreator());
  }

  const onNewsChange = (text) => {
    const action = updateNewNewsTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
  <News addNews={onAddNews} updateNewNewsText={onNewsChange} news={state.newsPage.news} newNewsText={state.newsPage.newNewsText} />
  )
};

export default NewsContainer;