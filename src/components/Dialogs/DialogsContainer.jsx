
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';






const DialogsContainer = (props) => {
debugger;
  const state = props.store.getState();
 

  const onSentMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (body) => {
    const action = updateNewMessageTextActionCreator(body);
    props.store.dispatch(action);
  };


  return (
    <Dialogs sentMessage={onSentMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />
  )

};

export default DialogsContainer;
