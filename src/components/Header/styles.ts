import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../theme';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        padding: scale(SPACING[8]),
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        color: COLORS.dark,
        fontSize: scale(SPACING[12]),
        fontWeight: '500',
    },
});
