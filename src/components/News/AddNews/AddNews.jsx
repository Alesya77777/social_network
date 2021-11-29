import classes from './AddNews.module.css';

const AddNews = (props) => {



 
  return (
    <div  >
      <div className={classes.news} >
        <img src={props.src} alt="" />
        <div>{props.message}
        </div>
      </div>
    </div>
  )
};

export default AddNews;