import DialogItem from './DailogItem/DialogItem';
import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} src={d.photo} />);
  const messagesElements = props.messages.map((m) => <Message message={m.message} key={m.id} />)


  const addNewMessage = (value) => {
    props.sentMessage(value.newMessageText);
  };


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )

};


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newMessageText"} placeholder={"Add message"} />
      <button > Добавить сообщение</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
