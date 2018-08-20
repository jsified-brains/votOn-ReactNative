import React from 'react';
import { Dimensions } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';

// import { chunk } from 'lodash';
import { DeviceOrientation, AppDeviceInfo } from '../../modules/AppDeviceInfo/AppDeviceInfo';
import { Content, Card, CardItem, Icon, Right, Text, View, Button } from 'native-base';
import { AppReduxStateType } from '../../redux/reducers/AppReducers';
import { connect } from 'react-redux';
import { Poll } from '../../interfacesTypesEnums';
import { styles } from './styles/styles';
import { bindActionCreators } from 'redux';
import { UpdateNewPollOptionsAction } from '../../redux/actions';

interface CompState {
    orientation: DeviceOrientation
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
interface CompProps {
    newlyCreatedPoll: Poll,
    updatePollOptions: (pollTemplate: Poll) => any,
}

class OptionsGrid extends React.Component<CompProps, CompState>   {
    constructor(props: CompProps) {
        super(props);
        this.state = {
          orientation: AppDeviceInfo.orientation()
        };
        Dimensions.addEventListener('change', this.onOrientationChange);
    }

    optionsGrid = () => {

        const { row, colDesc, colIcon} = styles;
        const options = this.props.newlyCreatedPoll.options;

        return options.map((option, index) => {
            return (
                    <Card key={index}>
                        <CardItem>
                            <View style={row}>
                                <View style={colDesc}>
                                    <Text>{option.description}</Text>
                                </View>
                                <View style={colIcon}>
                                    <Right>
                                        <Button transparent
                                            onPress={() => this.removePollOption(option.description)}>
                                            <Icon type='FontAwesome' name='trash' style={{color: 'red'}}/>
                                        </Button>
                                    </Right>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
            );
        });
    }

    render() {
        return (
            <Content>
             { this.optionsGrid() }
            </Content>
        );
    }

    removePollOption = (optionToRemove: string) => {
        const updatedOptions = [
            ...this.props.newlyCreatedPoll.options
        ];

        const updatedPoll: Poll = {...this.props.newlyCreatedPoll,
                options: updatedOptions.filter((option) => option.description !== optionToRemove)
        };
        (this.props as any).updatePollOptions(updatedPoll);

    }

    onOrientationChange = () => {
        this.setState({
            orientation: AppDeviceInfo.orientation()
        });
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

export default connect(mapStateToProps, mapDispatchToProps)(OptionsGrid);
