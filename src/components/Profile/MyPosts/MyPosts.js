import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={classes.postsInfo}>
        <Post message='POST 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='15' time='08:30'/>
        <Post message='POST 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='20' time='12:48'/>
        <Post message='POST 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.' count='9' time='16:12'/>
    </div>
  )
}

export default MyPosts;