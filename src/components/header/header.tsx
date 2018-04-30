import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Right, Body, Header, Icon,
            Title, Subtitle } from 'native-base';
import logo from '../../../assets/img/logo.png';

const AppHeader = () => {
    const { container, bodyContainer, titleText,
                logoContainer , subtitleContainer, rightBlock, circleIcon } = styles;

    return (
        <Header style={container}>
            <Body style={bodyContainer}>
                <Title style={logoContainer}>
                    <Image
                        style={{width: 160, height: 55}}
                        source={logo} />
                </Title>
                <Subtitle style={[subtitleContainer, titleText]}>...polls made simple</Subtitle>
            </Body>
            <Right style={rightBlock}>
                <Icon type='FontAwesome' name='user-circle' style={circleIcon}/>
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#a4c1c1',
        height: 100
    },
    titleText: {
        color: '#ff1a75',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyContainer: {
        marginTop: 15,
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    logoContainer : {
        flex: 3
    },
    subtitleContainer : {
        flex: 2,
        marginTop: 10,
        marginLeft: 80
    },
    rightBlock: {
        flex: 1,
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center'
    },
    circleIcon: {
        fontSize: 50,
        color: '#476b6b'
    }

});

export { AppHeader };
