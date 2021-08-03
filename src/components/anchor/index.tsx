import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const AnchorWay = ({ data }: any) => {
  const hash: string[] = data;
  return (
    <Anchor affix={false}>
      {hash.map((item, index) =>
        item == 'null' ? null : (
          <Link href={'#' + item} title={item} key={index} />
        ),
      )}
    </Anchor>
  );
};

export default AnchorWay;
