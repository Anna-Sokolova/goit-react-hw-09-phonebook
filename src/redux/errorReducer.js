import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth/auth-actions';
import contactActions from './contacts/contacts-actions';

//destructuring
const {
  loginAuthError,
  registerAuthError,
  logoutAuthError,
  getCurrentUserError,
} = authActions;

const {
  fetchContactError,
  addContactError,
  deleteContactError,
} = contactActions;

//редьюсер для обработки ошибки
export const errorReducer = createReducer(null, {
  [registerAuthError]: (_, action) => console.error(action.payload),
  [loginAuthError]: (_, action) => console.error(action.payload),
  [logoutAuthError]: (_, action) => console.error(action.payload),
  [getCurrentUserError]: (_, action) => console.error(action.payload),
  [fetchContactError]: (_, action) => console.error(action.payload),
  [addContactError]: (_, action) => console.error(action.payload),
  [deleteContactError]: (_, action) => console.error(action.payload),
});
