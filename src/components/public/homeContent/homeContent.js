import React from 'react';
import styles from './homeContent.css';
import { Tag, Row, Col } from 'antd';
import RightNavHeader from '../rightNavHeader/navHeader.js';
import ArticleSelect from '../articleSelect/articleSelect';

const Homepage = ({  blogs }) => {
  console.log('子组件里的 homepage  render')
  return (
    <div>
      <div className={styles.container}>
        <Row>
          <Col xs={0} md={3} />
          <Col xs={24} md={18}>
            <div className={styles.main}>
              <Row gutter={16}>
                <Col span={16}>
                  <div className={styles.wrap}>
                    {
                      blogs.map((val, index) => {
                        return (<ArticleSelect key={index} article={val} />);
                      })
                    }
                  </div>
                </Col>
                <Col span={8}>
                  <div className={styles.rightNav}>
                    <div className={styles.rightNavContainer}>
                      <RightNavHeader iconType={'like-o'} navTitle={'阅读最多'} />
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                    </div>
                    <div className={styles.rightNavContainer}>
                      <RightNavHeader iconType={'tag-o'} navTitle={'标签'} />
                      <div className={styles.tagsContainer}>
                        <Tag color="pink" className={styles.tagWrap}>pink</Tag>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={0} md={3} />
        </Row>
      </div>
    </div>
  );
};

Homepage.propTypes = {
};
export default Homepage;
