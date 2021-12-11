import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/image/user.jpg';


class Users extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`)
      .then(response => { this.props.setUsers(response.data.items) });
  };

  render() {

    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.sizePage);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
      page.push(i);
    }




    return (
      <div>
        <div className={classes.nagination}>
          {
            page.map((p) => (<button className={this.props.currentPage === p && classes.selectedPage} type="button"
              onClick={() => this.onPageChanged(p)} >{p}</button>))
          }
        </div>
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