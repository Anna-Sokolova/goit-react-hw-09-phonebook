import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.jpg'; //по-нормальному аватар будет приходить с бд и вытягивать его нужно будет через селектор типа getUserInfo
import styles from './UserMenu.module.css';


export default function UserMenu() {
  //useSelector as mapStateToProps
  const name = useSelector(state => authSelectors.getUserName(state));

  //useDispatch as mapDispatchToProps
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());

  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>Добро пожаловать, {name}</span>
      <img
        src={defaultAvatar}
        alt={name}
        width="46"
        className={styles.avatar}
      />
      <button type="button" className={styles.btn} onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}
