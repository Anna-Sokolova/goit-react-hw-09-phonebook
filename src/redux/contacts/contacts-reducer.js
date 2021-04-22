import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contacts-actions';
import { loadingReducer } from '../loadingReducer';
import { errorReducer } from '../errorReducer';

//destructuring
const {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} = contactActions;

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});



const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactsReducer;
