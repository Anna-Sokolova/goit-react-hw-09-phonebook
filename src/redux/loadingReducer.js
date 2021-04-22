import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth/auth-actions';
import contactActions from './contacts/contacts-actions';

//destructuring
const {
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
} = authActions;

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactActions;

//редьюсер для спиннера
export const loadingReducer = createReducer(false, {
  [registerAuthRequest]: () => true,
  [registerAuthSuccess]: () => false,
  [registerAuthError]: () => false,
  [loginAuthRequest]: () => true,
  [loginAuthSuccess]: () => false,
  [loginAuthError]: () => false,
  [logoutAuthRequest]: () => true,
  [logoutAuthSuccess]: () => false,
  [logoutAuthError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

