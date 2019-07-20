import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/';
import LoginForm from './src/components/LoginForm';



class App extends Component {

componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyDqtQawSfGwSN1sJ5xEb9O-5FgtBCnGzJw',
    authDomain: 'auth-1c9b9.firebaseapp.com',
    databaseURL: 'https://auth-1c9b9.firebaseio.com',
    projectId: 'auth-1c9b9',
    storageBucket: '',
    messagingSenderId: '283135002309',
  })
}

  render(){
    return(
      <View>
        <Header  title="Authentication" />
        <LoginForm />
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