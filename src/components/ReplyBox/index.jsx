import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage, InputContainer, Label, StyledForm } from './style';
import { StyledRow } from 'styles';

const StyledContainer = styled.div``;

const schema = yup.object().shape({
  name: yup.string().required('You must enter a anme'),
  email: yup.string().email('Invalid Email').required('You must enter a anme'),
  body: yup.string().required("Comment can't be blank"),
});

const ReplyBox = ({ onClose, postId }) => {
  const [reply, setReply] = useState('');
  const dispatch = useDispatch();

  const {
    register,
    formState: { isSubmitting, isDirty, isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = val => console.log(val);
  console.log(errors);

  return (
    <div style={{ position: 'absolute', top: 10, right: 100, border: '1px solid #aaa' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StyledRow style={{ backgroundColor: '#98e', alignItems: 'center', padding: 5 }}>
          <strong>Reply to post {postId}</strong>
          <div
            style={{
              display: 'flex',
              border: '1px solid',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 2px',
            }}
            onClick={onClose}
          >
            X
          </div>
        </StyledRow>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register('name')} />
          <input placeholder="Email" {...register('email')} />
          <textarea {...register('body')} style={{ minHeight: 100 }} />
          <input type="submit" />
        </StyledForm>
      </div>
    </div>
  );
};

export default ReplyBox;
