import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
      <div className={classes.discriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <div className={classes.info}>
          <span className={classes.fullname}>{props.profile.fullName}</span>
          <div> {
            (props.profile.lookingForAJob) ? (
              <div>
                <span>Ищу работу</span>

              </div>
            ) :   <span>Не ищу работу</span>}
              {

              (props.profile.lookingForAJobDescription) ? (
              <div> Описание работы: 
                <span>{`  `}  {props.profile.aboutMe}</span>
              </div>
            ) :  <span>Не ищу работу</span>
              }
          </div>
          <div>{(props.profile.aboutMe) ?
            <span className={classes.personDescription}>Обо мне:
              <span> {props.profile.aboutMe}
              </span>
            </span> :<></>}
          </div>

        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;