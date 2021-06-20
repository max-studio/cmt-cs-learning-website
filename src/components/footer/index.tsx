import React from 'react';
import {
  GithubOutlined,
  BugOutlined,
  QuestionCircleOutlined,
  FileMarkdownOutlined,
} from '@ant-design/icons';
import * as styles from './index.module.css';

interface FooterProps {
  className?: string;
}

interface FooterData {
  title: string;
  contents: {
    icon?: React.ReactNode;
    text: string;
  }[];
}

const data: FooterData[] = [
  {
    title: '相关链接',
    contents: [
      {
        text: '考试入场',
      },
      {
        text: '考试管理系统',
      },
    ],
  },
  {
    title: '帮助',
    contents: [
      {
        icon: <GithubOutlined />,
        text: 'CMT CS Learning ',
      },
      {
        icon: <BugOutlined />,
        text: '反馈 Bug',
      },
    ],
  },
  {
    title: '协助本站',
    contents: [
      {
        icon: <QuestionCircleOutlined />,
        text: '反馈问题',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '项目文档',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '规范文档',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '贡献文档',
      },
    ],
  },
  {
    title: '关于我们',
    contents: [
      {
        text: '开发团队',
      },
      {
        text: 'Max. 工作室',
      },
      {
        text: 'Rookie 开源社区',
      },
    ],
  },
];

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <div className={styles.footer}>
      {data.map((d, i) => (
        <div className={styles.footerItem}>
          <div className={styles.footerItemTitle} key={i}>
            {d.title}
          </div>
          <ul className={styles.footerItemContent}>
            {d.contents.map((item, index) => (
              <li className={styles.footerItemList} key={index}>
                {item.icon && (
                  <i className={styles.footerItemIcon}>{item.icon}</i>
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Footer;
