
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../Redux/dialogsReducer';
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
      sentMessage: (newMessageText) => { dispatch(addMessageActionCreator(newMessageText)) }
    }
  )
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
