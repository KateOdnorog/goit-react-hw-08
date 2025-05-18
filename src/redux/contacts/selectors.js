import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        number.includes(filter.trim().toLowerCase())
      );
    });
  }
);
