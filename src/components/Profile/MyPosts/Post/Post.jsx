import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://avochka.ru/img/kartinka/1/lis_zveropolice.jpg" alt="" />
      {props.message}
      <div>
        <span>Like {props.likes} </span>
      </div>
    </div>
  )
};

export default Post;