import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/image/user.jpg';


class Users extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => { this.props.setUsers(response.data.items) });
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) =>
          <div key={u.id} className={classes.wrapper}>
            <div className={classes.user}>
              <img src={u.photos.small != null ? u.photos.small : userImage} alt="" />
              {u.followed ?
                <button onClick={() => { this.props.unfollow(u.id) }} type="button">Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id) }} type="button">Follow</button>}
            </div>
            <div className={classes.userInfo}>
              <div className={classes.info}>
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
  }


};

export default Users;