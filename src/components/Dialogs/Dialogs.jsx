import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
};


const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
};


const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        <DialogItem name="Andrew" id="1" />
        <DialogItem name="Dmitry" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Valera" id="5" />
        <DialogItem name="Viktor" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello" />
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="I'm fine, thanks. And you?" />
      </div>
    </div>
  )
};

export default Dialogs;
