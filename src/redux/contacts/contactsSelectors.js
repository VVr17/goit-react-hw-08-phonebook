import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectors';

const selectContacts = state => state.contacts.items;
const selectLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;
const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const contactsSelectors = {
  selectContacts,
  selectLoading,
  selectError,
  selectFilteredContacts,
};
