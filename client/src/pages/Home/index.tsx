import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';

import { useState } from 'react';
import './styles.css'
import { Body } from '../../components/Body/Body';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Livros">
            <Menu.Item key="3">Romance</Menu.Item>
            <Menu.Item key="4">Drama</Menu.Item>
            <Menu.Item key="5">Didático</Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item> */}
          <SubMenu key="sub2" icon={<UserOutlined />} title="Usuário">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Body/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default Home