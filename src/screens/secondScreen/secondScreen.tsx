import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {AppHeader} from '../../components';

const SecondScreen = () => {
    return (
        <Container>
            <AppHeader />
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );

};

export default SecondScreen ;
