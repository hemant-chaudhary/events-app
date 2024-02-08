export type EnrtyTpe = 'paid' | 'free';

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
