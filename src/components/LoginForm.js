import React from 'react';
import { TextInput } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';


class LoginForm extends React.Component{
    state = {
        text: ''
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        onChangeText = {text => this.setState({text: text})}
                        value = {this.state.text}
                        label={'Email'}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        onChangeText = {text => this.setState({text: text})}
                        value = {this.state.text}
                        label={'Password'}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;