import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'store/posts';
import styled from 'styled-components';
import usePagination from 'utils/pagination';
import { _getIsLoading, _getPosts } from 'utils/selectors';
import PostCard from './PostCard';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state =>
    _getIsLoading(state, { reducer: 'posts', action: 'fetchPosts' }),
  );
  const posts = useSelector(_getPosts);
  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    goToPage,
    page,
    limit,
    setPageLimit,
  } = usePagination();

  useEffect(() => {
    dispatch(fetchPosts({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <StyledContainer>
      {loading ? (
        'Loading Posts'
      ) : (
        <>
          <StyledList>
            {posts.map(post => (
              <PostCard post={post} key={post.id} />
            ))}
          </StyledList>
          <div className="pagination">
            <button type="button" onClick={() => goToPage(1)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button type="button" onClick={previousPage} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button type="button" onClick={nextPage} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <span>Page {page} </span>
            <select
              value={limit}
              onChange={e => {
                setPageLimit(Number(e.target.value));
              }}
            >
              {[10, 20, 30].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </StyledContainer>
  );
};

export default Posts;
