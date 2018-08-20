import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../styles/themes';

export const styles = StyleSheet.create({

    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    leftSection: {
        flex: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 2,
        marginLeft: 0
    },
    rightSection: {
        flex: 2,
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    iconSpace :  {
        padding: 1,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2
    },
    inputBox: {
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd'
    },
    cancelIcon: {
        color: 'red'
    },
    editIcon : {
        backgroundColor: 'transparent',
        padding: 0,
        borderWidth: 0
    }
});
