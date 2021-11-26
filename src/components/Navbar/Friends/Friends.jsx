import FriendItem from './FriendItem/FriendItem';
import classes from './Friends.module.css';




const Friends = (props) => {
  const friendsElements = props.friends.friends.map((f, index) => <FriendItem name={f.name} src={f.photo} key={index} id={f.id} />);
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Friends</h3>
      <div className={classes.list}>
        {friendsElements}
      </div>
    </div>
  )
};

export default Friends;