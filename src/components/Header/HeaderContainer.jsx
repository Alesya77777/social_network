import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logouts } from '../../Redux/auth';
import Header from './Header';


class HeaderContainer extends React.Component {
  


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
  connect(mapStateToProps, {
  logouts:logouts})
)(HeaderContainer);