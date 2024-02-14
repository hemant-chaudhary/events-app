import {Event} from '../types';
export const eventsData: Array<Event> = [
  {
    id: 1,
    name: 'Metallica Concert',
    location: 'Palace Grounds',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=10',
    tracking: false,
  },
  {
    id: 2,
    name: 'Saree Exhibition',
    location: 'Malleswaram Grounds',
    entry: 'free',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=1',
    tracking: false,
  },
  {
    id: 3,
    name: 'Wine tasting event',
    location: 'Links Brewery',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=2',
    tracking: false,
  },
  {
    id: 4,
    name: 'Startups Meet',
    location: 'Kanteerava Indoor Stadium',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=3',
    tracking: false,
  },
  {
    id: 5,
    name: 'Summer Noon Party',
    location: 'Kumara Park',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=4',
    tracking: false,
  },
  {
    id: 6,
    name: 'Rock and Roll nights',
    location: ' Sarjapur Road',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=5',
    tracking: false,
  },
  {
    id: 7,
    name: 'Barbecue Fridays',
    location: 'Whitefield',
    entry: 'paid',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=6',
    tracking: false,
  },
  {
    id: 8,
    name: 'Summer workshop',
    location: 'Indiranagar',
    entry: 'free',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=7',
    tracking: false,
  },
  {
    id: 9,
    name: 'Impressions & Expressions',
    location: 'MG Road',
    entry: 'free',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=8',
    tracking: false,
  },
  {
    id: 10,
    name: 'Italian carnival',
    location: 'Electronic City',
    entry: 'free',
    sequence: 0,
    image: 'https://picsum.photos/400/200?random=9',
    tracking: false,
  },
];

const COLORS = {
  primary: '#Ffa500',
  secondary: '#7C00CB',
  tertiary: '#F01A73',

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
  blue: '#0000ff',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export {COLORS, SIZES, SHADOWS};
