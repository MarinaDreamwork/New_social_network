import React from "react";
import classes from './UserStatus.module.css';

const UserStatus = (props) => {
  return (
        <div className={classes.userStatus}>
          <p><i class="fas fa-user-clock"></i> {props.status}</p>
        </div>
  )
}

export default UserStatus;