import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.state.messagesData.map(message => <Message text={message.text} src={message.img}/>);

  let newMessageText = props.state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessageClick();
  };

  let onNewMessageChange = (event) => {
    let messageText = event.target.value;
    props.newMessageChange(messageText);
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