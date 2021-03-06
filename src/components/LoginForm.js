import React from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';

class LoginForm extends React.Component{
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password) 
            
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }
    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }
    onLoginFail() {
        this.setState({
            error: 'Authentication Faild',
            loading: false
        })
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        
                        placeholder = "user@gmail.com"
                        onChangeText = {email => this.setState({email})}
                        value = {this.state.email}
                        label={'Email'}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secure = {true}
                        placeholder= "password"
                        onChangeText = {password => this.setState({password})}
                        value = {this.state.password}
                        label={'Password'}
                    />
                </CardSection>
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                <CardSection>
                   {this.renderButton()} 
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    error: {
        fontSize: 20,
        alignSelf:'center',
        color: 'red'
    }
})


export default LoginForm;