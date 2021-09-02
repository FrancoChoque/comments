import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.li`
  background-color: #d6daf0;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  width: 800px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledFooter = styled.div`
  font-size: 12px;
  font-style: italic;
`;

const CommentCard = ({ comment }) => {
  const history = useHistory();
  return (
    <StyledContainer>
      <StyledRow>
        <StyledTitle>{comment.name}</StyledTitle>
        <span>#{comment.id}</span>
      </StyledRow>
      <p>{comment.body}</p>
      <StyledFooter>By {comment.email}</StyledFooter>
    </StyledContainer>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any),
};

CommentCard.defaultProps = {
  comment: {},
};

export default CommentCard;
