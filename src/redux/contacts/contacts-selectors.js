import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getValueFilter = state => state.contacts.filter;

//added memoizee selector
const getFilteredByName = createSelector(
  [getAllContacts, getValueFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getAllContacts,
  getValueFilter,
  getFilteredByName,
};
