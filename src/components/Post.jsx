import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchComments } from 'store/comments';
import styled from 'styled-components';
import { StyledRow } from 'styles';
import { _getComments } from 'utils/selectors';
import CommentCard from './CommentCard';

const StyledContainer = styled.div`
  margin: 10px;
`;

const StyledItem = styled.li``;

const ReplyBox = ({ id }) => {
  const [reply, setReply] = useState('');
  return (
    <div style={{ position: 'absolute', right: 50, top: 100 }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        Reply to post {id}
        <textarea style={{ minHeight: 100 }} />
        <button>Send</button>
      </div>
    </div>
  );
};

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(_getComments);
  const history = useHistory();
  const [replyBox, setReplyBox] = useState(false);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id]);
  console.log(comments);
  return (
    <StyledContainer>
      <StyledRow style={{ gap: 5, justifyContent: 'flex-start' }}>
        <button type="button" onClick={() => history.goBack()}>
          Go Back
        </button>
        <button type="button" onClick={() => setReplyBox(true)}>
          Reply
        </button>
      </StyledRow>
      <ul style={{ listStyle: 'none' }}>
        {comments.map(comment => (
          <CommentCard comment={comment} />
        ))}
      </ul>
      {replyBox && <ReplyBox id={id} />}
    </StyledContainer>
  );
};

export default Post;
