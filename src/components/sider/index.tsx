import React, { Key } from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import * as styles from './index.module.css';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Sider = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allFile(
          sort: { fields: publicURL, order: ASC }
          filter: { relativeDirectory: { ne: "Img" } }
        ) {
          edges {
            node {
              relativeDirectory
              relativePath
              extension
              childMarkdownRemark {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
              name
            }
          }
        }
      }
    `,
  );

  const pathToTree = (edges: any[]) => {
    const root: {
      title: string | JSX.Element;
      key: string;
      isLeaf: boolean;
      selectable: boolean;
      children?: any;
    }[] = [];
    edges.forEach((edge) => {
      if (edge.node.relativeDirectory !== '') {
        let chain: string[];
        switch (edge.node.extension) {
          case 'md':
            chain = edge.node.relativePath.split('/');
            break;
          default:
            chain = edge.node.relativeDirectory.split('/');
            break;
        }

        let currentHierarchy = root;
        chain.forEach((item, index) => {
          const wantedNode = item;
          const lastHierarchy = currentHierarchy;
          // 遍历root是否已有该层级
          currentHierarchy.forEach((element) => {
            if (element.title === wantedNode) {
              currentHierarchy = element.children;
              return false;
            }
            return true;
          });
          if (lastHierarchy === currentHierarchy) {
            const key = chain.slice(0, index + 1).join('/') + '/';
            const newNode: {
              title: string | JSX.Element;
              key: string;
              isLeaf: boolean;
              selectable: boolean;
              children: any;
            } = {
              title: wantedNode,
              key: key,
              isLeaf: false,
              selectable: false,
              children: [],
            };

            // 文件，最后一个字符不是"/“符号
            if (index === chain.length - 1) {
              newNode.children = undefined;
              if (edge.node.childMarkdownRemark) {
                newNode.isLeaf = true;
                newNode.selectable = true;
                if (edge.node.childMarkdownRemark.frontmatter.title !== '') {
                  newNode.title = (
                    <Link
                      to={edge.node.childMarkdownRemark.fields.slug}
                      key={edge.node.childMarkdownRemark.id}
                    >
                      {edge.node.childMarkdownRemark.frontmatter.title}
                    </Link>
                  );
                } else {
                  newNode.title = (
                    <Link
                      to={edge.node.childMarkdownRemark.fields.slug}
                      key={edge.node.childMarkdownRemark.id}
                    >
                      {edge.node.name}
                    </Link>
                  );
                }
              }
            }
            currentHierarchy.push(newNode);
            currentHierarchy = newNode.children;
          }
        });
      } else if (edge.node.extension === 'md') {
        const newNode = {
          title: (
            <Link
              to={edge.node.childMarkdownRemark.fields.slug}
              key={edge.node.childMarkdownRemark.id}
            >
              {edge.node.name}
            </Link>
          ),
          key: edge.node.name + '/',
          isLeaf: true,
          selectable: true,
        };
        root.push(newNode);
      }
    });
    return root;
  };

  return (
    <Tree
      className={styles.tree}
      showLine
      switcherIcon={<DownOutlined />}
      treeData={pathToTree(data.allFile.edges)}
    />
  );
};
export default Sider;
