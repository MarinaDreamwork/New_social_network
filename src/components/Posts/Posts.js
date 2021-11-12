import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';


const Posts = (props) => {
debugger;
  return (
        <div>
            <NewPost dispatch={props.dispatch} store={props.store} newPostText={props.newPostText}/>
            <MyPosts postsData={props.store.postsPage.postsData} />
        </div>  
  )
}

export default Posts;