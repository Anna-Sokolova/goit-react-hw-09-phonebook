import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import operationsAuth from '../../redux/auth/auth-operations';
import selectorsAuth from '../../redux/auth/auth-selectors';
import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.reset();

    alert(`
    Спасибо за регистрацию!
    Логин: ${this.state.name}
    Почта: ${this.state.email}
  `);
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        {this.props.isLoadingUser && <Spinner />}
        <Title title="Регистрация пользователя" />
        <div className={styles.registerForm}>
          <fieldset>
            <form
              onSubmit={this.handleSubmit}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
}

const mapStateToProps = state => ({
  isLoadingUser: selectorsAuth.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(operationsAuth.register(data)),
});

//сокращенная запись как вариант
// const mapDispatchToProps = {
//   onRegister: dispatch(operationsAuth.register),
// };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
