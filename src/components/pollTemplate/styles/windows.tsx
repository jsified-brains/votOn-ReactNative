import { StyleSheet } from 'react-native';
import { styleType } from './styles';

export const WindowsStyles: styleType = StyleSheet.create({
    card: {
        padding: 10
    },
    iconContainer: {
        backgroundColor: '#F0EFEA',
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5
    },
    cardFooter: {
        backgroundColor: 'rgba(52, 52, 52, 1.0)'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
        padding: 0,
        marginTop: -10
    }
});
