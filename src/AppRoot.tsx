import React from 'react';
// import { StyleSheet } from 'react-native';
import { AppStackNavigator } from './screens/router';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';

interface CompState {
  isLoading: boolean
}

interface CompProps {
}

export default class AppRoot extends React.Component<CompProps, CompState>   {
  constructor(props: CompProps = {}) {
    super(props);
    this.state = {
      isLoading: false
    };
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
      // <View style={styles.container}>
      //   <Text>Hello !!! Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu. Ok!!</Text>
      // </View>
      <AppStackNavigator />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
