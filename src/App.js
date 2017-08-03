import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import aboutpage from './components/aboutpage.js';
import baselayout from './components/baselayout.js';
import contactform from './components/contactform.js';
import descriptions from './components/descriptions.js';
import navbar from './components/navbar.js';
import pictures from './components/pictures.js';
import prices from './components/prices.js';


export default class App extends Component {
  render() {
    return (
    <baselayout>
        <navbar>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>'Hello'</p>
              </div>
            </div>
        </navbar>
    </baselayout>
    );
  }
}
