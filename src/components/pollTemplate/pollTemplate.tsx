import React from 'react';
import { Image, Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import { templateIcons, ITemplateIcons, AppPollTemplates } from '../../assets/img/templateIcons';
import styles  from './styles';
import { getRandomVibrantColor } from '../../styles/AppStyles';

export type pollTemplateType = {
    id: number,
    icon: AppPollTemplates,
    templateText: string
};

interface CompProps {
    pollTemplate: pollTemplateType
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

export class PollTemplate extends React.Component<CompProps, {}> {

    constructor(props: CompProps) {
        super(props);
    }

    render() {
        const templateIcon: (keyof ITemplateIcons) = this.props.pollTemplate.icon;
        return (
            <Content contentContainerStyle={styles.content} >
                <Card style={styles.card}>
                    <CardItem cardBody style={[ styles.iconContainer, { backgroundColor: getRandomVibrantColor() }]}>
                        <Image source={templateIcons[templateIcon]}
                            style={[{width: 55, height: 40} ]}/>
                    </CardItem>
                </Card>
                <Text style={styles.footerText}>{ this.props.pollTemplate.templateText }</Text>
            </Content>
        );
    }

}
