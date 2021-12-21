import { connect } from 'react-redux';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageClick: () => {dispatch(addNewMessageActionCreator())},
    newMessageChange: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;