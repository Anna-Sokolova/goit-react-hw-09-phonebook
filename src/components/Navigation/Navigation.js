import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to={routes.home}
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        {isAuthenticated && (
          <NavLink
            to={routes.contacts}
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Contacts
          </NavLink>
        )}
      </li>
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
