import React, { Component } from 'react';
import {View , StyleSheet, Text, Button} from 'react-native';
import { Header } from '../../components';

export default class HomeScreen extends Component {
    render() {
        const { container, header, content } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <Header title='Awesomest App Ever!!!'  />
                </View>
                <View style={content}>
                    <Button
                        onPress={() => (this.props as any).navigation.navigate('SecondScreen', {realm: 'blah'})}
                        title='Go to the Second Screen'
                    />
                    <Text>Body</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center'
      },
    header: {
        flex: 1
    },
    content: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
