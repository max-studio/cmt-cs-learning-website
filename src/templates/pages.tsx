import React from 'react';
import { graphql } from 'gatsby';

interface PagesProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const Pages: React.FC<PagesProps> = ({ data }: PagesProps) => {
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />;
};

export const query = graphql`
  query MarkdownPagesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;

export default Pages;
