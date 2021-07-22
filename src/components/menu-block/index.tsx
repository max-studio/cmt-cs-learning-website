import React from 'react';
import { Menu } from 'antd';
import * as styles from './index.module.css';

const MenuBlock = () => {
  return (
    <Menu
      mode='horizontal'
      defaultSelectedKeys={['mail']}
      className={styles.nav}
    >
      <Menu.Item key='mail'>文档</Menu.Item>
      <Menu.Item key='contribution'>贡献</Menu.Item>
    </Menu>
  );
};

export default MenuBlock;
