import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import {
  LoginGreeting,
  RegisterLoginInfo,
  LogButton,
  UserName,
} from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <RegisterLoginInfo>
      <LoginGreeting>
        Welcome, &nbsp; <UserName>{user.name}</UserName>
      </LoginGreeting>
      <LogButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogButton>
    </RegisterLoginInfo>
  );
};
