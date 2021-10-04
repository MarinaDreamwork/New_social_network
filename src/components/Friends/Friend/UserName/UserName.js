import React from "react";
import classes from './UserName.module.css';

const UserName = (props) => {
  return (
        <div className={classes.userName}>
          <p>{props.name}</p>
        </div>
  )
}

export default UserName;