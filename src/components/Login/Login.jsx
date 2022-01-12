import { Field } from "redux-form";
import { reduxForm } from "redux-form";


const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field type={"password"} name={"password"} placeholder={"Пароль"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить меня
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