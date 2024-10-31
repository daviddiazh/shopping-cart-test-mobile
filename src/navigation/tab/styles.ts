import {Platform, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import { SPACING } from '../../theme/spacing';

export const styles = StyleSheet.create({
  navigatorContainerStyles: {
    paddingTop: scale(SPACING[8]),
    // marginVertical: Platform.OS === 'ios' ? scale(SPACING['16']) : 0,
    marginTop: 0,
    marginBottom: Platform.OS === 'ios' ? scale(SPACING['10']) : 0,
  },
  tabBarLabelStyles: {
    fontSize: scale(SPACING[12]),
    lineHeight: scale(SPACING[20]),
    // fontFamily: FONT_FAMILY.regular,
  },
});
