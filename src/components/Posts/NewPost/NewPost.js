import s from './NewPost.module.css';
import React from 'react';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
  
const NewPost = (props) => {
  

  let newPostElement = React.createRef();

  let addNewPost = () => {
    //let text = newPostElement.current.value;
    props.dispatch(addNewPostActionCreator());
    //store.updateNewPostText(''); 
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  
  return (
  <div className={s.newPostArea}>
    <textarea className={s.text} ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
    <button className={s.btn} onClick={addNewPost}>Post</button>
  </div>
  )
}

export default NewPost;