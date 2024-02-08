import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import type {Event} from '../types';
import {eventsData} from '../constants';

// Define the initial state using that type
const initialState: Array<Event> = eventsData;

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
