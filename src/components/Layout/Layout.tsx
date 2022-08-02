import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import {
  LayoutWrapper,
  Header,
  Title,
  GoLoginPage,
  LogoutButton,
  LogoutWrapper,
} from './LayoutStyle';
import { userName } from '../../states/layout';
import { getUserId } from '../../api/authApi';

interface AppLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: AppLayoutProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const userId = Cookies.get('userId') ?? '';
  const jwt = Cookies.get('jwt');
  const { push } = useRouter();
  const [userNameValue, setUserNameValue] = useRecoilState(userName);
  const resetName = useResetRecoilState(userName);

  useQuery(['getUserId'], () => getUserId(userId), {
    enabled: userId !== '',
    onSuccess: (data) => {
      setUserNameValue(data.data.data.user.NAME);
    },
  });

  useEffect(() => {
    setIsLogin(!!jwt);
  }, [jwt]);

  const handleLogout = () => {
    Cookies.remove('jwt');
    Cookies.remove('userId');
    resetName();
    push('/');
  };

  return (
    <LayoutWrapper>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        {isLogin ? (
          <LogoutWrapper>
            <div>{userNameValue}</div>
            <LogoutButton onClick={handleLogout}>logout</LogoutButton>
          </LogoutWrapper>
        ) : (
          <Link href='/login' passHref>
            <GoLoginPage>login</GoLoginPage>
          </Link>
        )}
      </Header>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
