import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home/home';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello !!! Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
