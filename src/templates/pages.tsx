import React from 'react';
import { graphql } from 'gatsby';
import Footer from '../components/footer/index';
import AnchorWay from '../components/anchor/index';
import * as center from './pages.module.css';

interface PagesProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const Pages: React.FC<PagesProps> = ({ data }: PagesProps) => {
  return (
    <main>
      <title>Home Page</title>
      <div className={center.center}>
        <div className={center.contents}>
          <h1 id='components-anchor-demo-basic'>Basic demo</h1>
          <h2>标题2</h2>
          <h3>标题3</h3>
          <h4>标题4</h4>
          <h5>标题5</h5>
          <h6 id='components-anchor-demo-static'>Static demo</h6>
          <p>正文正文正文正文正文正文正文</p>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
        <div className={center.anchorPosition}>
          <AnchorWay />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query MarkdownPagesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;

export default Pages;
