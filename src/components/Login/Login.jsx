import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../units/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";


const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={"password"} name={"password"} placeholder={"Пароль"} 
        validate={[required]} component={Input} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Запомнить меня
      </div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);



const Login = (props) => {
  const onSubmit = (formData) => {  console.log(formData); };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

export default Login;