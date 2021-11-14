const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        count: 0,
        time: 'now'
      };

        state.postsData.push(newPost);
        state.newPostText = '';
        return state;

      case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;

      default:
        return state;
  }
};

export const addNewPostActionCreator = () => {
  return {
    type: ADD_POST,
  };  
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text,
  };
};

export default postsReducer;