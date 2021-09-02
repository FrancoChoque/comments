import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from 'store/comments';
import postsReducer from 'store/posts';

export default configureStore({
  reducer: {
    comments: commentsReducer,
    posts: postsReducer,
  },
});
