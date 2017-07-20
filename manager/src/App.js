import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Header } from './common/index.common';

import LoginForm from './components/LoginForm';
import store from './redux/reducers/index.reducer';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: 'AIzaSyAikP_jROATnczfRLhV4XjwUbcm4r17CK4',
      authDomain: 'auth-69c53.firebaseapp.com',
      databaseURL: 'https://auth-69c53.firebaseio.com',
      projectId: 'auth-69c53',
      storageBucket: '',
      messagingSenderId: '106163191399',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header text="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
