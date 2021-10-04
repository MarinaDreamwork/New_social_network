import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';


const Posts = (props) => {
debugger;
  return (
        <div>
            <NewPost addPost={props.addPost} newPostText={props.postsPage.newPostText} updateNewPostText={props.updateNewPostText}/>
            <MyPosts postsData={props.postsPage.postsData} />
        </div>  
  )
}

export default Posts;