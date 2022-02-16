import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <img src={props.src} alt="" />
      <NavLink className={(state) => {console.log(state)}}
      to={path}>{props.name} </NavLink>
    </div>
  )
};

export default DialogItem;
