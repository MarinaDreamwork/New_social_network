import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPostContainer from './NewPost/NewPostContainer';


const Posts = (props) => {

  return (
        <div>
            <NewPostContainer store={props.store}/>
            <MyPosts postsData={props.store.getState().postsPage.postsData} />
        </div>  
  )
}

export default Posts;