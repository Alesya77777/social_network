
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return (
    {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
