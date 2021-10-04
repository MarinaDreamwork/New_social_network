import React from 'react';
import classes from'./Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
        <div class={`${classes.mainContentInner} ${classes.dropShadow}`}>
        
              <nav className={`${classes.contentNav} ${classes.nav}`}>
                  <div>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                  </div>
                  <div>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                  </div>
                  <div>
                    <NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink>
                  </div>
                  <div>
                    <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
                  </div>
                  <div>
                    <NavLink to='/groups' activeClassName={classes.active}>Groups</NavLink>
                  </div>
                  <div>
                    <NavLink to='/forum' activeClassName={classes.active}>Forum</NavLink>
                  </div>
                  <div>
                    <NavLink to='/media' activeClassName={classes.active}>Media</NavLink>
                  </div>
              </nav>
          </div>
  )
}

export default Navbar;
