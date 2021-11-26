import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <img src={props.src} alt=""/>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
};

export default DialogItem;
