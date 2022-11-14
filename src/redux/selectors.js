import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
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

const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserEmail = state => state.auth.user.email;
const selectUserName = state => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserEmail,
  selectUserName,
};
