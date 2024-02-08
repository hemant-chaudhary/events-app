import {StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  infoContainer: {
    width: '100%',
    textAlign: 'center',
  },
  entry: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  eventName: {fontSize: 30, textAlign: 'center', color: COLORS.tertiary},
  eventLocation: {fontSize: 24, textAlign: 'center', color: COLORS.secondary},
  buttonContainer: {
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default styles;
