import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secure}) => {
    const {container, input, labelStyle} = styles
    return(
        <View style={container}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry = {secure}
                placeholder={placeholder}
                autoCorrect={false}
                style={input} 
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize:18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Input;