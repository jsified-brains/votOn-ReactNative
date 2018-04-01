import React, { Component } from 'react';
import { ViewStyle, View , TextStyle, Button} from 'react-native';
import {Header} from '../../components';
import { StackNavigator } from "react-navigation";
import SecondScreen from "../secondScreen/secondScreen";


class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.appHeader}>
                    <Header headerText="votOn"></Header>
                </View>
                <View style={styles.appBody}>
                    <Button
                        onPress={() => this.props.navigation('SecondScreen',{realm:'blah'})}
                        title="Go to Second Screen"
                    />
                </View>
            </View>
        );
    }
}

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
    },
};


const myscreens = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    SecondScreen:{
        screen: SecondScreen,
    },
});

export default myscreens ;
