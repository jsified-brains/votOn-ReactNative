import React from 'react';
import { AppStackNavigator } from './screens/router';
import { View, Dimensions } from 'react-native';
import { Font, AppLoading } from 'expo';
import { DeviceOrientation, AppDeviceInfo } from './modules/AppDeviceInfo/AppDeviceInfo';

interface CompState {
  isLoading: boolean
  orientation: DeviceOrientation
}

interface CompProps {
}

export default class AppRoot extends React.Component<CompProps, CompState>   {

  constructor(props: CompProps = {}) {
    super(props);

    this.state = {
      isLoading: false,
      orientation: AppDeviceInfo.orientation()
    };

    Dimensions.addEventListener('change', this.onOrientationChange);
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <AppLoading />
        </View>
      );
    }

    return (
      <AppStackNavigator />
    );
  }

  onOrientationChange = () => {
    this.setState({
        orientation: AppDeviceInfo.orientation()
    });
  }
}
