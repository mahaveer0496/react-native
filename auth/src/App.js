import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './common/index.common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : null
    }
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBPaxdx--LKMV72o6T4RvHZfufMHwBsL1c",
      authDomain: "auth-3d369.firebaseapp.com",
      databaseURL: "https://auth-3d369.firebaseio.com",
      projectId: "auth-3d369",
      storageBucket: "",
      messagingSenderId: "168255874121"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {    
    console.log(this.state);
    if(this.state.loggedIn) {
      return (<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>)
    } else {
      return <LoginForm />
    }

  }
  render() {
    return (
      <View>
        <Header text="Auth" />
        {this.renderContent()}
      </View>
    );
  }
};

export default App;