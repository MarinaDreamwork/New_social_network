import React from 'react';
import classes from './../Dialogs.module.css';


const Message = (props) => {
  return (
        <div className={classes.dialog}>
          <img className={classes.avatar} src={props.src} alt='avatar'/>
          {props.text}
        </div>
    
  )
}


export default Message;