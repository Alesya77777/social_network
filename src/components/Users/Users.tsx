import React from 'react';
import classes from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import { UsersType } from '../../types/types';


type PropsType = {
  totalUsersCount: number,
  sizePage: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  portionSize?: number,
  isFollowingProgress: Array<number>,
  users: Array<UsersType>,
  follow: () => void,
  unfollow: () => void,
}


const Users: React.FC<PropsType> = ({ currentPage, onPageChanged, sizePage, totalUsersCount, isFollowingProgress, users, follow, unfollow }) => {

  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount} pageSize={sizePage} />
      {users.map((u) =>
      <User key={u.id} user={u} isFollowingProgress={isFollowingProgress}
        follow={follow} unfollow={unfollow}
      />)}
      <button className={classes.show}>Show more</button>
    </div>
  )

};

export default Users;