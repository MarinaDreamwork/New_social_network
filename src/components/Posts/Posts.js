import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import NewPostContainer from './NewPost/NewPostContainer';


const Posts = (props) => {

  return (
        <div>
            <NewPostContainer />
            <MyPostsContainer />
        </div>  
  )
}

export default Posts;