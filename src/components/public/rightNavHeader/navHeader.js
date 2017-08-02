import React from 'react';
import styles from './navHeader.css';
import { Icon } from 'antd';

const navHeadr = ({ iconType, navTitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navTitle}>
          <Icon type={iconType} /> {navTitle}
        </div>
      </div>
    </div>
  );
};

navHeadr.propTypes = {
};

export default navHeadr;
