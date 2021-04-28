import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';
import styles from './Navigation.module.css';

export default function Navigation() {
  //useSelector as mapStateToProps
  const isAuthorized = useSelector(state => authSelectors.getAuthorized(state));

  return (
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
          {isAuthorized && (
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
}
