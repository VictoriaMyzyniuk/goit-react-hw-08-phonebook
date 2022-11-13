import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectAuthError } from 'redux/auth/selectors';

import {
  FormLogInEl,
  InputLogInEl,
  LogInLabel,
  SubmitLogInButton,
  Error,
  InputError,
} from 'components/LoginForm/LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    if (error !== null) {
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogInEl>
          <LogInLabel>Email</LogInLabel>
          <InputLogInEl type="email" name="email" />
          <InputError name="email" component="div" />

          <LogInLabel>Password</LogInLabel>
          <InputLogInEl type="password" name="password" />
          <InputError name="password" component="div" />

          <SubmitLogInButton type="submit">Log In</SubmitLogInButton>
        </FormLogInEl>
      </Formik>
      {error && (
        <Error>
          Are you registered? If yes, check the data you entered, if no,
          register
        </Error>
      )}
    </>
  );
};
