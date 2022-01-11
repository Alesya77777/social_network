import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {getUserProfile,} from "../../Redux/profileReducer";
import Profile from "./Profile";

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent {...props} params={params} />
  );
};


class ProfileContainer extends React.Component {

  componentDidMount() {
debugger;
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
debugger;
    this.props.getUserProfile(userId);
  };


  render() {
    if(!this.props.auth) { return <Navigate to="/login" />}

    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
};




const mapStateToProps = (state) => {
  return (
    {
      profile: state.profilePage.profile,
      auth: state.auth.isAuth,
    }
  )
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, {
  getUserProfile: getUserProfile ,
})(WithUrlDataContainerComponent);

