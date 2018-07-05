import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../header/';
import Footer from '../footer/';
const { Content } = Layout;

export default class layout extends Component {
  render() {
    const { children, menus, copyright } = this.props || {};
    return (
      <Layout>
        <Header
          {...{
            menus: menus.header,
          }}
        />
        <Content style={{ padding: '0 50px', marginTop: '24px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px' }}>{children}</Content>
          </Layout>
        </Content>
        <Footer {...{ copyright }} />
      </Layout>
    );
  }
}
