import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
};

const authPersisterReduser = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authPersisterReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});
