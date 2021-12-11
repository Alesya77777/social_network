import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCount, setUsersActionCreator, unfollowActionCreator } from "../../Redux/usersReducer";
import Users from "./Users";


const mapStateToProps = (state) => {
  return (
    {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      sizePage: state.usersPage.sizePage,
      currentPage: state.usersPage.currentPage,
    }
  )
};
const mapDispatchToProps = (dispatch) => {
  return (
    {
      follow: (userId) => { dispatch(followActionCreator(userId)) },
      unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
      setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
      setCurrentPage: (pageNumber) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
      setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCount(totalCount)) }
    }
  )
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

