const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        img: 'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg',
        text: state.newMessageText,
      };

        state.messagesData.push(newMessage);
        state.newMessageText = ''; 
        return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
        return state;

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };  
};

export const updateNewMessageTextActionCreator = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: messageText,
  };
};

export default dialogsReducer;