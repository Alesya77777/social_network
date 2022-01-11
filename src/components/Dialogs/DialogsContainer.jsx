
import { connect } from 'react-redux';
import { compose } from 'redux';
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
