import { StyleSheet } from 'react-native';
import Fonts from './fonts';
import * as Colors from './colors';

const _Styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAllCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenterSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  link: {
    ...Fonts.Button,
    color: Colors.Primary,
  },
});

export default _Styles;
