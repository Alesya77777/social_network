import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { setUserProfile } from "../../Redux/profileReducer";
import Profile from "./Profile";

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent {...props} params={params} />
  );
};


class ProfileContainer extends React.Component {


  componentDidMount() {

    console.log(this.props);
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {

        this.props.setUserProfile(response.data);
      })
  };


  render() {

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
    }
  )
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataContainerComponent);

