import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common/index.common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBPaxdx--LKMV72o6T4RvHZfufMHwBsL1c",
      authDomain: "auth-3d369.firebaseapp.com",
      databaseURL: "https://auth-3d369.firebaseio.com",
      projectId: "auth-3d369",
      storageBucket: "",
      messagingSenderId: "168255874121"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header text="Auth" />
        <LoginForm />
      </View>
    );
  }
};

export default App;