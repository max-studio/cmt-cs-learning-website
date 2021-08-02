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
  const html: any = { __html: data.markdownRemark.html };
  const title = JSON.stringify(html).match(/<(h\d).*?>.*?<\/h\d>/g);
  const hash = String(title).replace(/<.*?>/g, '').split(',');
  const newHash = hash.slice();
  const change: any = JSON.stringify(html)
    .replace(/\\r\\\n|\\r|\\n|\\n\\r|__html|:|{|}|"/g, '')
    .replace(/<(h\d).*?/g, function (item) {
      item = item + ' id="' + newHash[0] + '"';
      newHash.shift();
      return item;
    });
  return (
    <div>
      <div className={center.center}>
        <div className={center.contents}>
          <div dangerouslySetInnerHTML={{ __html: change }} />
        </div>
        <div className={center.anchorPosition}>
          <AnchorWay data={hash} />
        </div>
      </div>
      <Footer />
    </div>
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
