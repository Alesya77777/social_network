import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";


const ProfileDataForm = (props) => {

  return (<form onSubmit={props.handleSubmit}>

    <div >
      <b>Полное имя: </b> {createField("Full name", "fullName", [], Input, null, null)}
    </div>
    <div>
      <b>Ищу работу:</b>  {createField("", "lookingForAJob", [], Input, { type: "checkbox" }, null)}
    </div>
    <div>
      <b> Описание работы:</b>{createField("My professional skills", "lookingForAJobDescription", [], Textarea, null, null)}
    </div>
    <div>
      <b>Обо мне:</b> {createField("About me", "aboutMe", [], Textarea, null, null)}
    </div>


    {/* <div>
    <b>Контакты:</b>  {
      Object.keys(props.profile.contacts).map((key) => {
        debugger;
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
      })
    }
  </div> */}

    <div><button>Сохранить</button></div>
  </form>)
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;