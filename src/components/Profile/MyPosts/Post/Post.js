import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
   <div className={classes.postInfo}> 
        <div className={classes.postHeader}>
            <img className={classes.logo} src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg" alt="avatar"/> 
            <p><i class="far fa-thumbs-up"></i> {props.count}</p>  
            
        </div>
        <div className={classes.mainPostInfo}>
            <p><strong>Eileen K. Ruiz</strong> posted an update</p>
            <p className={classes.time}>Yesterday {props.time}</p>
            <p className={classes.text}>{props.message}</p>
        </div>
    </div>
  )
}

export default Post;