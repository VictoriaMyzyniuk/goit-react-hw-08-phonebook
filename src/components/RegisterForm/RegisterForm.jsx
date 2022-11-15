import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectRegisterError } from 'redux/auth/selectors';
import { updateErrorRegister } from 'redux/auth/authSlice';
import { useEffect } from 'react';

import {
  FormRegisterEl,
  InputRegisterEl,
  RegisterLabel,
  SubmitRegisterButton,
  Error,
  InputError,
} from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required(),
  email: yup.string().email('Not a proper email'),
  password: yup.string().min(6).required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectRegisterError);

  useEffect(() => {
    dispatch(updateErrorRegister(error));
    return () => {
      dispatch(updateErrorRegister(null));
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    if (error !== null) {
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormRegisterEl>
          <RegisterLabel>Username</RegisterLabel>
          <InputRegisterEl type="text" name="name" placeholder="Enter name" />
          <InputError name="name" component="div" />

          <RegisterLabel>Email</RegisterLabel>
          <InputRegisterEl
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <InputError name="email" component="div" />

          <RegisterLabel>Password</RegisterLabel>
          <InputRegisterEl
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <InputError name="password" component="div" />

          <SubmitRegisterButton type="submit">Register</SubmitRegisterButton>
        </FormRegisterEl>
      </Formik>
      {error && (
        <Error>
          Your data isn`t valid. Please, check correctness and try again
        </Error>
      )}
    </>
  );
};
