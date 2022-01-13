import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserData, logouts } from '../../Redux/auth';
import Header from './Header';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();

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

    }
  )

};



export default compose(
  connect(mapStateToProps, { getAuthUserData: getAuthUserData,
  logouts:logouts})
)(HeaderContainer);