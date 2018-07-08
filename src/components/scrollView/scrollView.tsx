import React from 'react';
import { Image, ScrollView, Dimensions, Animated, View } from 'react-native';

const { width } = Dimensions.get('window');

const photos = [
    require('../../../assets/img/featureIcons/poll-clipboard.png'),
    require('../../../assets/img/featureIcons/share-ph-email.png'),
    require('../../../assets/img/featureIcons/4barchart.png'),
    require('../../../assets/img/featureIcons/fasterDecisions.png'),
    require('../../../assets/img/IconImgs/VeifiedSignIn.png'),
];


//implement auto scrolling

const scrollX = new Animated.Value(0);

const ScrollViews = () => {
    let position = Animated.divide(scrollX, width);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{ width: width*0.7, height: width*0.7 }}
            >
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX} } }]
                            )}
            scrollEventThrottle={20}
        >
            {photos.map((source, i) => {
                return (
                    <Image
                        resizeMode='contain'
                        key={i}
                        style={{ width: width*0.7, height: width*0.7 }}
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
    );
};

export { ScrollViews };
