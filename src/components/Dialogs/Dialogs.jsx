import DialogItem from './DailogItem/DialogItem';
import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

  const dialogsElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem name={d.name} key={index} id={d.id} src={d.photo} />);
  const messagesElements = props.dialogsPage.messages.map((m, index) => <Message message={m.message} key={index} />)

  const newMessage = React.createRef();
  const addMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  };

  const onMessageChange = () => {

    const text = newMessage.current.value;
    const action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
    props.dispatch(action);
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
        <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.newMessageText} ></textarea>
        <button onClick={addMessage}> Добавить сообщение</button>
      </div>
    </div>
  )

};

export default Dialogs;
