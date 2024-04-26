"use client"

import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useStore } from '../storedDashboard';
import { PiStudentBold } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa6';
import { IoBusinessSharp } from 'react-icons/io5';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useStore(state => [state.collapsed, state.setCollapsed]);
  const { colorBgContainer, borderRadiusLG } = useStore(state => state.token);
  const [user] = useState({ role: 'Admin', username: 'Gonzaga' });
  const [selectedKey, setSelectedKey] = useState<string>('1');
  const handleMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[selectedKey]} onSelect={handleMenuSelect}>
            <Menu.Item
                icon={<UserOutlined style={{ fontSize: '16px', color: 'white' }}/>}
                style={{ color: 'white', background: 'transparent' }}>
                <span style={{ fontSize: '14px' }}>
                {user.role} |&nbsp;
                <span style={{ color: 'pink', fontSize: '14px', textDecoration: 'none' }}>{user.username}</span>
                </span>
            </Menu.Item>
          <Menu.Item key="1" icon={<PiStudentBold />}>Interns</Menu.Item>
          <Menu.Item key="2" icon={<FaSchool />}>Schools</Menu.Item>
          <Menu.Item key="3" icon={<IoBusinessSharp />}>Company</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64, }}/>
          <span style={{ marginLeft: '20px', color: 'white' }}>Current Page: {getPageName(selectedKey)}</span>
        </Header>
        <Content style={{ margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG, }}>{getPageContent(selectedKey)}
        </Content>
      </Layout>
    </Layout>
  );
};

const getPageName = (key: string): string => {
  switch (key) {
    case '1':
      return 'Interns';
    case '2':
      return 'Schools';
    case '3':
      return 'Company';
    default:
      return 'Dashboard';
  }
};

const getPageContent = (key: string): string => {
  switch (key) {
    case '1':
      return 'Interns Page';
    case '2':
      return 'Schools Page';
    case '3':
      return 'Company Page';
    default:
      return 'Dashboard Page';
  }
};

export default App;