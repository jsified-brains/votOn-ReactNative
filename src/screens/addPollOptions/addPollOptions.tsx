import React, { Component } from 'react';
import { Container, Content,  Text, Item, Input, Card, CardItem } from 'native-base';
import {AppHeader} from '../../components';
import { StyleSheet, View, Image } from 'react-native';
import { AppTheme } from '../../styles/themes';
import { pollTemplateType } from '../../interfacesAndTypes';
import { templateIcons, ITemplateIcons } from '../../assets/img/templateIcons';
import { getRandomVibrantColor } from '../../styles/AppStyles';





// interface CompProps {
//     pollTemplate: pollTemplateType
// }

export class AddPollOptions extends Component  {

    

    render() {
        const {content, title, bodyContent, titleText, bodySections, topSection, bottomSection,
                    topSectionContainer, topSectionLeft, topSectionRight, pollQuestion,
                    iconContainer } = styles;

        const pollTemplate: pollTemplateType =    (this.props as any).navigation.state.params.pollTemplate;
        const templateIcon: (keyof ITemplateIcons) = pollTemplate.icon;
        return (
            <Container>
                <AppHeader />

                
                <Content contentContainerStyle={content}>
                    <View  style={title}>
                        <Text style={titleText}>Add poll choices/options</Text>
                    </View>
                    <View style={bodyContent}>
                        <View style={bodySections}>
                            <View style={topSection}>
                                <View style={topSectionContainer} >
                                    <View style={topSectionLeft} >
                                        <View style={[iconContainer, { backgroundColor: getRandomVibrantColor() }]}>

                                                <Image source={templateIcons[templateIcon]}
                                                                        style={[{width: 55, height: 40} ]}/>

                                        </View>


                                    </View>
                                    <View style={topSectionRight}>
                                        <Item regular  >
                                            <Input placeholder={ pollTemplate.templateText } style={pollQuestion}/>
                                        </Item>
                                    </View>
                                </View>
                            </View>


                            <View style={bottomSection}>
                                <Text>Section 2</Text>
                            </View>
                        </View>
                    </View>
                </Content>
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
        alignItems: 'stretch'
    },
    bodySections: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    topSection: {
        flex: 2
    },
    topSectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    topSectionLeft: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 10
        // borderColor: 'red', 
        // borderWidth: 2,
        // borderStyle: 'solid'
    },
    topSectionRight: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    bottomSection: {
        flex: 6,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pollQuestion: {
        color: '#FAF9F0',
        fontSize: 18
    },
    iconContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderColor: '#fff',
        justifyContent: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5
    }
    
});
