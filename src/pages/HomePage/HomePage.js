import React from 'react';
import Title from '../../components/Title';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.wrapper}>
    <Title title="Домашняя страница приложения">
      <span role="img" aria-label="Иконка тюльпан">
        🌷
      </span>
    </Title>
  </div>
);

export default HomePage;
