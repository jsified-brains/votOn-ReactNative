import { StyleSheet } from 'react-native';
export type styleType = {
    card: any;
    cardFooter: any;
    content: any;
    footerText: any;
    iconContainer: any;
};

export const styles: styleType = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'transparent'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardFooter: {
        backgroundColor: 'transparent',
        padding: 0,
        width: 100
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
        padding: 0,
        marginTop: -10
    },
    iconContainer: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#fff',
        height: 55,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
