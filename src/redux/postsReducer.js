const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

let initialState = {
      newPostText: 'abrakadabra',
      postsData: [
        {id: 1, message: 'POST 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 15, time: '08:30'},
        {id: 2, message: 'POST 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 20, time: '12:48'},
        {id: 3, message: 'POST 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 9, time: '16:12'}
      ]
    };

const postsReducer = (state = initialState, action) => {
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