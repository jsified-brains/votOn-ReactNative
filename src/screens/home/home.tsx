import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AppHeader, PollTemplatesGrid } from '../../components';
import { Container, Content} from 'native-base'; // ,  Text, List, ListItem, Button
     // Left, Right, Body, Header, Icon,
     // Title, Subtitle } from 'native-base';

export default class HomeScreen extends Component {
    render() {
        const { lcontainer  } = styles;
        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    {/* <List>
                        <ListItem>
                            <Text style={listText}>Test Content</Text>
                            <Button
                                onPress={() => (this.props as any).navigation.navigate('SecondScreen', {realm: 'blah'})} >
                                <Text>Create a Poll</Text>
                            </Button>
                        </ListItem>
                    </List> */}
                    <PollTemplatesGrid />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eee',
//         justifyContent: 'center'
//       },
//     header: {
//         flex: 1
//     },
//     content: {
//         flex: 6,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }

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
