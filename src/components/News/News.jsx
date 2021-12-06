import React from 'react';
import AddNews from './AddNews/AddNews';
import classes from './News.module.css';

const News = (props) => {

  const newsElements = props.news.map((n) => <AddNews src={n.photo} message={n.message} />);

  const addNews = () => {
    props.addNews();
  }

  const onNewsChange = (e) => {

    const text = e.target.value;
    props.updateNewNewsText(text);
  }

  return (
    <div>
      <div className={classes.wrapper}>
        {newsElements}
      </div>
      <div className={classes.newNews} >
        <textarea onChange={onNewsChange}  value={props.newNewsText} ></textarea>
        <button onClick={addNews} >Добавить новость</button>
      </div>
    </div>
  )
};

export default News;