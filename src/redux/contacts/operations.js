import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const addContact = createAsyncThunk(
  'users/addContacts',
  async (contacts, thunkAPI) => {
    try {
      const response = await contactsApi.post('/contacts', { contacts });
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
export const deliteContact = createAsyncThunk(
  'users/deliteContact',
  async (id, thunkAPI) => {
    try {
      const response = await contactsApi.delete(`/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
export const fetchContacts = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await contactsApi.get('/contacts');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
