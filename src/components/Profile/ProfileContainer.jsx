import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, requestUserstatus, updateUserStatus, } from "../../Redux/profileReducer";
import Profile from "./Profile";

export const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent {...props} params={params} />
  );
};


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId);
    this.props.requestUserstatus(userId);
  };


  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile}
          status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
      </>
    )
  }
};



const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});



export default compose(
  connect(mapStateToProps, {
    getUserProfile: getUserProfile,
    requestUserstatus: requestUserstatus,
    updateUserStatus: updateUserStatus,
  }),
  withRouter,
   withAuthRedirect
)(ProfileContainer)

