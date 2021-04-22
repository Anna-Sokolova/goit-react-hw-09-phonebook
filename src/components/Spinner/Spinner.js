import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';
import { css } from '@emotion/core';
import styles from './Spinner.module.css';

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%; -50%);
`;

const Spinner = () => (
  <div className={styles.spinner}>
    <RiseLoader css={override} size={20} color={'#BD10E0'} />
  </div>
);

export default Spinner;
