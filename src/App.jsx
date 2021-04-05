import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Video from './components/Video';
import Suggestions from './components/Suggestions';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Video />
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default App;
