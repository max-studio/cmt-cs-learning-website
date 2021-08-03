import React from 'react';
import { Input, Space } from 'antd';
import * as styles from './index.module.css';

const { Search } = Input;

const SearchBlock = () => {
  return (
    <Space direction='vertical' className={styles.search}>
      <Search placeholder='请输入关键字' />
    </Space>
  );
};

export default SearchBlock;
