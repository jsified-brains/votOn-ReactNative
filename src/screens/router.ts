import { createStackNavigator } from 'react-navigation';
import  { AddPollOptionsScreen, SelectPollTemplate, HomeScreen} from './';

// import { AppRegistry } from 'react-native';


export const AppStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SelectPollTemplate: {
        screen: SelectPollTemplate
    },
    AddPollOptionsScreen: {
        screen: AddPollOptionsScreen
    }
}, {    headerMode: 'none'  });

// AppRegistry.registerComponent('AppRoot', () => AppStackNavigator);
