import React from 'react';
import styles from './articleSelect.css';

const articleSelect = ({ article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>{article.blogTitle}</p>
          <p className={styles.subTitle}>{article.createTime} 阅读量:{article.blogReadNum} {article.blogType}</p>
        </div>
      </div>
      <div className={styles.thumbnail}>
        <img src={article.blogThumbnail} height={125} width={200}/>
      </div>
    </div>
  );
};

articleSelect.propTypes = {};

export default articleSelect;
