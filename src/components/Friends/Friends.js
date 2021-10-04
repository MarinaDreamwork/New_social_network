import React from "react";
import Friend from "./Friend/Friend";
import classes from './Friends.module.css';



const Friends = (props) => {

  let friendsElements = props.state.map(item => <Friend src={item.img} name={item.name} status={item.activity}/>);

  return (
  <div className={classes.container}>
    <div className={`${classes.row} ${classes.rowCols4}`}>
      <div className={classes.col}>
        {friendsElements}
      </div>
    </div>
  </div>
  )
}

export default Friends;