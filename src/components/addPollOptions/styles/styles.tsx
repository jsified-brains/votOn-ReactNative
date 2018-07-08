import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../styles/themes';
// export type styleType = {
//     card: any;
//     cardFooter: any;
//     content: any;
//     footerText: any;
//     iconContainer: any;
// };

export const styles = StyleSheet.create({

    content: {
        flex: 1,
        backgroundColor: AppTheme.currentTheme.bodyBGColor.dark
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    titleText: {
        color: AppTheme.currentTheme.screenTitleColor, 
        fontSize: 30
    },
    bodyContent: {
        flex: 9, 
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    bodySections: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    topSection: {
        flex: 2
    },
    topSectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    topSectionLeft: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 10
        // borderColor: 'red', 
        // borderWidth: 2,
        // borderStyle: 'solid'
    },
    addIconButton: {
        color: AppTheme.currentTheme.screenTitleColor,
        fontSize: 40
    },
    topSectionRight: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    addOptionInputSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    optionsGrid: {
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    pollQuestion: {
        color: '#FAF9F0',
        fontSize: 18
    },
    iconContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderColor: '#fff',
        justifyContent: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5
    },
    pollOptionInput: {
        color: '#FAF9F0',
        fontSize: 18
    },
});
