import { headerStyles, HeaderStyle } from './headerStyles.common';
import { StyleSheet } from 'react-native';
import { AppDeviceInfo } from '../../../modules';

export const iOS_Styles = StyleSheet.create({
    bodyContainer: {
        marginTop: 15,
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    logoImg: {
        width: 160,
        height: AppDeviceInfo.dimensions.width * 0.15
    },
    subtitleContainer : {
        flex: 2,
        marginTop: 10,
        marginLeft: 80
    }
});

export const iOSStyles: HeaderStyle =  {...headerStyles, ...iOS_Styles };
