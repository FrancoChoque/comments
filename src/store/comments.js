import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from 'lib/axios';

export const fetchComments = createAsyncThunk('comments/fetchCommentsByPost', async postId => {
  const response = await axiosInstance.get(`/posts/${postId}/comments`);
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    loading: {
      fetchComments: false,
    },
    error: null,
  },
  reducers: {
    sendComment(state, action) {
      const comments = [...state.data, action.payload];
      state.data = comments;
    },
  },
  extraReducers: {
    [fetchComments.pending]: state => {
      state.loading.fetchComments = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.loading.fetchComments = false;
      state.data = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.loading.fetchComments = false;
      state.error = action.error;
    },
  },
});

export const { sendComment } = commentsSlice.actions;

const { reducer } = commentsSlice;

export default reducer;
