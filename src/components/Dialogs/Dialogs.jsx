import DialogItem from './DailogItem/DialogItem';
import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';







const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map((d, index) => <DialogItem name={d.name} key={d.id} id={d.id} src={d.photo} />);
  const messagesElements = props.messages.map((m, index) => <Message message={m.message} key={m.id} />)

  
  const onSentMessage = () => {
    props.sentMessage();
  };

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  };


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea onChange={onMessageChange}  value={props.newMessageText} ></textarea>
        <button onClick={onSentMessage}> Добавить сообщение</button>
      </div>
    </div>
  )

};

export default Dialogs;
