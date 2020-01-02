import React, { Component } from 'react';
import { AppHeader } from '../../components';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import { AppTheme } from '../../styles/themes';
import AddPollOptions from '../../components/addPollOptions/addPollOptions'

export class AddPollOptionsScreen extends Component {
    
    render() {
        const {content, container} = styles;
        
        return ( <Container style={container}>
                <AppHeader />

                <Content contentContainerStyle={content}>
                    <AddPollOptions navigation={(this.props as any).navigation} />
                </Content>
            </Container>

        );
    }
};

const styles = StyleSheet.create({
    container: {
    },
    content: {
        flex: 1,
        backgroundColor: AppTheme.currentTheme.bodyBGColor.dark
    }
});
