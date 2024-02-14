import {StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin: 10,
  },
  imageContainer: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 50,
  },
  infoContainer: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    width: '50%',
  },
  entry: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  paidEntry: {
    color: COLORS.primary,
  },
  freeEntry: {
    color: COLORS.secondary,
  },
});

export default styles;
