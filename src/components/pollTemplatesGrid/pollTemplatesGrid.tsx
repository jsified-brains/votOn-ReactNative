import React from 'react';
import {StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { chunk } from 'lodash';
import { PollTemplate, pollTemplateType} from '../pollTemplate/pollTemplate';

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
        id: 1,
        icon: 'meeting',
        templateText: 'Where to meet?'
    },
    {
        id: 2,
        icon: 'cinemaPopcorn',
        templateText: 'Which movie to go?'
    }
];

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

export const PollTemplatesGrid = () => {

    const templatesRow = (templateChunk: pollTemplateType[] ) => {

        return templateChunk.map(template => {
            return (
                <Col key={template.id} style={styles.col}>
                    <PollTemplate pollTemplate={template} />
                </Col>
            );
        });
    };

    return (
        <Grid>
            {
                chunk(pollTemplates, 3).map((templateChunk, index) => {
                // pollTemplates.map((templateChunk) => {
                    return (
                        <Row style={styles.row} key={index}>
                          {  templatesRow(templateChunk) }
                        </Row>
                    );
                })
            }
        </Grid>

    );
};

const styles = StyleSheet.create({
    row : {
        backgroundColor: 'transparent'
    },
    col: {
        backgroundColor: 'transparent'
    },
    grid: {
        flex: 1,
        backgroundColor: '#7d5e3c'
    }
});
