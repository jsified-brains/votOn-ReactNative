import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import { templateIcons, ITemplateIcons } from '../../assets/img/templateIcons';
import styles  from './styles';
import { getRandomVibrantColor } from '../../styles/AppStyles';
import { PollTemplateType } from '../../interfacesTypesEnums';
import { PollTemplateSelectedAction } from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppReduxStateType } from '../../redux/reducers/AppReducers';



interface CompProps {
    pollTemplate: PollTemplateType,
    navigation: any,
    pollTemplateSelected: (pollTemplate: PollTemplateType) => any,
    activePollTemplate: PollTemplateType
}

interface CompState {

}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

class PollTemplate extends Component<CompProps, CompState> {

    constructor(props: CompProps) {
        super(props);
    }

    render() {
        const templateIcon: (keyof ITemplateIcons) = this.props.pollTemplate.icon;
        // const { navigate } = (this.props as any).navigation;

        return (
            <Content contentContainerStyle={styles.content} >
                <Card style={styles.card}>
                    <CardItem cardBody
                    onPress={() => this.onPollTemplateSelect()}
                    button
                    style={[ styles.iconContainer, { backgroundColor: getRandomVibrantColor() }]}>
                        <Image source={templateIcons[templateIcon]}
                            style={[{width: 55, height: 40} ]}/>
                    </CardItem>
                </Card>
                <Text style={styles.footerText}>{ this.props.pollTemplate.templateText }</Text>
            </Content>
        );
    }

    onPollTemplateSelect = () => {
        (this.props as any).pollTemplateSelected(this.props.pollTemplate);
        this.props.navigation.navigate('AddPollOptionsScreen');
    }

}

const mapStateToProps = (state: AppReduxStateType) => {
    return {
        activePollTemplate: state.activePollTemplate
    }
};

// const mapDispatchToProps = () => {
//     return {
//         pollTemplateSelected: PollTemplateSelectedAction
//     };
// }

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        pollTemplateSelected: PollTemplateSelectedAction
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(PollTemplate)
