import { combineReducers } from "redux";
import { postReducer } from "./post";
import { postsReducer } from "./posts";
import { topNewPostsReducer } from "./topNewPosts";
import { featuredPostsReducer } from "./featuredPosts";
import { mostViewedPostsReducer } from "./mostViewedPosts";
import { gamesReviewPostsReducer } from "./gamesReviewPosts";
import { latestPostsReducer } from "./latestPosts";
export const reducers = combineReducers({
  post: postReducer,
  posts: postsReducer,
  topNewPosts: topNewPostsReducer,
  featuredPosts: featuredPostsReducer,
  mostViewedPosts: mostViewedPostsReducer,
  gamesReviewPosts: gamesReviewPostsReducer,
  latestPosts: latestPostsReducer,
});
