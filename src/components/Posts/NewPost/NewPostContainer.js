import React from 'react';
import MyContext from '../../../MyContext';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/postsReducer';
import NewPost from './NewPost';
  
const NewPostContainer = () => {
  return (
    <MyContext.Consumer> 
      { store => {
        let state = store.getState().postsPage;

        let addNewPost = () => {
          store.dispatch(addNewPostActionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
          return <NewPost addPost={addNewPost} updatePost={onPostChange} state={state}/>
      }
    }
    </MyContext.Consumer>
  )
}

export default NewPostContainer;