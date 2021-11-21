import React from 'react';
import classes from './MyPosts.module.css';
import PostInfo from './PostInfo/PostInfo';


const MyPosts = (props) => {
  
    let postsElements = props.store.map(post => <PostInfo message = {post.message} count={post.count} time={post.time}/>);

      return (
        <div className={classes.postsInfo}>
          {postsElements}
        </div>
      )
}

export default MyPosts;