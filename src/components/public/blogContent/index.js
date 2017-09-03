import React from 'react';
import styles from './blogContent.css';
import { Avatar } from 'antd';


const articleSelect = ({ }) => {
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
          <p>
            JS闭包是什么？

            首先，放一个概念：

            函数  加  函数内部能访问到的局部变量   就组成了一个闭包

            那闭包又有什么作用呢？

            闭包常常用来「间接访问一个变量」。换句话说，「隐藏一个变量」。

            通常做法是 暴露一个访问器（函数），让别人可以「间接访问」那个变量。

            有这样一段代码：
          </p>
        </div>
      </div>
  );
};

articleSelect.propTypes = {};

export default articleSelect;
