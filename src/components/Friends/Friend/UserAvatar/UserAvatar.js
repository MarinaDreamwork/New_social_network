import React from "react";
import classes from './UserAvatar.module.css';


const UserAvatar = (props) => {
  return (
        <div className={classes.userAvatar}>
          <img src={props.src} />
        </div>
  )
}

export default UserAvatar;