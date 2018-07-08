import React, { Component } from 'react';
import { Container, Content,  Text, Item, Input, Icon, Button } from 'native-base';
import { Image, View } from 'react-native';

import { OptionsGrid} from '../../components';
import { PollTemplateType } from '../../interfacesTypesEnums';
import { templateIcons, ITemplateIcons } from '../../assets/img/templateIcons';

import { getRandomVibrantColor } from '../../styles/AppStyles';
import styles from './styles';
import { connect } from 'react-redux';
import { AppReduxStateType } from '../../redux/reducers/AppReducers';



interface CompProps {
    navigation: any,
    activePollTemplate: PollTemplateType,
}

interface CompState {

}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

class AddPollOptions extends Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props);
    }

    render() {
        const {content, title, bodyContent, titleText, bodySections, topSection, addOptionInputSection,
                    topSectionContainer, topSectionLeft, topSectionRight, pollQuestion,
                    iconContainer, optionsGrid, addIconButton } = styles;

        const navigation =  (this.props as any).navigation;

        // const pollTemplate: PollTemplateType =    navigation.getParam('pollTemplate', null); // if pollTemplate param doesn't exist, return null
        const pollTemplate: PollTemplateType = this.props.activePollTemplate;
        const templateIcon: (keyof ITemplateIcons) = pollTemplate.icon;
        if (!pollTemplate) {
            return navigation.navigate('SelectPollTemplate');
        }
        return (
            
            <Container>
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


                            <View style={addOptionInputSection}>
                                    <Item regular >
                                        <Input placeholder="option 1" style={pollQuestion}/>
                                        <Button transparent>
                                            <Icon type="FontAwesome" name="plus-circle" style={addIconButton}/>
                                        </Button>
                                    </Item>
                            </View>
                            <View style={optionsGrid}>
                                <Item >
                                    <OptionsGrid />
                                </Item>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }

};


const mapStateToProps = (state: AppReduxStateType) => {
    return {
        activePollTemplate: state.activePollTemplate
    }
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPollOptions)
