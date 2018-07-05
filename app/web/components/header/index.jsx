import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import logo from '~/assets/images/logo.svg';
import './index.css';

const { Header } = Layout;

export default class Module extends Component {
  render() {
    const { menus = [] } = this.props || {};
    return (
      <Header className="header" theme="light">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <Menu theme="light" mode="horizontal" className="header-nav">
          {menus.map((v, k) => {
            const { title, url, target } = v;
            return (
              <Menu.Item key={k}>
                <a
                  href={url}
                  target={target ? target : ''}
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
    );
  }
}
