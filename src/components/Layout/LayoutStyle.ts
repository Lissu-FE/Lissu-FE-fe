import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 420px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const GoLoginPage = styled.a`
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: none;
  }
`;

export const Title = styled(GoLoginPage)`
  font-size: 48px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  user-select: none;
  &:focus {
    outline: none;
  }
`;

export const LogoutWrapper = styled.div`
  text-align: right;
`;
