import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image} from 'react-native';
import { AppHeader } from '../../components';
import { Container, Content,  Text, List, ListItem} from 'native-base';
     // Left, Right, Body, Header, Icon,
     // Title, Subtitle } from 'native-base';

export default class HomeScreen extends Component {
    render() {
        const { lcontainer, listText  } = styles;
        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    <List>
                        <ListItem>
                            <Text style={listText}>Test Content  </Text>

                            {/*<Button*/}
                                {/*onPress={() => (this.props as any).navigation.navigate('SecondScreen', {realm: 'blah'})} >*/}
                                {/*<Text>Second Screen</Text>*/}
                            {/*</Button>*/}
                        </ListItem>
                    </List>
                    <Text style={listText}>Below is the list to scroll the images  </Text>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={10}
                        pagingEnabled
                    >
                        {/*<Image source={require('./Users/nchaudhary/Downloads/birdhouses/750_Country House.JPG')} />*/}
                        <Text style={listText}> Welcome to React Native this is 1 </Text>
                        <Text style={listText}> Welcome to React Native 2</Text>
                        <Text style={listText}> Welcome to React Native 3 </Text>
                        <Image source={require('/Users/nchaudhary/Downloads/birdhouses/782.JPG')} />
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eee',
//         justifyContent: 'center'
//       },
//     header: {
//         flex: 1
//     },
//     content: {
//         flex: 6,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }

        lHeader : {
            backgroundColor: '#669999'
        },
        lTitleText: {
            color: '#ff1a75',
            fontSize: 18
        },
        lcontainer: {
            backgroundColor: '#1f2e2e'
        },
        listText: {
            color: '#e0ebeb',
            fontSize: 18
        }
});
