import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';
import { loadingReducer } from '../loadingReducer';
import { errorReducer } from '../errorReducer';
//destructuring
const {
  loginAuthSuccess,
  loginAuthError,
  registerAuthSuccess,
  registerAuthError,
  logoutAuthSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

//изначальное состояние
const initialState = {
  name: null,
  email: null,
};

//редьюсер для обработки действий юзера
const userReducer = createReducer(initialState, {
  [registerAuthSuccess]: (_, action) => action.payload.user,
  [loginAuthSuccess]: (_, action) => action.payload.user,
  [logoutAuthSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, action) => action.payload,
});

//редьюсер для получения токена
const tokenReducer = createReducer(null, {
  [registerAuthSuccess]: (_, action) => action.payload.token,
  [loginAuthSuccess]: (_, action) => action.payload.token,
  [logoutAuthSuccess]: () => null,
});

//редьюсер для удовлетворения запроса авторизации
const isAuthenticatedReducer = createReducer(false, {
  [registerAuthSuccess]: () => true,
  [loginAuthSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerAuthError]: () => false,
  [loginAuthError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutAuthSuccess]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuthenticated: isAuthenticatedReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default authReducer;
