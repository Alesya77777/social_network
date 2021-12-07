import React from 'react';
import { addNewsActionCreator, updateNewNewsTextActionCreator } from '../../Redux/newsReducer';
import StoreContext from '../../StoreContext';
import News from './News';


const NewsContainer = () => {
  

  return (
    <StoreContext.Consumer >
      {(store) => {
        let state = store.getState();

        const onAddNews = () => {
          store.dispatch(addNewsActionCreator());
        };
      
        const onNewsChange = (text) => {
          const action = updateNewNewsTextActionCreator(text);
          store.dispatch(action);
        }
       return(<News addNews={onAddNews} updateNewNewsText={onNewsChange} news={state.newsPage.news} newNewsText={state.newsPage.newNewsText} />)
      }}
    </StoreContext.Consumer>
  
  )
};

export default NewsContainer;