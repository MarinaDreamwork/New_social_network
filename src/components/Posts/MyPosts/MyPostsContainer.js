import React from 'react';
import MyContext from '../../../MyContext';
import MyPosts from './MyPosts';
import classes from './MyPosts.module.css';
import PostInfo from './PostInfo/PostInfo';


const MyPostsContainer = () => {
  return (
    <MyContext.Consumer> 
    { store => {
      return <MyPosts store={store.getState().postsPage.postsData}/>
      }
    }
    </MyContext.Consumer>
  )  
}

export default MyPostsContainer;