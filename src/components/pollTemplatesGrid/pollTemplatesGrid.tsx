import React from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { chunk } from 'lodash';
import { PollTemplate} from '../pollTemplate/pollTemplate';
import { DeviceOrientation, AppDeviceInfo } from '../../modules/AppDeviceInfo/AppDeviceInfo';
import { pollTemplateType } from '../../interfacesAndTypes';

const pollTemplates: pollTemplateType[] = [
    {
        id: 1,
        icon: 'meeting',
        templateText: 'Where to meet?'
    },
    {
        id: 2,
        icon: 'cinemaPopcorn',
        templateText: 'Which movie to go?'
    },
    {
        id: 3,
        icon : 'beach',
        templateText: 'Which one should I buy?'
    },
    {
        id: 4,
        icon: 'meeting',
        templateText: 'Where to meet again?'
    },
    {
        id: 5,
        icon: 'cinemaPopcorn',
        templateText: 'Which movie to go again?'
    }
];

interface CompState {
    orientation: DeviceOrientation
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
interface CompProps {
    navigation:any
}

export class PollTemplatesGrid extends React.Component<CompProps, CompState>   {
    constructor(props: CompProps) {
        super(props);
        this.state = {
          orientation: AppDeviceInfo.orientation()
        };
        Dimensions.addEventListener('change', this.onOrientationChange);
    }

    templatesRow = (templateChunk: pollTemplateType[] ) => {

        return templateChunk.map(template => {
            return (
                <Col key={template.id} style={styles.col}>
                    <PollTemplate pollTemplate={template}  navigation={this.props.navigation} />
                </Col>
            );
        });
    }

    render() {
        const cols = this.state.orientation === DeviceOrientation.landscape ? 4 : 3;

        return (
            <Grid style={styles.grid} >
                {
                    chunk(pollTemplates, cols).map((templateChunk, index) => {
                    // pollTemplates.map((templateChunk) => {
                        return (
                            <Row style={styles.row} key={index}>
                            {  this.templatesRow(templateChunk) }
                            </Row>
                        );
                    })
                }
            </Grid>

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
        backgroundColor: 'transparent'
    },
    col: {
        backgroundColor: 'transparent'
    },
    grid: {
        backgroundColor: 'transparent',
        alignItems: 'center'
    }
});
