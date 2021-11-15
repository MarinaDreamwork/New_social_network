import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: postsReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;