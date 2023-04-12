import { createSelector } from '@reduxjs/toolkit';

export const getItem = state => state.users.contacts.items;
export const getError = state => state.users.contacts.error;
export const getLoading = state => state.users.contacts.isLoading;

export const selectFilter = state => state.users.filter;

export const selectFiltersContacts = createSelector(
  [getItem, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
