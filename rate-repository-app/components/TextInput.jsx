import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formControl: {
        marginBottom: 15,
        padding: 15,
        width: 'auto',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 4,
        fontSize: 16
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.formControl];

    return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;