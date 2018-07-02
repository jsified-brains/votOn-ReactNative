import React, { Component } from 'react';
import { Container, Content,  Text } from 'native-base';
import {AppHeader} from '../../components';
import { StyleSheet } from 'react-native';
import { AppTheme } from '../../styles/themes';
import { View } from 'react-native';
import { pollTemplateType } from '../../interfacesAndTypes';
import { ITemplateIcons } from '../../assets/img/templateIcons';


interface CompProps {
    pollTemplate: pollTemplateType
}

export class AddPollOptions extends Component<CompProps, {}> {
    constructor(props: CompProps) {
        super(props);
    }

    render() {
        const {content, title, bodyContent, titleText} = styles;
        const templateIcon: (keyof ITemplateIcons) = this.props.pollTemplate.icon;
        return (
            <Container>
                <AppHeader />

                
                <Content contentContainerStyle={content}>
                    <View  style={title}>
                        <Text style={titleText}>Add poll choices/options</Text>
                    </View>
                    <View style={bodyContent}>
                            <Text>Body Contents</Text>
                    </View>
                </Content>
                {/* <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
            </Container>
        );
    }

};

const styles = StyleSheet.create({

    content: {
        flex: 1,
        backgroundColor: AppTheme.currentTheme.bodyBGColor.dark
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    titleText: {
        color: '#17A7D5', 
        fontSize: 30
    },
    bodyContent: {
        flex: 9, 

        justifyContent: 'center',
        alignItems: 'center'
    }
});
