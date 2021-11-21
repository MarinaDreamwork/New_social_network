import React from 'react';
import MyContext from '../../MyContext';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

  return (
    <MyContext.Consumer> 
      { store => {
        let state = store.getState();

        let onSendMessageClick = () => {
        store.dispatch(addNewMessageActionCreator());
        };

        let onNewMessageChange = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return <Dialogs state={state.dialogsPage} sendMessageClick={onSendMessageClick} newMessageChange={onNewMessageChange}/>
      } 
    }
    </MyContext.Consumer>
  )
}


export default DialogsContainer;