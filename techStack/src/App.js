import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './common/index.common';
import LibraryList from './components/LibraryList';

import store from './redux/reducers/index.reducer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header text="Tech Stack" />
          <LibraryList />          
        </View>
      </Provider>
    );
  }
};

export default App;