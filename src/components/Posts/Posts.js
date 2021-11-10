import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';


const Posts = (props) => {
debugger;
  return (
        <div>
            <NewPost addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} store={props.store}/>
            <MyPosts postsData={props.store.postsPage.postsData} />
        </div>  
  )
}

export default Posts;