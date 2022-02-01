import MyPostsContainer from './MyPosts/MyPostsContainer';
//import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
        updateUserStatus={props.updateUserStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} 
        saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  )
};

export default Profile;