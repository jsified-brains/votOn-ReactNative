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
        paddingTop: 5
    },
    titleText: {
        color: AppTheme.currentTheme.screenTitleColor,
        fontSize: 20
    },
    bodyContent: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    bodySections: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    topSection: {
        flex: 1,
        borderColor: AppTheme.currentTheme.bodyBGColor.dark,
        borderWidth: 2,
        borderStyle: 'solid'
    },
    topSectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    topSectionLeft: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 2,
        marginLeft: 10
    },
    addIconButton: {
        color: AppTheme.currentTheme.screenTitleColor,
        fontSize: 40
    },
    topSectionRight: {
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 5
    },
    addOptionInputSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    optionsGrid: {
        flex: 7,
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
    }
});
