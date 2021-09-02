import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.li`
  border: 2px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  width: 800px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const PostCard = ({ post }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push(`/posts/${post.id}`);
  };
  return (
    <StyledContainer onClick={clickHandler}>
      <StyledTitle>{post.title}</StyledTitle>
      <p>{post.body}</p>
    </StyledContainer>
  );
};

PostCard.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
};

PostCard.defaultProps = {
  post: {},
};

export default PostCard;
