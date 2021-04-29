import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
TextInput.defaultProps.selectionColor = '#1a73e8';

export class GmailTouchable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: true,
      height: 30,
    };
  }

  handleFocus = () => {
    this.setState({isFocused: true});
  };
  handleBlur = () => {
    //for hiding the text if it is empty
    if (this.props.hideLabel) {
      this.setState({isFocused: true});
    } else {
      this.setState({isFocused: false});
    }
  };

  render() {
    const {
      label,
      isRow = false,
      onPress,
      containerStyle,
      ...props
    } = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 35 : 10,
      fontSize: !isFocused ? 17 : 14,
      color: !isFocused ? '#aaa' : '#887b9b',
      marginLeft: 30,
      marginBottom: !isFocused ? 20 : 0,
      zIndex: !isFocused ? 0 : 9,
      paddingLeft: !isFocused ? 0 : 5,
      paddingRight: !isFocused ? 0 : 5,
      backgroundColor: !isFocused ? null : '#fcf0f2',
    };

    const inputContainer = {
      marginTop: 20,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderRadius: 4,
      height: 50,
      width: '100%',
      borderColor: !isFocused ? '#aaa' : '#887b9b',
      borderTopWidth: !isFocused ? 2 : 2,
      zIndex: 1,
      overflow: 'visible',
    };
    const parent = {
      flex: isRow ? 1 : null,
      height: 70,
      zIndex: 2,
    };

    return (
      <TouchableOpacity style={[parent, containerStyle]} onPress={onPress}>
        <Text style={labelStyle}>{label}</Text>
        <View style={inputContainer}>
          <TextInput
            {...props}
            style={{
              height: 50,
              fontSize: 20,
              color: '#000',
              marginLeft: 20,
              marginBottom: 10,
            }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
