import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, } from "../../Redux/profileReducer";
import Profile from "./Profile";

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent {...props} params={params} />
  );
};


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
  };


  render() {


    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
};


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


const mapStateToProps = (state) => {
  return (
    {
      profile: state.profilePage.profile,
    }
  )
};

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapStateToProps, {
  getUserProfile: getUserProfile,
})(WithUrlDataContainerComponent);

