import React from 'react';
import * as styles from './index.module.css';
import Logo from '../logo';
import SearchBlock from '../search-block';
import MenuBlock from '../menu-block';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      {/* 搜索框 */}
      <SearchBlock />
      {/* 文档导航栏 */}
      <MenuBlock />
    </div>
  );
};
export default Header;
