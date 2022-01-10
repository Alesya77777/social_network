import React from 'react';
import { connect } from 'react-redux';
import { auth, setAuthUserData } from '../../Redux/auth';
import Header from './Header';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth();

  }


  render() {
    return (
      <Header {...this.props} />
    )
  };
};

const mapStateToProps = (state) => {
  return (
    {
      auth: state.auth.isAuth,
      login: state.auth.login,
      photo: state.auth.photo,
    }
  )

};



export default connect(mapStateToProps, { setAuthUserData, auth })(HeaderContainer);