import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth,
});



export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
      
        if (!props.auth) { return <Navigate to="/login" /> }
        return (<Component {...props} />)
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent
};

