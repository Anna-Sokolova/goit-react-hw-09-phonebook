import React from 'react';
import { connect } from 'react-redux';
import Container from '../Container';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </Container>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
