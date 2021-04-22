import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <ul className={styles.authNavList}>
    <li>
      <NavLink
        to={routes.register}
        exact
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Регистрация
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.login}
        exact
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Логин
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
