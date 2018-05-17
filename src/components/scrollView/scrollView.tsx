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


const ScrollViews = () => {
    let position = Animated.divide(new Animated.Value(0), width);
    return (
        <View>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: new Animated.Value(0)} } }]
                            )}
            scrollEventThrottle={20}
        >
            {photos.map((source, i) => {
                return (
                    <Image
                        resizeMode="contain"
                        key={i}
                        style={{ width: 350, height: 350 }}
                        source={source}
                    />
                );
            })}
        </ScrollView>
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
