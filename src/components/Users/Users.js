import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import userAvatar from '../../../src/images/userAvatar.png';


class Users extends React.Component {
    constructor(props) {
      super(props);

      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.props.setUsers(response.data);
      });
    }


    render = () => {
      return(
    <div>
      {
        this.props.users.map(u=> <div key={u.id}>
          <div>
            <img alt='avatar' src={u.avatar != null ? u.avatar: userAvatar} className={s.avatar} />
          </div>
          <div>
            {u.followed 
            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>       
            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
          </div>
          <div>
          {
          u.name
          }
          </div>
        </div>
        )
      }
    </div>)
  }  
};

export default Users;