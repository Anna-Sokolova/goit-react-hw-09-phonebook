import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../Container';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  //useSelector as mapStateToProps
  const isAuthorized = useSelector(state => authSelectors.getAuthorized(state));

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Navigation />
          {isAuthorized ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
}
