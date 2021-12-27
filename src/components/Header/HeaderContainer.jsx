import React from 'react';
import { connect } from 'react-redux';
import { authAPI} from '../../api/api';
import { setAuthUserData } from '../../Redux/auth';
import Header from './Header';


class HeaderContainer extends React.Component {
  componentDidMount() {

    authAPI.getDataMe()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          this.props.setAuthUserData(id, login, email);
   
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