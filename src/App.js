import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ParseProvider } from 'react-parse';
import { Parse } from 'parse';
import * as Env from './environments.js';

import Components from './Components/Components';
import './App.css';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is the App component.
        <Components />
      </header>
    </div>
  );
}

export default App;
