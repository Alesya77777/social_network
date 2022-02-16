import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { login } from "../../Redux/auth";
import { required } from "../../units/validators/validators";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import classes from "./../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

  return (
    <form onSubmit={handleSubmit}>


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
      {captchaUrl && <img src={captchaUrl} alt=""/>}
      {captchaUrl && (createField("Symbols from image", "captcha", [required], Input))}

      {error && <div className={classes.formSummaryError}> {error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);



const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
};


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps,
  {
    login: login,
  })(Login);