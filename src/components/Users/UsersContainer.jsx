import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.sizePage)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount)
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.sizePage)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);

      });
  };

  render() {

    return (<>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        sizePage={this.props.sizePage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
      />
    </>

    )
  }


};


const mapStateToProps = (state) => {
  return (
    {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      sizePage: state.usersPage.sizePage,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
    }
  )
};

// const mapDispatchToProps = (dispatch) => {
//   return (
//     {
//       follow: (userId) => { dispatch(followActionCreator(userId)) },
//       unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
//       setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
//       setCurrentPage: (pageNumber) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
//       setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCount(totalCount)) },
//       toggleIsFetching: (flag) => { dispatch(toggleIsFetching(flag)) }
//     }
//   )
// };


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);

