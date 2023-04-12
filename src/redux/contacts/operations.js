import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const contactsApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
//   headers: { 'Content-Type': 'application/json' },
// });
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contacts, thunkAPI) => {
    console.log(contacts);
    try {
      const response = await axios.post('/contacts', contacts);
      console.log(response.data);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
export const deliteContact = createAsyncThunk(
  'contacts/deliteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
