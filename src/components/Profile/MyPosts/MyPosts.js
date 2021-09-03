import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postsInfo}>
        <div class={classes.filterLinks}>
            <ul class={classes.nav}>
                <li class={classes.active}><a href="#">Personal</a></li>
                <li><a href="#">Mentions</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Groups</a></li>
            </ul>
        </div>
        <Post message='POST 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='15'/>
        <Post message='POST 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='20'/>
        <Post message='POST 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='9'/>
    </div>
  )
}

export default MyPosts;