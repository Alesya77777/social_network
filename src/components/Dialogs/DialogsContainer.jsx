
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';






const DialogsContainer = () => {




  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const onSentMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (body) => {
          const action = updateNewMessageTextActionCreator(body);
          store.dispatch(action);
        };
        return (<Dialogs sentMessage={onSentMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />)
      }}
    </StoreContext.Consumer>
  )

};

export default DialogsContainer;
