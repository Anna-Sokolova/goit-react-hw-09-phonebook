import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import operationsAuth from '../../redux/auth/auth-operations';
import selectorsAuth from '../../redux/auth/auth-selectors';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  //useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //useSelector as mapStateToProps
  const isLoadingUser = useSelector(state => selectorsAuth.getLoading(state));

  //useDispatch as mapDispatchToProps
  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (email.trim() === '' || password.trim() === '') {
        alert('Please enter valid information!');
        reset();
        return;
      }
      // dispatch как замена onLogin({ email, password });
      dispatch(operationsAuth.logIn({ email, password }));
      reset();
    },
    [dispatch, email, password],
  );

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoadingUser && <Spinner />}
      {!isLoadingUser && (
        <>
          <Title title="Авторизация пользователя" />
          <div className={styles.loginForm}>
            <fieldset>
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
              >
                <label className={styles.label}>
                  Почта
                  <input
                    className={styles.formInput}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label className={styles.label}>
                  Пароль
                  <input
                    className={styles.formInput}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <button type="submit" className={styles.btnSubmit}>
                  Войти
                </button>
              </form>
            </fieldset>
          </div>
        </>
      )}
    </>
  );
}
