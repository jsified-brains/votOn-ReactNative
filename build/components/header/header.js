import React from 'react';
import { View, Text } from 'react-native';
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (React.createElement(View, { style: viewStyle },
        React.createElement(Text, { style: textStyle },
            " ",
            props.headerText,
            " ")));
};
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
export { Header };
//# sourceMappingURL=header.js.map