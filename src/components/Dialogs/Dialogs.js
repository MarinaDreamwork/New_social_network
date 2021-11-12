import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import NewPost from '../Posts/NewPost/NewPost';


const Dialogs = (props) => {
  debugger;

let dialogsElements = props.store.dialogsData
.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messagesElements = props.store.messagesData.map(message => <Message text={message.text} src={message.img}/>);

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
          <NewPost store={props.store} dispatch={props.dispatch}/>
        </div>
      </div>
    </div>
  )
}


export default Dialogs;