import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
} from './../common/index.common';

import {
  emailChanged,
  passwordChanged,
  loginUser,
} from './../redux/actions/index.action';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  renderButton() {
    const { email, password, loading, loginUser } = this.props;
    if (loading) {
      console.log(loading);
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={() => loginUser({ email, password })}>Log In</Button>
    );
  }
  onEmailChange(email) {
    this.props.emailChanged(email);
  }
  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  render() {
    const { email, password } = this.props;
    console.log(email, password);
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            onChangeText={this.onEmailChange}
            placeholder="user@something.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            value={password}
            label="Password"
            onChangeText={this.onPasswordChange}
            placeholder="password"
          />
        </CardSection>
        {/* <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>  */}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
};

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  loading: auth.loading,
});

const mapDispatchToProps = dispatch => ({
  emailChanged: email => dispatch(emailChanged(email)),
  passwordChanged: password => dispatch(passwordChanged(password)),
  loginUser: ({ email, password }) => dispatch(loginUser({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
