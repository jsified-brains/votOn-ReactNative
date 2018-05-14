import React from 'react';
import { Image } from 'react-native';
import { Right, Body, Header, Icon,
            Title, Subtitle } from 'native-base';
import logo from '../../../assets/img/logo.png';
import { styles } from './styles';

const AppHeader = () => {

    const { container, bodyContainer, titleText, logoImg,
        logoContainer , subtitleContainer, rightBlock, circleIcon } = styles;

    return (
        <Header style={container}>
            <Body style={bodyContainer}>
                <Title style={logoContainer}>
                    <Image
                        style={logoImg}
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

export { AppHeader };
