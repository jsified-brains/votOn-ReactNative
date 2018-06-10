import React, { Component } from 'react';
import { StyleSheet, Dimensions, View} from 'react-native';
import { AppHeader, ScrollViews } from '../../components';
import { Container, Content,  Text, List, ListItem, Button} from 'native-base';  //search scrollview here

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {

    render() {
        const { lcontainer, listText  } = styles;

        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    <List>
                        <ListItem>
                            <Text style={listText}>Test Content  </Text>
                        </ListItem>
                    </List>
                    <Text style={listText}>Below is the list to scroll the images  </Text>

                        <View
                            style={{ width, height: width}}
                        >
                    <ScrollViews />
                        </View>
                    <Button style={{marginBottom: 12, marginTop: 12}}
                    onPress={() => (this.props as any).navigation.navigate('SecondScreen', {realm: 'blah'})} >
                    <Text>Second Screen</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

        lHeader : {
            backgroundColor: '#669999'
        },
        lTitleText: {
            color: '#ff1a75',
            fontSize: 18
        },
        lcontainer: {
            backgroundColor: '#1f2e2e'
        },
        listText: {
            color: '#e0ebeb',
            fontSize: 18
        }
});
