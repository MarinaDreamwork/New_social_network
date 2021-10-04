import React from "react";
import classes from './Friend.module.css';
import UserAvatar from "./UserAvatar/UserAvatar";
import UserName from "./UserName/UserName";
import UserStatus from "./UserStatus/UserStatus";

const Friend = (props) => {
  return (
      <div className={classes.userProfile}>
        <UserAvatar src={props.src} />
        <UserName name={props.name}/>
        <UserStatus status={props.status}/>
      </div>
  )
}

export default Friend;