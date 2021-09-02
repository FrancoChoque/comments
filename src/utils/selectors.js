export const _getComments = state => state.comments.data;

export const _getPosts = state => state.posts.data;

export const _getIsLoading = (state, { reducer, action }) => state[reducer].loading[action];
