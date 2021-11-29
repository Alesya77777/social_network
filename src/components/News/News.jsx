import React from 'react';
import AddNews from './AddNews/AddNews';
import classes from './News.module.css';

const News = (props) => {

  const newsElements = props.newsPage.news.map((n) => <AddNews src={n.photo} message={n.message} />);

  const newNewsElement = React.createRef();
  const addNews = () => {
    props.addNews()
  }

  const onNewsChange = () => {
  
    const text = newNewsElement.current.value;
    props.updateNewNewsText(text);
  }

  return (
    <div>
      <div className={classes.wrapper}>
        {newsElements}
      </div>
      <div className={classes.newNews} >
        <textarea onChange={onNewsChange} ref={newNewsElement} value={props.newsPage.newNewsText} ></textarea>
        <button onClick={addNews} >Добавить новость</button>
      </div>

    </div>
  )
};

export default News;