const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

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

let store = {

  _state: {
    postsPage: {
      newPostText: 'abrakadabra',
      postsData: [
        {id: 1, message: 'POST 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 15, time: '08:30'},
        {id: 2, message: 'POST 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 20, time: '12:48'},
        {id: 3, message: 'POST 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.', count: 9, time: '16:12'}
      ]
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Juan B.Bushop'},
        {id: 2, name: 'Denise Chambers'},
        {id: 3, name: 'Margaret Seasar'}
      ],
      messagesData: [
        {id: 1, img: 'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg', text: 'Hello, how are things?'},
        {id: 2, img: 'https://cdn.pixabay.com/photo/2016/05/10/02/09/blue-1382940__340.jpg', text: 'Hi, all is great!'},
        {id: 3, img: 'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg', text: 'So fine! Happy for you!'}
      ]
    },
    friendsPage: [
      {id: 1, img: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg', name: 'Daisy Walker', activity: 'Active 3 monts ago'},
      {id: 2, img: 'https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048__340.jpg', name: 'Melody Fletcher', activity: 'Active 2 days ago'},
      {id: 3, img: 'https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004__340.jpg', name: 'Glen Norman', activity: 'Active 5 days ago'},
      {id: 4, img: 'https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454__340.jpg', name: 'Leona Lee', activity: 'Active 6 hours ago'},
      {id: 5, img: 'https://cdn.pixabay.com/photo/2016/05/10/02/09/blue-1382940__340.jpg', name: 'Mila Brown', activity: 'Active 21 days ago'},
      {id: 6, img: 'https://cdn.pixabay.com/photo/2016/06/09/20/38/woman-1446557__340.jpg', name: 'Gemma Newton', activity: 'Active 8 months ago'},
      {id: 7, img: 'https://cdn.pixabay.com/photo/2016/11/29/02/28/woman-1866858__340.jpg', name: 'Hanna Lindsey', activity: 'Active 6 days ago'},
      {id: 8, img: 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959__340.jpg', name: 'Monique Perry', activity: 'Active 5 hours ago'},
      {id: 9, img: 'https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488__340.jpg', name: 'Ernest Scott', activity: 'Active 5 minutes ago'},
      {id: 10, img: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg', name: 'Keith Cooper', activity: 'Active 51 days ago'},
      {id: 11, img: 'https://cdn.pixabay.com/photo/2017/01/20/18/25/woman-1995624__340.jpg', name: 'Sophia Gonzalez', activity: 'Active 25 minutes ago'},
      {id: 12, img: 'https://cdn.pixabay.com/photo/2018/02/09/15/00/woman-3141766__340.jpg', name: 'Annabelle Baker', activity: 'Active 8 minutes ago'}
    ]
  },

  _callSubscriber () {
    console.log('Rerender page');
  },

  getState() {
    return this._state;
  },

  // addPost () {
  //   let newPost = {
  //   id: 5,
  //   message: this._state.postsPage.newPostText,
  //   count: 0,
  //   time: 'now'
  //   };

  //   this._state.postsPage.postsData.push(newPost);
  //   this._state.postsPage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText (newText) {
  //   this._state.postsPage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.postsPage.newPostText,
        count: 0,
        time: 'now'
      };

      this._state.postsPage.postsData.push(newPost);
      this._state.postsPage.newPostText = '';
      this._callSubscriber(this._state);

    } else if(action.type === UPDATE_NEW_POST_TEXT) {

      this._state.postsPage.newPostText = action.newText;
      this._callSubscriber(this._state);
      
    }
  }

};

  export default store;