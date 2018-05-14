import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Dimensions, Animated} from 'react-native';
import { AppHeader } from '../../components';
import { Container, Content,  Text, List, ListItem, Button} from 'native-base';

const { width } = Dimensions.get('window');

const photos = [
    { uri: 'https://cdn.skillflow.io/resources/img/skillflowninja.png' },
    { uri: 'https://mileung.com/static/media/me.cd114855.png' },
    { uri: 'https://cdn.skillflow.io/resources/img/skillflowninja.png' },
    { uri: 'https://mileung.com/static/media/me.cd114855.png' },
    { uri: 'https://cdn.skillflow.io/resources/img/skillflowninja.png' }
];

export default class HomeScreen extends Component {
    scrollX = new Animated.Value(0);

    render() {
        const { lcontainer, listText  } = styles;
        let position = Animated.divide(this.scrollX, width);

        return (
            <Container style={lcontainer}>
                <AppHeader />

                <Content>
                    <List>
                        <ListItem>
                            <Text style={listText}>Test Content  </Text>
                        </ListItem>
                    </List>
                    <Text style={listText}>Below is the list to scroll the images  </Text>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{ width, height: width }}
                        >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
                            )}
                        scrollEventThrottle={20}
                    >
                        {photos.map((source, i) => {
                            return (
                                <Image
                                    key={i}
                                    style={{ width, height: width }}
                                    source={source}
                                />
                            );
                        })}
                    </ScrollView>
                    </View>
                        <View
                            style={{ flexDirection: 'row' }}
                        >
                            {photos.map((_, i) => {
                                let opacity = position.interpolate({
                                    inputRange: [i - 1, i, i + 1],
                                    outputRange: [0.3, 1, 0.3],
                                    extrapolate: 'clamp'
                                });
                                return (
                                    <Animated.View
                                        key={i}
                                        style={{ opacity, height: 10, width: 10, backgroundColor: '#f78900', margin: 8, borderRadius: 5 }}
                                    />
                                );
                            })}
                        </View>
                    </View>
                    <Button
                    onPress={() => (this.props as any).navigation.navigate('SecondScreen', {realm: 'blah'})} >
                    <Text>Second Screen</Text>
                    </Button>
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
