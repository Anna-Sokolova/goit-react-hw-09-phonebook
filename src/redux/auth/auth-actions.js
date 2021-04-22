import { createAction } from '@reduxjs/toolkit';

//1.экшены для регистрации
const registerAuthRequest = createAction('auth/registerRequest');
const registerAuthSuccess = createAction('auth/registerSuccess');
const registerAuthError = createAction('auth/registerError');

//2.экшены для логинизации
const loginAuthRequest = createAction('auth/loginRequest');
const loginAuthSuccess = createAction('auth/loginSuccess');
const loginAuthError = createAction('auth/loginError');

//3.экшены для кнопки Выйти (разлогиниться)
const logoutAuthRequest = createAction('auth/logoutRequest');
const logoutAuthSuccess = createAction('auth/logoutSuccess');
const logoutAuthError = createAction('auth/logoutError');

//4.экшены для получения текущего юзера или re-fresh
const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  logoutAuthError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
