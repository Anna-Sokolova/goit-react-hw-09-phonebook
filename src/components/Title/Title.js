import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
};

Title.defaultProps = {
  title: '',
  children: [],
};

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
