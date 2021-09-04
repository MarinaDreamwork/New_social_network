import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from'./Navbar.module.css';

const Navbar = () => {
  return (
            <div class={`${classes.mainContentInner} ${classes.dropShadow}`}>

              <nav className={classes.contentNav}>
                <ul class={classes.nav}>
                  <li class={classes.active}><a href="/profile">Profile</a></li>
                  <li><a href='/dialogs'>Dialogs</a></li>
                  <li><a href="/friends">Friends</a></li>
                  <li><a href="/groups">Groups</a></li>
                  <li><a href="/forum">Forum</a></li>
                  <li><a href="/media">Media</a></li>
                </ul>
              </nav>

            </div>
  )
}

export default Navbar;