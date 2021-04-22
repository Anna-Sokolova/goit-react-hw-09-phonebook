import { createAction } from '@reduxjs/toolkit';

//экшены для получения всех контактов
const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

//экшены для добавления контакта
const addContactRequest = createAction('contacts/AddRequest');
const addContactSuccess = createAction('contacts/AddSuccess');
const addContactError = createAction('contacts/AddError');

//экшены для удаления контакта
const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

//экшен для фильтра
const changeFilter = createAction('contacts/changeFilter');

export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
