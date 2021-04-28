import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import operationsAuth from '../../redux/auth/auth-operations';
import selectorsAuth from '../../redux/auth/auth-selectors';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  //useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //useSelector as mapStateToProps
  const isLoadingUser = useSelector(state => selectorsAuth.getLoading(state));

  //useDispatch as mapDispatchToProps
  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Такого поля ${name} не существует`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      // dispatch как замена this.props.onRegister(this.state);
      dispatch(operationsAuth.register({ name, email, password }));
      reset();

      alert(`
      Спасибо за регистрацию!
      Логин: ${name}
      Почта: ${email}
      Пароль: ${password}
    `);
    },
    [name, email, password, dispatch],
  );

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoadingUser && <Spinner />}
      <Title title="Регистрация пользователя" />
      <div className={styles.registerForm}>
        <fieldset>
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <label className={styles.label}>
              Имя
              <input
                className={styles.formInput}
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </label>

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
              Зарегистрироваться
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
