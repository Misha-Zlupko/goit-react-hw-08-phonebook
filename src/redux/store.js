import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersisterReduser = persistReducer(authPersistConfig, authReducer);
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authPersisterReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
