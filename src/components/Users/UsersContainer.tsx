import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../Redux/reduxStore";
import { getCurrentPage, getIsFetching, getIsFollowingProgress, getSizePage, getTotalUsersCount, getUsers } from "../../Redux/userSelector";
import { follow, requestUsers, unfollow } from "../../Redux/usersReducer";
import { UsersType } from "../../types/types";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

type MapStatePropsType = {
  currentPage: number,
  sizePage: number,
  //pageNumber: number,
  isFetching: boolean,
  totalUsersCount: number,
  isFollowingProgress: Array<number>,
  users: Array<UsersType>,
};

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, sizePage: number) => void,
  follow: (userId:number) => void,
  unfollow: (userId:number) => void
};


type OwnPropsType = {
  pageTitle: string
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.sizePage);
  };


  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.sizePage);
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
        isFollowingProgress={this.props.isFollowingProgress}
      />
    </>

    )
  }


};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return (
    {
      users: getUsers(state),
      totalUsersCount: getTotalUsersCount(state),
      sizePage: getSizePage(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isFollowingProgress: getIsFollowingProgress(state),
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


export default compose(
  //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {
  follow,
  unfollow,
  requestUsers,
}),
  withAuthRedirect)(UsersContainer)
