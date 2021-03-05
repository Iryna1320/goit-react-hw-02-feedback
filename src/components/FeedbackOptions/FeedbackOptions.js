import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const nameButton = Object.keys(options);

  return nameButton.map(button => (
    <button
      key={button}
      type="button"
      className={styles.button}
      onClick={() => onLeaveFeedback(button)}
    >
      {button}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
