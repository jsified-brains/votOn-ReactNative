import React from 'react';
import { AppHeader, PollTemplatesGrid } from '../../components';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import { AppTheme } from '../../styles/themes';

export const SelectPollTemplate = () => {
    const {content, container} = styles;
    return (
        <Container style={container}>
            <AppHeader />

            <Content contentContainerStyle={content}>
                <PollTemplatesGrid />
            </Content>
        </Container>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: AppTheme.currentTheme.bodyBGColor.dark,
        justifyContent: 'center'
    }
});

// export default SelectPollTemplate ;
