import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormLogInEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const InputLogInEl = styled(Field)`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  outline-color: #5edcb0;
  border-color: #0aab7e;
  font-weight: 700;
`;

export const LogInLabel = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;

  color: #057858;
`;

export const SubmitLogInButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #39bb96;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline-color: #504e4e;
`;

export const Error = styled.div`
  text-align: center;
  color: red;
  margin-top: 15px;
  font-weight: 700;
  font-size: 20px;
`;

export const InputError = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;
