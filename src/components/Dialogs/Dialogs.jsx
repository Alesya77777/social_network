import DialogItem from './DailogItem/DialogItem';
import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {





  const dialogsElements = props.state.dialogs.map((d, index) => <DialogItem name={d.name} key={index} id={d.id} src={d.photo} />);
  const messagesElements = props.state.messages.map((m, index) => <Message message={m.message} key={index} />)

  const newMessage = React.createRef();
  const addMessage = () => {
    const text = newMessage.current.value;
    alert(text);
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
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}> Добавить сообщение</button>
      </div>
    </div>
  )
};

export default Dialogs;
