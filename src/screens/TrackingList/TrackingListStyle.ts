import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  tabsContainer: {
    width: '100%',
    marginVertical: SIZES.medium,
    alignItems: 'center',
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  tabText: {
    color: COLORS.gray2,
  },
});

export default styles;
