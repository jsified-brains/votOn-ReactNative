import { headerStyles, HeaderStyle } from './headerStyles.common';
import { StyleSheet } from 'react-native';
import { AppDeviceInfo } from '../../../modules';

const windowsStyles = StyleSheet.create({
    bodyContainer: {
        marginTop: 25,
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    logoContainer : {
        flex: 4
    },
    logoImg: {
        width: 500,
        height: AppDeviceInfo.dimensions.width * 0.5
    },
    subtitleContainer : {
        flex: 2,
        marginTop: -5,
        marginLeft: 80
    }
});

export const winStyles: HeaderStyle =  {...headerStyles, ...windowsStyles };
