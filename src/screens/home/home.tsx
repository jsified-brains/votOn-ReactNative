import React, { Component } from 'react';
import { StyleSheet, Dimensions, View} from 'react-native';
import { AppHeader, ScrollViews } from '../../components';
import { Container, Content,  Text, Button} from 'native-base';  //search scrollview here
import { AppTheme } from '../../styles/themes/index';

const { width } = Dimensions.get('window');
export class HomeScreen extends Component {
    render() {
        const { lcontainer, button, contentsContainer,  
                featuresSection, bottomSection, buttonText } = styles;
        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    <View style={contentsContainer}>
                        <View style={featuresSection}>
                            <ScrollViews />
                        </View>
                        <View style={bottomSection}>
                            <Button block style={button}
                                onPress={() => (this.props as any).navigation.navigate('SelectPollTemplate', {realm: 'blah'})} >
                                        <Text style={buttonText}>Create a Poll</Text>
                            </Button>
                        </View>
                    </View>
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
        },
        buttonText: {
            fontSize: 20
        },
        contentsContainer : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        featuresSection : {
            flex: 6,
            width: width, 
            height: width,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bottomSection : {
            flex: 3,
            justifyContent: 'center'
        }
});
