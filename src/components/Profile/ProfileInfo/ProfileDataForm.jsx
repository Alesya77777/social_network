import { reduxForm } from "redux-form";
import { required } from "../../../units/validators/validators";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import classes from "../../Common/FormsControls/FormsControls.module.css";


const ProfileDataForm = (props) => {

  return (<form onSubmit={props.handleSubmit}>
    {props.error && <div className={classes.formSummaryError}> {props.error}</div>}
    <div >
      <b>Полное имя: </b> {createField("Full name", "fullName", [required], Input, null, null)}
    </div>
    <div>
      <b>Ищу работу:</b>  {createField("", "lookingForAJob", [required], Input, { type: "checkbox" }, null)}
    </div>
    <div>
      <b> Описание работы:</b>{createField("My professional skills", "lookingForAJobDescription", [required], Textarea, null, null)}
    </div>
    <div>
      <b>Обо мне:</b> {createField("About me", "aboutMe", [required], Textarea, null, null)}
    </div>


    <div>
      <b>Контакты:</b>  {
        Object.keys(props.profile.contacts).map((key) => {
          return <div   key={key} >  
            <b>{key}</b>{createField(key, "contacts." + key, [], Input)}
          </div>
        })
      }
    </div>

    <div><button>Сохранить</button></div>
  </form>)
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;