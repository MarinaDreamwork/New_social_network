import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from'./Navbar.module.css';

const Navbar = () => {
  return (
    <section class={classes.pageWrapper}>
            <div class={classes.container}>
                <div class={classes.row}>
          <div class={classes.mainContent}>
            <div class={`${classes.mainContentInner} ${classes.dropShadow}`}>

              <nav className={classes.contentNav}>
                <ul class={classes.nav}>
                  <li class={classes.active}><a href="#">Activity</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Friends</a></li>
                  <li><a href="#">Groups</a></li>
                  <li><a href="#">Forum</a></li>
                  <li><a href="#">Media</a></li>
                </ul>
              </nav>

            </div>
          </div>

        </div>
      </div>
      <MyPosts />
    </section>
  )
}

export default Navbar;