import React, { Component } from 'react';
import { Container, Content,  Text, Item, Input, Icon, Button } from 'native-base';
import { Image, View } from 'react-native';

import OptionsGrid from '../optionsGrid/optionsGrid';
import { Poll } from '../../interfacesTypesEnums';
import { templateIcons, ITemplateIcons } from '../../assets/img/templateIcons';

import { getRandomVibrantColor } from '../../styles/AppStyles';
import styles from './styles';
import { connect } from 'react-redux';
import { AppReduxStateType } from '../../redux/reducers/AppReducers';
import { bindActionCreators } from 'redux';
import { UpdateNewPollOptionsAction } from '../../redux/actions';
// import { EditTextModal } from '..';

interface CompProps {
    navigation: any,
    newlyCreatedPoll: Poll,
    updatePollOptions: (pollTemplate: Poll) => any,
}

interface CompState {
    newPollOption: string,
    modalVisible: boolean
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

class AddPollOptions extends Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props);
        this.state = {
            newPollOption: 'option A',
            modalVisible: false
        };
    }

    render() {
        const {content, title, bodyContent, titleText, bodySections, topSection, addOptionInputSection,
                    topSectionContainer, topSectionLeft, topSectionRight, pollQuestion,
                    iconContainer, optionsGrid, addIconButton } = styles;

        const navigation =  (this.props as any).navigation;

        // const pollTemplate: PollTemplateType =    navigation.getParam('pollTemplate', null); // if pollTemplate param doesn't exist, return null
        const newlyCreatedPoll: Poll = this.props.newlyCreatedPoll;
        const templateIcon: (keyof ITemplateIcons) = newlyCreatedPoll.basePollTemplate.icon;
        if (!newlyCreatedPoll) {
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
                                                style={[{width: 35, height: 20} ]} />
                                        </View>
                                    </View>
                                    <View style={topSectionRight}>
                                       {newlyCreatedPoll.question}
                                        {/* <EditTextModal
                                            visible = {true}
                                            textColor = '#FFF'
                                            textToEdit = {newlyCreatedPoll.question}
                                            onSubmit = {this.onPollQuestionEdit} title = 'asdas' /> */}
                                    </View>
                                </View>
                            </View>
                            <View style={optionsGrid}>
                                <Item >
                                    <OptionsGrid />
                                </Item>
                            </View>
                            <View style={addOptionInputSection}>
                                    <Item regular >
                                        <Input
                                        value={ this.state.newPollOption }
                                        onChangeText={ (evt) => this.updateNewPollOption(evt) }
                                        style={pollQuestion} />
                                        <Button transparent
                                            onPress={() => this.addPollOption()}>
                                            <Icon type='FontAwesome' name='plus-circle' style={addIconButton}/>
                                        </Button>
                                    </Item>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }

    updateNewPollOption = (option: string) => {
        this.setState({
            newPollOption: option
        });
    }

    addPollOption = () => {
        const updatedOptions = [
            ...this.props.newlyCreatedPoll.options
        ];
        updatedOptions.push({
            description: this.state.newPollOption,
            index: 0
        });

        const updatedPoll: Poll = {...this.props.newlyCreatedPoll,
                options: updatedOptions
        };
        (this.props as any).updatePollOptions(updatedPoll);

    }

    onPollQuestionEdit = (editedQuestion: string) => {
        const updatedPoll: Poll = {...this.props.newlyCreatedPoll,
            question: editedQuestion
        };
        (this.props as any).updatePollOptions(updatedPoll);
    }

    renderEditPollQuestionModal = () => {
        return (
                <View style={{marginTop: 22}}>
                  <View>
                    <Text>Hello World!</Text>
                  </View>
                </View>
          );
    }

}

const mapStateToProps = (state: AppReduxStateType) => {
    return {
        newlyCreatedPoll: state.newlyCreatedPoll
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        updatePollOptions: UpdateNewPollOptionsAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPollOptions);
