import { StackNavigator } from "react-navigation";
import SecondScreen from "./secondScreen/secondScreen";
import HomeScreen from "./home/home";

const AppTabNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SecondScreen: {
        screen: SecondScreen
    }
});

export default AppTabNavigator ;
