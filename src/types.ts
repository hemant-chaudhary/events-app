export type EnrtyTpe = 'paid' | 'free';
import {StackNavigationProp} from '@react-navigation/stack';

export type Event = {
  id: number;
  name: String;
  location: string;
  image: string;
  entry: EnrtyTpe;
  sequence: number;
  tracking: boolean;
};

export type UserTrackingList = {
  name: string;
  trackingEvents: Array<Event>;
};

export type TrackingList = Array<UserTrackingList>;

export type User = {
  name: string;
};

export type RootStackParamList = {
  Home: undefined;
  Details: {event: Event};
  UserTrackingList: undefined;
};

export type HomePropsNavigation = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsPropsNavigation = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type UserTrackingListPropsNavigation = StackNavigationProp<
  RootStackParamList,
  'UserTrackingList'
>;
