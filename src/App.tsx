import React from 'react';
// import { StyleSheet } from 'react-native';
import AppStackNavigator from './screens/router';
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Hello !!! Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu. Ok!!</Text>
      // 
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
