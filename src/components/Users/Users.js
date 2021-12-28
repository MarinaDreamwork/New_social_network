import React from "react";
import s from './Users.module.css';
import userAvatar from '../../../src/images/userAvatar.png';
import { NavLink } from "react-router-dom";



const Users = (props) => {
  
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

      return(
    <div>
      {
        pages.map(page => <span className={props.currentPage === page && s.selectedPage} onClick={(e) => {props.onPageChange(page)}}>{page}</span>)
      }
      {
        props.users.map(u=> <div key={u.id}>
          <div>
            <NavLink to={`profile/` + `${u.id}`}>
            <img alt='avatar' src={u.avatar != null ? u.avatar: userAvatar} className={s.avatar}/>
            </NavLink>
          </div>
          <div>
            {
            u.followed 
            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>       
            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
            }
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

export default Users;