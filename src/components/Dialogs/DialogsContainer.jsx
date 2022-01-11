
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return (
    {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      auth: state.auth.isAuth,
    }
  )
};

let mapDispatchToProps = (dispatch) => {
  return (
    {
      updateNewMessageText: (text) => {
        const action = updateNewMessageTextActionCreator(text);
        dispatch(action);
      },
      sentMessage: () => { dispatch(addMessageActionCreator()) }
    }
  )
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
