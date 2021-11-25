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

  const dialogs = [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Dmitry" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Viktor" },
  ];

  const messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi!" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I'm fine, thanks. And you?" },
  ];

  const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  const messagesElements = messages.map(m => <Message message={m.message} />)


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}

      </div>
    </div>
  )
};

export default Dialogs;
