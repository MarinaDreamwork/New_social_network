import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: postsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;