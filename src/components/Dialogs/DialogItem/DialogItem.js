import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
debugger;
  return (
     <div className={classes.users}>
         <NavLink to={'/dialogs/' + props.id}>
          </NavLink>
          {props.name}
     </div>
  )
}

export default DialogItem;