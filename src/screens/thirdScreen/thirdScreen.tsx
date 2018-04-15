import React from 'react';
import { ViewStyle, Text, View , TextStyle} from 'react-native';

const ThirdScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text>Test</Text>
            </View>
            <View style={styles.appBody}>
                <Text style={styles.announceHeader}>
                    This is third screen
                </Text>
            </View>
        </View>

    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    } as ViewStyle,

    announceHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    announceDesc: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    announceFooter: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    appHeader: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#a3a3c2'
    },

    appBody: {
        flex: 11,
        justifyContent: 'center' as 'center'
    },

    appFooter: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#c29869'
    }
};

export default ThirdScreen ;
