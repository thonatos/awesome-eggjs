import React, { Component } from 'react';

import Layout from '~/components/layout/full.jsx';
import './index.css';
export default class Home extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="banner">
          <div className="banner-logo">
            <img src="https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg" />
          </div>
          <div className="banner-info">
            <h1>
              <p className="strong">Born to build</p>better enterprise
              frameworks and apps with Node.js &amp; Koa
            </h1>
            <p>为企业级框架和应用而生</p>
            <div className="banner-button">
              <a className="btn btn-primary" href="/en/intro/quickstart.html">
                Get Started
              </a>
              <a
                className="btn btn-secondary"
                href="https://github.com/eggjs/egg/"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
