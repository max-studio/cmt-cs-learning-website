import React from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import * as styles from './index.module.css';

const Sider = () => {
  return (
    <Tree
      className={styles.tree}
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      treeData={[
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0',
            },
            {
              title: 'leaf',
              key: '0-0-1',
            },
          ],
        },
        {
          title: 'parent 2',
          key: '0-1',
          children: [
            {
              title: 'leaf',
              key: '0-0-2',
            },
            {
              title: 'leaf',
              key: '0-0-3',
            },
          ],
        },
        {
          title: 'parent 3',
          key: '0-2',
          children: [
            {
              title: 'leaf',
              key: '0-0-4',
            },
            {
              title: 'leaf',
              key: '0-0-5',
            },
          ],
        },
        {
          title: 'parent 4',
          key: '0-3',
          children: [
            {
              title: 'leaf',
              key: '0-0-6',
            },
            {
              title: 'leaf',
              key: '0-0-7',
            },
          ],
        },
      ]}
    />
  );
};
export default Sider;
