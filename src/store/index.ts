import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reducers/globalReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
    globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
