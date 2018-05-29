import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar.jsx';
import AppDrawer from './components/Drawer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <AppDrawer />
      </div>
    );
  }
}

export default App;
