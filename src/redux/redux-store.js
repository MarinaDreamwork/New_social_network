import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: postsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;