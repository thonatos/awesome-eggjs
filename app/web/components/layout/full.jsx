import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../header/';
const { Content } = Layout;

export default class layout extends Component {
  render() {
    const { children, menus } = this.props || {};
    return (
      <Layout>
        <Header
          {...{
            menus: menus.header,
          }}
        />
        <Content style={{ marginTop: '2px' }}>
          <Layout style={{ background: '#fff' }}>
            <Content>{children}</Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}
