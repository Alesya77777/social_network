import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
      <div className={classes.discriptionBlock}>avatar + des</div>
    </div>
  )
};

export default ProfileInfo;