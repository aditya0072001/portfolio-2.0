import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './components/profile.js'
import Header from './components/header.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Profile></Profile>
    </div>
  );
}

export default App;
