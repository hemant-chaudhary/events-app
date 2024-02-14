import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import type {Event, TrackingList} from '../types';
import {eventsData} from '../constants';

// Define the initial state using that type
const initialState: TrackingList = [];

export const trackerSlice = createSlice({
  name: 'trackingList',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      if (state.length) {
        let eventAdded = false;
        state.map(obj => {
          if (obj.name === action.payload.username) {
            obj.trackingEvents.map(event => {
              if (event.id === action.payload.event.id) {
                eventAdded = true;
              }
              return event;
            });
            if (!eventAdded) {
              eventAdded = true;
              obj.trackingEvents = [
                ...obj.trackingEvents,
                action.payload.event,
              ];
            }
          }
          return obj;
        });
        if (!eventAdded) {
          state = [
            ...state,
            {
              name: action.payload.username,
              trackingEvents: [action.payload.event],
            },
          ];
        }
        return state;
      } else {
        return [
          {
            name: action.payload.username,
            trackingEvents: [action.payload.event],
          },
        ];
      }
    },
    deleteEvent: (state, action) => {
      state.map(userTracker => {
        if ((userTracker.name = action.payload.username)) {
          userTracker.trackingEvents = userTracker.trackingEvents.filter(
            event => event.id != action.payload.event.id,
          );
        }
        return userTracker;
      });
      console.log(state[0].trackingEvents);
      return state;
    },
  },
});

export const {addEvent, deleteEvent} = trackerSlice.actions;

export default trackerSlice.reducer;
