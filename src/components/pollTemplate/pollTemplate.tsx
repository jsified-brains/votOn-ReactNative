import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { Content, Card, CardItem } from 'native-base';
import { templateIcons, ITemplateIcons } from '../../assets/img/templateIcons';
import styles  from './styles';
import { getRandomVibrantColor } from '../../styles/AppStyles';
import { pollTemplateType } from '../../interfacesAndTypes';



interface CompProps {
    pollTemplate: pollTemplateType
    navigation: any
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

export class PollTemplate extends Component<CompProps, {}> {

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
                    onPress={() => this.props.navigation.navigate('AddPollOptions', { pollTemplate: this.props.pollTemplate})}
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

}
