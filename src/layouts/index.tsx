import React from 'react';
import * as styles from './index.module.css';
import Header from '../components/header';
import Sider from '../components/sider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className='layout'>
      <div className={styles.page}>
        <Header />
        <div className={styles.main}>
          <Sider />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
