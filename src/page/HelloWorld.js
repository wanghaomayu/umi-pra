import React from 'react';
import { Card } from 'antd';

const {Meta} = Card;
const HelloWorld = () => {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };
  return (
    <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
      <Meta
        avatar = {<img
          src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
          style={{ width: '64px', height: '64px', borderRadius: '32px' }}
        />}
        title="bytedance"
        description="在中后台产品的研发过程中，会出现不同的吧设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套规范。"
      />
    </Card>
  );
};

export default HelloWorld;