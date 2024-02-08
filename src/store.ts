import {configureStore} from '@reduxjs/toolkit';
import eventReducer from './reducers/events';
import userReducer from './reducers/user';
import trackingListReducer from './reducers/trackingList';

export const store = configureStore({
  reducer: {
    events: eventReducer,
    user: userReducer,
    trackingList: trackingListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
