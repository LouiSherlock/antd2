import React, { Fragment } from 'react';
import { Button, Layout, Menu, Icon } from 'antd';

import styles from './index.css';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


class BasicLayout extends React.PureComponent {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    collapsed: false,
    openKeys: ['sub1'],
  };

  onClick = () => {
    this.setState((state) => {
      return ({ collapsed: !state.collapsed });
    });
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <Fragment>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout style={{ marginTop: 64,}}  >
            <Sider className={styles['fix-left']} theme='light'
                   collapsed={collapsed}>
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
              >
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content>
              <Button onClick={this.onClick}>点击</Button>
              {children}

            </Content>

          </Layout>

        </Layout>
      </Fragment>
    );
  }
}


export default BasicLayout;
