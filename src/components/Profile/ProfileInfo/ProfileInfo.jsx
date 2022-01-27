import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import userImage from '../../../assets/image/user.jpg';
import { useState } from 'react';




const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  };


  return (
    <div>
      {/* <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" /> */}
      <div className={classes.discriptionBlock}>
        <img src={props.profile.photos.large || userImage} alt="" />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus} />
        { editMode 
        ? <ProfileDataForm profile={props.profile} /> 
        :<ProfileData profile={props.profile} isOwner={props.isOwner}  goToEditMode={()=>{setEditMode(true)}}/>}


        <div>
          <h3>Социальные сети</h3>
          <div className={classes.wrapper}>
            {props.profile.contacts.facebook ? <a className={classes.facebook} href={props.profile.contacts.facebook}> </a> : <></>}
            {props.profile.contacts.instagram ? <a className={classes.instagram} href={props.profile.contacts.instagram}> </a> : <></>}
          </div>
        </div>

      </div>
    </div>

  )
};

const ProfileData = (props) => {
  return (
    <div className={classes.info}>
      {props.isOwner && <div><button onClick={props.goToEditMode}>Редактировать</button></div>}
      <div className={classes.fullname}>
        <b>{props.profile.fullName} </b>
      </div>
      <div>
        <b>Ищу работу:</b>  {props.profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      {props.profile.lookingForAJobDescription &&
        <div>
          <b> Описание работы:</b> {props.profile.aboutMe}
        </div>
      }
      <div>
        <b>Обо мне:</b>  {props.profile.aboutMe}
      </div>
      <div>
        <b>Контакты:</b>  {
          Object.keys(props.profile.contacts).map((key) => {
            debugger;
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
          })
        }
      </div>
    </div>
  )
}

const ProfileDataForm = (props) => {
  return <div>Form</div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <>
      {contactValue ? <div className={classes.contact}>
        <b>{contactTitle}:</b> {contactValue}
      </div> : null}
    </>
  )
};



export default ProfileInfo;