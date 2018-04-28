import { TabNavigator, StackNavigator } from 'react-navigation';
import SecondScreen from './secondScreen/secondScreen';
import HomeScreen from './home/home';

export const AppTabNavigator = TabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SecondScreen: {
        screen: SecondScreen
    }
});

export const AppStackNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SecondScreen: {
        screen: SecondScreen
    }
}, {    headerMode: 'none'  });
