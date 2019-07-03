import React, { Component } from 'react';
import { AppHeader, PollTemplatesGrid } from '../../components';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import { AppTheme } from '../../styles/themes';

export class SelectPollTemplate extends Component {
    
    render() {
        const {content, container} = styles;
        return (
            <Container style={container}>
                <AppHeader />

                <Content contentContainerStyle={content}>

                        <PollTemplatesGrid  navigation={(this.props as any).navigation} />

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

// export default SelectPollTemplate ;
