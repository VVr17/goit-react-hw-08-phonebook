import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(
        ` There are no contacts found. Please, check your access and try again`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      toast.success(
        `${data.name.toUpperCase()} successfully added to CONTACTS`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    const updatedContact = null;

    try {
      const { data } = await axios.delete(
        `/contacts/${contactId}`,
        updatedContact
      );
      toast.info(`${data.name.toUpperCase()} deleted from CONTACTS`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ updatedContact, id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, updatedContact);
      toast.info(`${data.name.toUpperCase()} successfully updated`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
