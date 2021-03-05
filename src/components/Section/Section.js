import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={styles.sectionTitle}>{title}</h1>
      {children}
    </>
  );
};

export default Section;
