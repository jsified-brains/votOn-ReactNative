// Credits - https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

import { Dimensions, ScaledSize } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export enum DeviceOrientation {
    portrait = 'portrait',
    landscape = 'landscape'
}

export enum DeviceType {
    tablet = 'tablet',
    phone = 'phone'
}

export class AppDeviceInfo {

    static dimensions: ScaledSize = Dimensions.get('screen');

    static orientation = (): DeviceOrientation => {
        const deviceDimensions = Dimensions.get('screen');
        return deviceDimensions.height >= deviceDimensions.width
                ? DeviceOrientation.portrait : DeviceOrientation.landscape;
    }

    static deviceType = (): DeviceType => DeviceInfo.isTablet ? DeviceType.tablet : DeviceType.phone;

}
