import { combineReducers } from "redux";
import { postReducer } from "./post";
import { postsReducer } from "./posts";
export const reducers = combineReducers({
  post: postReducer,
  posts: postsReducer,
});
