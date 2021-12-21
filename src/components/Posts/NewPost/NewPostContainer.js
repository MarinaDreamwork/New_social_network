import { connect } from 'react-redux';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/postsReducer';
import NewPost from './NewPost';

const mapStateToProps = (state) => {
  return {
    state: state,
    newPostText: state.postsPage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addNewPostActionCreator())},
    updatePost: (text) => {dispatch(updateNewPostTextActionCreator(text))}
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;