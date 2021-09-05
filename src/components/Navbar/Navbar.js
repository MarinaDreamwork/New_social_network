import React from 'react';
import classes from'./Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
        <div class={`${classes.mainContentInner} ${classes.dropShadow}`}>
        
              <nav className={`${classes.contentNav} ${classes.nav}`}>
                  <div>
                    <NavLink to="/profile">Profile</NavLink>
                  </div>
                  <div>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                  </div>
                  <div>
                    <a href='/friends'>Friends</a>
                  </div>
                  <div>
                    <a href='/groups'>Groups</a>
                  </div>
                  <div>
                    <a href='/forum'>Forum</a>
                  </div>
                  <div>
                    <a href='/media'>Media</a>
                  </div>
              </nav>
          </div>
  )
}

export default Navbar;
