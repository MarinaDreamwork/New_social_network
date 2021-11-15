import React from 'react';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/postsReducer';
import NewPost from './NewPost';
  
const NewPostContainer = (props) => {

  let state = props.store.getState();

  debugger;

  let addNewPost = () => {
    //let text = newPostElement.current.value;
    props.store.dispatch(addNewPostActionCreator());
    //store.updateNewPostText(''); 
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  
  return (
    <NewPost addPost={addNewPost} updatePost={onPostChange} state={state.postsPage}/>
  )
}

export default NewPostContainer;