import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';

// import { chunk } from 'lodash';
import { DeviceOrientation, AppDeviceInfo } from '../../modules/AppDeviceInfo/AppDeviceInfo';
import { Content, Card, CardItem, Icon, Right, Text, View } from 'native-base';


const pollOptions = [
    {
        description : 'Option 1'
    },
    {
        description : 'Option 2'
    },
    {
        description : 'Option 3'
    },
    {
        description : 'Option 4'
    }
];


interface CompState {
    orientation: DeviceOrientation
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
interface CompProps {
    // navigation:any
}

export class OptionsGrid extends React.Component<CompProps, CompState>   {
    constructor(props: CompProps) {
        super(props);
        this.state = {
          orientation: AppDeviceInfo.orientation()
        };
        Dimensions.addEventListener('change', this.onOrientationChange);
    }


    optionsGrid = () => {

        const { row, colDesc, colIcon} = styles;

        return pollOptions.map((option, index) => {
            return (
                    <Card key={index}>
                        <CardItem>
                            <View style={row}>
                                <View style={colDesc}>
                                    <Text>{option.description}</Text>
                                </View>
                                <View style={colIcon}>
                                    <Right>
                                        <Icon name="trash" style={{color: 'red'}} />
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


    onOrientationChange = () => {
        this.setState({
            orientation: AppDeviceInfo.orientation()
        });
    }


}

const styles = StyleSheet.create({
    row : {
        flex: 1,
        flexDirection: 'row'
    },
    colDesc: {
        flex: 7
    },
    colIcon: {
        flex: 1
    },
    icon: {
        color: 'red'
    }
});
