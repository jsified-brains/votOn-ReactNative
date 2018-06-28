import { StackNavigator } from 'react-navigation';
import {AddPollOptions, SelectPollTemplate} from './';
import {HomeScreen} from './home/home';
// import { AppRegistry } from 'react-native';

export const AppStackNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SelectPollTemplate: {
        screen: SelectPollTemplate
    },
    AddPollOptions: {
        screen: AddPollOptions
    }
}, {    headerMode: 'none'  });

// AppRegistry.registerComponent('AppRoot', () => AppStackNavigator);
