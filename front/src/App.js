import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './components/profile.js'
import Header from './components/header.js'
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Profile></Profile>
      <Project></Project>
    </div>
  );
}

export default App;
