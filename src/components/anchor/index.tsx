import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const AnchorWay = ({ data }: any) => {
  const hash: string[] = data;
  return (
    <Anchor>
      {hash.map((item, index) => (
        <Link href={'#' + item} title={item} key={index} />
      ))}
    </Anchor>
  );
};

export default AnchorWay;
