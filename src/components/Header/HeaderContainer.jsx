import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth';
import Header from './Header';


class HeaderContainer extends React.Component {
  componentDidMount() {
let d;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
          d= id;
        }
      });
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



export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);