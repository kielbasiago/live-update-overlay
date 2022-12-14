import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

export type ERLayoutProps = {
  children: React.ReactNode;
};

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SiderLayout = styled(Layout)``;

export const ERLayout: React.FC<ERLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <StyledHeader className="header">
        <Image src="/0hitleague.png" alt="0 Hit League" width={48} height={37} />
        {/* <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </StyledHeader>
      <SiderLayout>
        {/* <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item>
              <Link href={'/ds3/standings'}>
                <div>
                  <UserOutlined />
                  Standings
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider> */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </SiderLayout>
    </Layout>
  );
};
