import React from 'react';
import { View, Text } from 'react-native';

const Header = (props: CompProps) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Text style={textStyle}> { props.headerText} </Text>
        </View>
    );
};

interface CompProps {
    headerText: string
}


const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center'
    }
}
export { Header };