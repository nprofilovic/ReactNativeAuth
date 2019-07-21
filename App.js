import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/';
import LoginForm from './src/components/LoginForm';
import Button from './src/components/common/Button';
import Spinner from './src/components/common/Spinner';
import CardSection from './src/components/common/CardSection';
import Card from './src/components/common/Card';


class App extends Component {

  state = {
    logging: false,
  }


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqtQawSfGwSN1sJ5xEb9O-5FgtBCnGzJw',
      authDomain: 'auth-1c9b9.firebaseapp.com',
      databaseURL: 'https://auth-1c9b9.firebaseio.com',
      projectId: 'auth-1c9b9',
      storageBucket: '',
      messagingSenderId: '283135002309',
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ logging: true})
      } else {
        this.setState({logging: false});
      }
    });

  }

  renderContent() {
    switch (this.state.logging) {
      case true:
        return ( 
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
          
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
     
  }

  render(){
    return(
      <View>
        <Header  title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}



export default App;