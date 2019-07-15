import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Button} from './src/components/common/';


class App extends Component {
  render(){
    return(
      <View>
        <Header  title="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;