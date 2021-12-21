import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import userAvatar from '../../../src/images/userAvatar.png';


const Users = (props) => {

  let getUsers = () => {
    if(props.users.length === 0) {   
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        props.setUsers(response.data);
      });
    }
  }

  return (
   
    <div>
      <button onClick={getUsers}>Show me more users</button>
      {
        props.users.map(u=> <div key={u.id}>
          
          <div>
            <img alt='avatar' src={u.avatar != null ? u.avatar: userAvatar} className={s.avatar} />
          </div>
          <div>
            {u.followed 
            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>       
            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
          <div>
          {
          u.name
          }
          </div>

        </div>
        )
      }
    </div>
    
  );
};

export default Users;