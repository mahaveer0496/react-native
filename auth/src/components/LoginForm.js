import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './../common/index.common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: ''
    }
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
          label="Password"
          value={this.state.email}
          onChangeText={(email)=> this.setState({email})}
          placeholder="Enter your password"
        />
        </CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;