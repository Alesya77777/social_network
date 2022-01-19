import React from 'react';
import classes from './Users.module.css';
import userImage from '../../assets/image/user.jpg';
import { NavLink } from 'react-router-dom';


const User = ({user, unfollow, isFollowingProgress, follow }) => {

  return (
    <div key={user.id} className={classes.wrapper}>
      <div className={classes.user}>
        <NavLink to={'/profile/' + user.id} >
          <img src={user.photos.small != null ? user.photos.small : userImage} alt="" />
        </NavLink>
        {user.followed
          ? <button disabled={isFollowingProgress.some(id => id === user.id)}
            onClick={() => {
              unfollow(user.id)
            }} type="button">Unfollow</button>
          : <button disabled={isFollowingProgress.some(id => id === user.id)}
            onClick={() => {
              follow(user.id)
            }} type="button">Follow</button>}
      </div>
      <div className={classes.userInfo}>
        <div className={classes.info}>
          <div className={classes.name}>{user.name}</div>
          <div className={classes.name}>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div class={classes.address}>
          <div>{"user.location.country"},</div>
          <div>{"user.location.city"}</div>
        </div>
      </div>
    </div>
  )
};

export default User;