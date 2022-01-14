import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { login} from "../../Redux/auth";
import { required } from "../../units/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import classes from "./../Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"email"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={"password"} name={"password"} placeholder={"Пароль"}
          validate={[required]} component={Input} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Запомнить меня
      </div>
      {props.error && <div className={classes.formSummaryError}> {props.error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);



const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps,
  {
    login: login,
  })(Login);