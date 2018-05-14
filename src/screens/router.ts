import { StackNavigator } from 'react-navigation';
import {AddPollOptions, SelectPollTemplate} from './';
import HomeScreen from './home/home';

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
