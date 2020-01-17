import React from 'react';

import 'antd/dist/antd.css';
import { Layout, Dropdown, Menu, Button, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const Graph = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <Icon type="user" />
      </Dropdown>
    </div>
  );
};

export default Graph;
