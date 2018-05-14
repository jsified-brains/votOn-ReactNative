import { StyleSheet } from 'react-native';
import { AppDeviceInfo } from '../../../modules';

export type HeaderStyle = {
    container: any;
    titleText: any;
    bodyContainer: any;
    logoContainer: any;
    logoImg: any;
    subtitleContainer: any;
    rightBlock: any;
    circleIcon: any
};

export const headerStyles: HeaderStyle = StyleSheet.create({
    container : {
        backgroundColor: '#a4c1c1',
        height: 100
    },
    titleText: {
        color: '#ff1a75',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyContainer: {
        marginTop: 25,
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    logoContainer : {
        flex: 3
    },
    logoImg: {
        width: 500,
        height: AppDeviceInfo.dimensions.width * 0.5
    },
    subtitleContainer : {
        flex: 2,
        marginTop: -5,
        marginLeft: 80
    },
    rightBlock: {
        flex: 1,
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center'
    },
    circleIcon: {
        fontSize: 50,
        color: '#476b6b'
    }
});
