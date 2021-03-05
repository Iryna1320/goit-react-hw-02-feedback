import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.statistics_title}>Statistic</p>
      <ul className={styles.statistics_list}>
        <li className={styles.statistics__item}>Good: {good}</li>
        <li className={styles.statistics__item}>Neutral: {neutral}</li>
        <li className={styles.statistics__item}>Bad: {bad}</li>
        <li className={styles.statistics__item}>Total: {total()}</li>
        <li className={styles.statistics__item}>
          Positive feedback: {positivePercentage()}
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
