import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchComments } from 'store/comments';
import styled from 'styled-components';
import { _getComments } from 'utils/selectors';

const StyledContainer = styled.div``;

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(_getComments);
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id]);
  console.log(comments);
  return (
    <StyledContainer>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
    </StyledContainer>
  );
};

export default Post;
