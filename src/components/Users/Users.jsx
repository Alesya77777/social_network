import React from 'react';
import classes from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';



const Users = (props) => {

  return (
    <div>
      <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount} sizePage={props.sizePage} />
      {props.users.map((u) =>
        <User key={u.id} user={u} isFollowingProgress={props.isFollowingProgress}
          follow={props.follow} unfollow={props.unfollow}
        />)}
      <button className={classes.show}>Show more</button>
    </div>
  )

};

export default Users;