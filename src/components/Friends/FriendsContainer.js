import React from "react";
import MyContext from "../../MyContext";
import Friends from "./Friends";

const FriendsContainer = () => {
debugger;
  return (
    <MyContext.Consumer> 
      { store => {
         return <Friends store={store.getState().friendsPage}/>
        }
      }
    </MyContext.Consumer>
  )
}

export default FriendsContainer;