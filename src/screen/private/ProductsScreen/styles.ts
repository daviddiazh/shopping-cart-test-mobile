import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../../theme';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
        flex: 1,
    },
    title: {
        fontSize: SPACING[20],
        fontWeight: '700',
        color: COLORS.dark,
        paddingVertical: SPACING[16],
        paddingHorizontal: SPACING[8],
    },
    cards: {
        flexDirection: 'column',
        paddingHorizontal: SPACING[8],
        gap: SPACING[12],
    },
    card: {
        backgroundColor: COLORS.light,
        borderRadius: SPACING[8],
        padding: SPACING[8],
        alignItems: 'flex-start',
        gap: SPACING[8],
        flexDirection: 'row',
    },
    productName: {
        fontSize: scale(SPACING[12] + 1),
        fontWeight: '600',
        color: COLORS.dark,
        paddingBottom: SPACING[4] + 2,
        maxWidth: '100%',
    },
    productDescription: {
        fontSize: scale(SPACING[10] + 1),
        color: COLORS.dark,
        paddingBottom: SPACING[4] + 2,
        maxWidth: '85%',
    },
    price: {
        fontSize: scale(SPACING[16] - 2),
        fontWeight: '700',
        color: 'rgb(0, 166, 80)',
    },
});
