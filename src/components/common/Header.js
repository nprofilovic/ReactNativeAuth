import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Header extends Component {
    render() {
        const {textStyle, viewStyle} = styles
        return (
            <View style={viewStyle}>
                <Text style={textStyle}> {this.props.title} </Text>
                
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }, 
    viewStyle: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:45,
        height: 90,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
    }
  });


export default Header;
