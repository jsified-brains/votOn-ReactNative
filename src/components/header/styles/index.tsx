import { Platform } from 'react-native';
import { iOSStyles }  from './headerStyles.ios';
import { winStyles }   from './headerStyles.windows';
import { androidStyles }   from './headerStyles.android';
import { headerStyles, HeaderStyle } from './headerStyles.common';

const getPlatformSpecificStyles = (): HeaderStyle => {
    let platformStyles: HeaderStyle;

    switch (Platform.OS) {
        case 'ios':
            platformStyles = {...headerStyles, ...iOSStyles };
            break;
        case 'android':
            platformStyles =  {...headerStyles, ...androidStyles};
            break;
        case 'windows':
            platformStyles = {...headerStyles, ...winStyles};
            break;
        default:
            platformStyles = headerStyles;
            break;
    }

    return platformStyles;
};

export const styles = getPlatformSpecificStyles();

// import { styles } from './styles';
// export default styles;
