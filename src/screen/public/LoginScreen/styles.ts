import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../../theme';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: scale(SPACING[20]),
        fontWeight: '700',
        textAlign: 'left',
        paddingVertical: SPACING[16],
        paddingHorizontal: SPACING[8],
    },
    button: {
        backgroundColor: COLORS.primary.default,
        paddingVertical: SPACING[10],
        paddingHorizontal: SPACING[28],
        borderRadius: SPACING[8],
        marginVertical: SPACING[8],
    },
    buttonText: {
        color: COLORS.light,
        fontSize: scale(SPACING[12]),
        fontWeight: '700',
    },
});
