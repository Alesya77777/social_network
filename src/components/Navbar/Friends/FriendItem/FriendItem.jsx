import classes from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.src} alt=""></img>
      <span>{props.name}</span>
    </div>
  )
};



export default FriendItem;