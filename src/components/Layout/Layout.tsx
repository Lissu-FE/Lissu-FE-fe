import { ReactNode } from 'react';

import { LayoutWrapper } from './LayoutStyle';

interface AppLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: AppLayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
