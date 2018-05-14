import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AppHeader } from '../../components';
import { AppTheme } from '../../styles/themes';
import { Container, Content ,  Text, List, ListItem, Button } from 'native-base'; //
     // Left, Right, Body, Header, Icon,
     // Title, Subtitle } from 'native-base';

export default class HomeScreen extends Component {
    render() {
        const { lcontainer, listText, button  } = styles;
        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    <List>
                        <ListItem>
                            <Text style={listText}>Test Content</Text>
                            <Button style={button}
                                onPress={() => (this.props as any).navigation.navigate('SelectPollTemplate', {realm: 'blah'})} >
                                <Text>Create a Poll</Text>
                            </Button>
                        </ListItem>
                    </List>
                    {/* <PollTemplatesGrid /> */}
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
        },
        button: {
            backgroundColor: AppTheme.brandColors.medium
        }
});
