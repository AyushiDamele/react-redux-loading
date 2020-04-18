import React, { Component } from 'react';
import RootContainer from './components/RootContainer'
import {Provider} from 'react-redux'
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RootContainer/>
        </div>
      </Provider>
    )

  }
}

export default App;
