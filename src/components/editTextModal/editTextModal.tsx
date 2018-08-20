import React from 'react';
import { Icon, Text, View, Input} from 'native-base';
import { styles } from './styles/styles';
import { Modal } from 'react-native';

interface CompState {
    isEditing: boolean,
    editedValue: string
}

// https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/
interface CompProps {
    textToEdit: string,
    onSubmit: (v: string) => any,
    textColor: string,
    title: string,
    visible: boolean
}

export class EditTextModal extends React.Component<CompProps, CompState>   {
    constructor(props: CompProps) {
        super(props);
        this.state = {
            isEditing: false,
            editedValue: this.props.textToEdit
        };
    }
    // const { row, colDesc, colIcon} = styles;

    render() {
        // tslint:disable-next-line:no-null-keyword
        let theDOM = null;
        if (!this.state.isEditing) {
            theDOM = this.textMode();
        } else {
            theDOM = this.textMode();
        }

        return theDOM;
    }

    textMode = () => {
        return <View style={{marginTop: 22}}>
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={this.props.visible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text style={{color: this.props.textColor}}> Hello  World </Text>
                            </View>
                            <View>
                                <View>
                                    <Input
                                        style={{color: this.props.textColor}}
                                        value={ this.state.editedValue }
                                        onChangeText={ (val) => this.handleTextChange(val) }
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
            </View>;
    }

    editMode = () => {
        return <View style={styles.rowContainer}>
                    <View style={styles.leftSection}>
                        <View style={styles.inputBox}>
                            <Input
                                style={{color: this.props.textColor}}
                                value={ this.state.editedValue }
                                onChangeText={ (val) => this.handleTextChange(val) }
                            />
                        </View>
                    </View>
                    <View style={styles.rightSection}>
                        <View style={styles.rightContainer} >
                            <View style={styles.iconSpace} >
                                <Icon active
                                    onPress={(val) => this.onSubmit(val)}
                                    style={{fontSize: 17, color: 'green'}}
                                    type='FontAwesome' name='check-circle' />
                            </View>
                            <View style={styles.iconSpace} >
                                <Icon active
                                    onPress={() => this.onCancel()}
                                    style={{fontSize: 17, color: 'red'}}
                                    type='FontAwesome' name='times-circle' />
                            </View>
                        </View>
                    </View>
            </View>;
    }

    onTextEditToggle = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleTextChange = (val: string) => {
        this.setState({
            editedValue: val
        });
    }

    onSubmit = (val: string) => {
        this.setState({
            editedValue: val
        });
        this.props.onSubmit(this.state.editedValue);
        this.onTextEditToggle();
    }

    onCancel = () => {
        // this.setState({
        //     editedValue: val
        // });
        // this.props.onSubmit();
        this.onTextEditToggle();
    }
}
