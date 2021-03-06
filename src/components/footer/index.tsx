import React from 'react';
import {
  GithubOutlined,
  BugOutlined,
  QuestionCircleOutlined,
  FileMarkdownOutlined,
} from '@ant-design/icons';
import * as styles from './index.module.css';
import { Link } from 'gatsby';

interface FooterProps {
  className?: string;
}

interface FooterData {
  title: string;
  contents: {
    icon?: React.ReactNode;
    text: string;
    idx?: number;
    url?: any;
  }[];
}

const data: FooterData[] = [
  {
    title: '相关链接',
    contents: [
      {
        text: '考试入场',
        idx: 1,
        url: '#',
      },
      {
        text: '考试管理系统',
        idx: 1,
        url: '#',
      },
    ],
  },
  {
    title: '帮助',
    contents: [
      {
        icon: <GithubOutlined />,
        text: 'CMT CS Learning ',
        idx: 1,
        url: 'https://github.com/max-studio/CMT_CS_Learning',
      },
      {
        icon: <BugOutlined />,
        text: '反馈 Bug',
        idx: 1,
        url: '#',
      },
    ],
  },
  {
    title: '协助本站',
    contents: [
      {
        icon: <QuestionCircleOutlined />,
        text: '反馈问题',
        url: 'https://github.com/max-studio/CMT_CS_Learning/issues',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '项目文档',
        url: '#',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '规范文档',
        url: '#',
      },
      {
        icon: <FileMarkdownOutlined />,
        text: '贡献文档',
        url: '#',
      },
    ],
  },
  {
    title: '关于我们',
    contents: [
      {
        text: '开发团队',
        idx: 1,
        url: '#',
      },
      {
        text: 'Max. 工作室',
        idx: 1,
        url: 'https://github.com/max-studio',
      },
      {
        text: 'Rookie 开源社区',
        idx: 1,
        url: '#',
      },
    ],
  },
];

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {data.map((d, i) => (
        <nav className={styles.footerItem} key={i}>
          <header className={styles.footerItemTitle} key={i}>
            {d.title}
          </header>
          <ul className={styles.footerItemContent}>
            {d.contents.map((item, index) => (
              <li key={index}>
                {item.idx == 1 ? (
                  <a
                    href={item.url}
                    className={styles.footerItemList}
                    key={index}
                  >
                    {item.icon && (
                      <i className={styles.footerItemIcon}>{item.icon}</i>
                    )}
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <Link
                    to={item.url}
                    className={styles.footerItemList}
                    key={index}
                  >
                    {item.icon && (
                      <i className={styles.footerItemIcon}>{item.icon}</i>
                    )}
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </footer>
  );
};
export default Footer;
