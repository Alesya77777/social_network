import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className="content">
      <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
      <div>avatar</div>
      <div>My post</div>
      <div className={classes.posts}>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
      </div>
    </div>
  )
};

export default Profile;