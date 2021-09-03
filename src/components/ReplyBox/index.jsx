import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import { sendComment } from 'store/comments';
import { ErrorMessage, StyledBox, StyledContainer, StyledForm, StyledHeader } from './style';

const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
  email: yup.string().email('Invalid Email').required('You must enter an email'),
  body: yup.string().required("Comment can't be blank"),
});

const ReplyBox = ({ onClose }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = val => {
    dispatch(sendComment({ ...val, postId: id, id: Math.floor(Math.random() * 1000) }));
  };
  const errorsArray = Object.values(errors).map(each => each.message);

  return (
    <StyledContainer>
      <div>
        <StyledHeader style={{ backgroundColor: '#98e', alignItems: 'center', padding: 5 }}>
          <strong>Reply to post #{id}</strong>
          <StyledBox onClick={onClose}>X</StyledBox>
        </StyledHeader>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register('name')} />
          <input placeholder="Email" {...register('email')} />
          <textarea {...register('body')} style={{ minHeight: 100 }} />
          <input type="submit" />
        </StyledForm>
        {Boolean(errorsArray.length) && (
          <div style={{ backgroundColor: 'red', padding: 2 }}>
            {errorsArray.map(each => (
              <ErrorMessage>{each}</ErrorMessage>
            ))}
          </div>
        )}
      </div>
    </StyledContainer>
  );
};

ReplyBox.propTypes = {
  onClose: PropTypes.func,
};

ReplyBox.defaultProps = {
  onClose: () => {},
};

export default ReplyBox;
