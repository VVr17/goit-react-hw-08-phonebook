import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

// Using Immer for immutable state changes
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // first fetch contacts from API
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
      toast.error(
        ` There are no contacts found. Please, check your access and try again`
      );
    },

    // add contact to Api
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      toast.success(
        `${payload.name.toUpperCase()} successfully added to CONTACTS`
      );
    },
    [addContact.rejected]: handleRejected,

    // delete contact from Api
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1);
      toast.info(`${payload.name.toUpperCase()} deleted from CONTACTS`);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
