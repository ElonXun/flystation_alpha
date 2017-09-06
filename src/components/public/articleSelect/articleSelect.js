import React from 'react';
import styles from './articleSelect.css';

const articleSelect = ({ article }) => {
  const createAt = article.meta
  return (

    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>{article.blogTitle}</p>
          <p className={styles.subTitle}>{article.createAt}
            <span style={{marginRight:'4px'}}/>阅读量:{article.blogReview}{article.blogTape}
          </p>
        </div>
      </div>
      <div className={styles.thumbnail}>
        <img src={article.blogPicture} height={125} width={200}/>
      </div>
    </div>
  );
};

articleSelect.propTypes = {};

export default articleSelect;
