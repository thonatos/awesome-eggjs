import React, { Component } from 'react';
import Layout from '~/components/layout/base.jsx';
import { Card, Tag, Row, Col, Pagination, Icon, Divider } from 'antd';
import './index.css';

const COLORS = ['magenta', 'volcano', 'orange', 'cyan'];

export default class Home extends Component {
  onChange(page) {
    window.location.href = `/plugins?page=${page}`;
  }

  render() {
    const { data, query } = this.props || {};
    const { items, total_count } = data;
    const { page, per_page } = query;

    return (
      <Layout {...this.props}>
        <Row>
          <Col span={24}>
            <h2>Egg Plugins</h2>
            <Divider />
          </Col>
          <Col span={24}>
            <Row gutter={16} type="flex">
              {items.map(item => {
                const { id, name, description, topics = [], html_url } = item;
                return (
                  <Col span={8} key={id}>
                    <Card
                      title={name}
                      className="card"
                      extra={
                        <a
                          href={html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon type="github" />
                        </a>
                      }
                    >
                      <div>
                        {topics.map((topic, index) => (
                          <Tag key={index} color={COLORS[index]}>
                            {topic}
                          </Tag>
                        ))}
                      </div>
                      <div>{description || ' '}</div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={24}>
            <Divider />
            <Pagination
              current={+page}
              defaultPageSize={+per_page}
              onChange={this.onChange}
              total={+total_count}
            />
          </Col>
        </Row>
      </Layout>
    );
  }
}
