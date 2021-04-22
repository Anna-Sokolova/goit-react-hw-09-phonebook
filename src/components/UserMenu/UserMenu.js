import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.jpg';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.wrapper}>
    <span className={styles.name}>Добро пожаловать, {name}</span>
    <img src={avatar} alt={name} width="46" className={styles.avatar} />
    <button type="button" className={styles.btn} onClick={onLogout}>
      Выйти
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
