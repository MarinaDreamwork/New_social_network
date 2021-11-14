import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';



const Dialogs = (props) => {
debugger;

let dialogsElements = props.store.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

let messagesElements = props.store.messagesData.map(message => <Message text={message.text} src={message.img}/>);

let newMessageText = props.store.newMessageText;

let onSendMessageClick = () => {
  debugger;
  props.dispatch(addNewMessageActionCreator());
};

let onNewMessageChange = (event) => {
  debugger;
  let messageText = event.target.value;
  props.dispatch(updateNewMessageTextActionCreator(messageText));
};

  return (
    <div className={classes.dialogs}>

      <div className={classes.users}>
        {dialogsElements}
      </div>
      <div className={classes.dialogItems}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea  placeholder='Enter your message' 
                       value={newMessageText}
                       onChange={onNewMessageChange}>
            </textarea>
          </div>
          <div>
            <button onClick={ onSendMessageClick }>
                Send
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}


export default Dialogs;