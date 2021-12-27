import React from 'react';
import classes from './Users.module.css';
import userImage from '../../assets/image/user.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Users = (props) => {

  const pageCount = Math.ceil(props.totalUsersCount / props.sizePage);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }

  return (
    <div>
      <div className={classes.nagination}>
        {
          page.map((p) => (<button className={props.currentPage === p && classes.selectedPage} type="button"
            onClick={() => props.onPageChanged(p)} >{p}</button>))
        }
      </div>
      {props.users.map((u) =>
        <div key={u.id} className={classes.wrapper}>
          <div className={classes.user}>
            <NavLink to={'/profile/' + u.id} >
              <img src={u.photos.small != null ? u.photos.small : userImage} alt="" />
            </NavLink>
            {u.followed
              ? <button onClick={() => {

                axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {
                      withCredentials: true,
                      headers: { "API-KEY": "b6119ca0-63a3-4295-9bc1-e77b4ad61b01" }
                    })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  })


              }} type="button">Unfollow</button>
              : <button onClick={() => {

                axios
                  .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: { "API-KEY": "b6119ca0-63a3-4295-9bc1-e77b4ad61b01" }
                    })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  })

              }} type="button">Follow</button>}
          </div>
          <div className={classes.userInfo}>
            <div className={classes.info}>
              <div className={classes.name}>{u.name}</div>
              <div className={classes.name}>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div class={classes.address}>
              <div>{"u.location.country"},</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>)}
      <button className={classes.show}>Show more</button>
    </div>
  )

};

export default Users;