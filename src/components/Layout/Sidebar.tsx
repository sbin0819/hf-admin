import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider collapsible width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        theme="dark"
        // defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="laptop" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/user">
            <Icon type="user" />
            <span>User</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="setting">
            <Icon type="setting" />
            <span>Setting</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="graph">
            <Icon type="laptop" />
            <span>graph</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="chart">
            <Icon type="user" />
            <span>chart</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
