import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class Module extends Component {
  render() {
    const { copyright } = this.props || {};
    return <Footer style={{ textAlign: 'center' }}>{copyright}</Footer>;
  }
}
