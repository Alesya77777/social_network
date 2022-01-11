import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" /> */}
      <div className={classes.discriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={'Hello'} />
        <div className={classes.info}>
          <span className={classes.fullname}>{props.profile.fullName}</span>
          <div> {
            (props.profile.lookingForAJob) ? (
              <div>
                <span>Ищу работу</span>

              </div>
            ) : <span>Не ищу работу</span>}
            {

              (props.profile.lookingForAJobDescription) ? (
                <div> Описание работы:
                  <span>{`  `}  {props.profile.aboutMe}</span>
                </div>
              ) : <span>Не ищу работу</span>
            }
          </div>
          <div>{(props.profile.aboutMe) ?
            <span className={classes.personDescription}>Обо мне:
              <span> {props.profile.aboutMe}
              </span>
            </span> : <></>}
          </div>
          <div>
            <h3>Социальные сети</h3>
            <div className={classes.wrapper}>
              {props.profile.contacts.facebook ? <a className={classes.facebook} href={props.profile.contacts.facebook}> </a> : <></>}
              {props.profile.contacts.instagram ? <a className={classes.instagram} href={props.profile.contacts.instagram}> </a> : <></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;