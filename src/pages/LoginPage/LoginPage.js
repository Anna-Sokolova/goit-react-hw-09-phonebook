import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import operationsAuth from '../../redux/auth/auth-operations';
import selectorsAuth from '../../redux/auth/auth-selectors';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email.trim() === '' || this.state.password.trim() === '') {
      alert('Please enter valid information!');
      this.reset();
      return;
    }
    this.props.onLogin(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        {this.props.isLoadingUser && <Spinner />}
        <Title title="Авторизация пользователя" />
        <div className={styles.loginForm}>
          <fieldset>
            <form
              onSubmit={this.handleSubmit}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
    );
  }
}

const mapStateToProps = state => ({
  isLoadingUser: selectorsAuth.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(operationsAuth.logIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
