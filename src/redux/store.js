import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersisterReduser = persistReducer(authConfig, authReducer);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authPersisterReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
