import { graphql, navigate } from 'gatsby';
import React from 'react';

interface IndexProps {
  data: {
    allMarkdownRemark: {
      nodes: { fields: { slug: string } }[];
    };
  };
}

const Index: React.FC<IndexProps> = ({ data }: IndexProps) => {
  if (data.allMarkdownRemark.nodes[0]) {
    navigate(data.allMarkdownRemark.nodes[0].fields.slug);
  }
  return <></>;
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
    }
  }
`;
