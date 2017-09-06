import React from 'react';
import styles from './blogContent.css';
import { Avatar } from 'antd';


const articleSelect = ({ blogDetails }) => {
  return (
      <div className={styles.blogWrap}>
        <div className={styles.blogTitleContainer}>
          <h1 className={styles.blogTitle}>JavaScript函数节流和函数防抖之间的区别</h1>
        </div>
        <div className={styles.avatar}>
          <Avatar size="large" icon="user" />
          <span className={styles.avatarText}>潘小闲也</span>
          <span>·</span>
          <span className={styles.blogCreateTime}>2017-09-03 22:28:12</span>
        </div>
        <div className={styles.blogContent}>
           <div dangerouslySetInnerHTML={{__html:blogDetails}}/>
        </div>
      </div>
  );
};

articleSelect.propTypes = {};

export default articleSelect;
