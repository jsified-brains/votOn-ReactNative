import React from 'react';
import { Text, View } from 'react-native';
// import {Header} from '../../components';
const SecondScreen = () => {
    return (React.createElement(View, { style: styles.container },
        React.createElement(View, { style: styles.appHeader },
            React.createElement(Text, null, "2ND SCREEN")),
        React.createElement(View, { style: styles.appBody },
            React.createElement(Text, { style: styles.announceHeader }, "This is second screen"))));
};
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    announceHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    announceDesc: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10
    },
    announceFooter: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10
    },
    appHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a3a3c2'
    },
    appBody: {
        flex: 11,
        justifyContent: 'center'
    },
    appFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c29869'
    },
};
export default SecondScreen;
//# sourceMappingURL=secondScreen.js.map