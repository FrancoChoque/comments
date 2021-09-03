import styled from 'styled-components';
import { StyledRow } from 'styles';

export const StyledContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 100px;
  border: 1px solid #b7c5d9;
  width: 300px;
`;

export const StyledHeader = styled(StyledRow)`
  background-color: #98e;
  align-items: center;
  padding: 5px;
`;

export const StyledBox = styled.div`
  border: 1px solid;
  padding: 0 2px;
  :hover {
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin: 5px 0;
`;

export const Label = styled.label`
  font-size: 12px;
  margin: 5px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
