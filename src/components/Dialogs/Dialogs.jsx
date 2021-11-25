import DialogItem from './DailogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

 

 

  const dialogsElements = props.dialogs.map((d, index) => <DialogItem name={d.name} key={index} id={d.id} />);
  const messagesElements = props.messages.map((m, index) => <Message message={m.message} key={index} />)


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
