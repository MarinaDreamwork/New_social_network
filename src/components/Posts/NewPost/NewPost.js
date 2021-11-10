import s from './NewPost.module.css';
import React from 'react';

const NewPost = ({store}) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    store.addPost(text);
    store.updateNewPostText(''); 
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    store.updateNewPostText(text);
  };
  
  return (
  <div className={s.newPostArea}>
    <textarea className={s.text} ref={newPostElement} value={store.newPostText} onChange={onPostChange} />
    <button className={s.btn} onClick={addNewPost}>Post</button>
  </div>
  )
}

export default NewPost;