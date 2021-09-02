import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from 'lib/axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async params => {
  const queryParams = params ? { _page: params.page, _limit: params.limit } : {};
  const response = await axiosInstance.get('/posts', {
    params: queryParams,
  });
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: {
      fetchPosts: false,
    },
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: state => {
      state.loading.fetchPosts = true;
      state.loading.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading.fetchPosts = false;
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading.fetchPosts = false;
      state.error = action.error;
    },
  },
});

const { reducer } = postsSlice;

export default reducer;
