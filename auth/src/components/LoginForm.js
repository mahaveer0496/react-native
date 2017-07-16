import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './../common/index.common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      error: '',
      loading: false
    }
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }
  onButtonPress() {
    const {email, password} = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))      
      .catch(() => {
        this.setState({
          loading: false,
          error: 'Authentication failed'
        })
      })
    })
  }

  renderButton() {
    if(this.state.loading) {
      console.log(this.state.loading)
      return <Spinner size="small"/>
    } 
    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>)
  }
  
  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            value={this.state.email}
            onChangeText={email=> this.setState({email})}
            placeholder="user@something.com"
          />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry={true}
          label="Password"
          value={this.state.password}
          onChangeText={password=> this.setState({password})}
          placeholder="password"
        />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  }
}

export default LoginForm;