import React from 'react';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  debugger;

let localState = props.store.getState().dialogsPage;

let onSendMessageClick = () => {
  props.store.dispatch(addNewMessageActionCreator());
};

let onNewMessageChange = (text) => {
  props.store.dispatch(updateNewMessageTextActionCreator(text));
};

  return (
    <Dialogs state={localState} sendMessageClick={onSendMessageClick} newMessageChange={onNewMessageChange}/>
  )
}


export default DialogsContainer;